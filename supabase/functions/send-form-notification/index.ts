import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormNotificationRequest {
  formType: 'venue_booking' | 'membership' | 'volunteer' | 'enrollment' | 'contact';
  data: any;
}

// Helper function to convert object to CSV
const objectToCSV = (data: any): string => {
  const headers = Object.keys(data).join(',');
  const values = Object.values(data).map(val => 
    typeof val === 'string' && val.includes(',') ? `"${val}"` : val
  ).join(',');
  return `${headers}\n${values}`;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data }: FormNotificationRequest = await req.json();
    console.log(`Processing ${formType} form notification`);

    let subject = "";
    let html = "";

    switch (formType) {
      case 'venue_booking':
        subject = `New Venue Booking Request - ${data.applicant_name}`;
        html = `
          <h1>New Venue Booking Request</h1>
          <h2>Applicant Details</h2>
          <p><strong>Name:</strong> ${data.applicant_name}</p>
          <p><strong>Contact:</strong> ${data.contact_number}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Organization:</strong> ${data.organization || 'N/A'}</p>
          
          <h2>Event Details</h2>
          <p><strong>Purpose:</strong> ${data.purpose}</p>
          <p><strong>Date:</strong> ${data.booking_date}</p>
          <p><strong>Time:</strong> ${data.start_time} - ${data.end_time}</p>
          <p><strong>Expected Attendees:</strong> ${data.expected_attendees}</p>
          <p><strong>Room/Area:</strong> ${data.room_area || 'N/A'}</p>
          
          <h2>Equipment Needed</h2>
          <ul>
            <li>Tables: ${data.needs_tables ? 'Yes' : 'No'}</li>
            <li>Chairs: ${data.needs_chairs ? 'Yes' : 'No'}</li>
            <li>Audio Equipment: ${data.needs_audio ? 'Yes' : 'No'}</li>
            <li>Projector: ${data.needs_projector ? 'Yes' : 'No'}</li>
          </ul>
          <p><strong>Other Equipment:</strong> ${data.other_equipment || 'None'}</p>
          
          <p><strong>Cost:</strong> $300 AUD</p>
          <p><strong>Terms Agreed:</strong> ${data.agreed_to_terms ? 'Yes' : 'No'}</p>
        `;
        break;

      case 'membership':
        subject = `New Membership Application - ${data.first_name} ${data.surname}`;
        html = `
          <h1>New Funeral Scheme Membership Application</h1>
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> ${data.first_name} ${data.surname}</p>
          <p><strong>Date of Birth:</strong> ${data.date_of_birth}</p>
          <p><strong>Marital Status:</strong> ${data.is_married ? 'Married' : 'Single'}</p>
          ${data.spouse_name ? `<p><strong>Spouse Name:</strong> ${data.spouse_name}</p>` : ''}
          
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Mobile:</strong> ${data.mobile_number}</p>
          ${data.home_number ? `<p><strong>Home:</strong> ${data.home_number}</p>` : ''}
          <p><strong>Email:</strong> ${data.email}</p>
          
          <h2>Next of Kin</h2>
          <p><strong>Name:</strong> ${data.next_of_kin_name}</p>
          <p><strong>Mobile:</strong> ${data.next_of_kin_mobile}</p>
          
          <h2>Children</h2>
          <ul>
            ${data.child_1 ? `<li>${data.child_1}</li>` : ''}
            ${data.child_2 ? `<li>${data.child_2}</li>` : ''}
            ${data.child_3 ? `<li>${data.child_3}</li>` : ''}
            ${data.child_4 ? `<li>${data.child_4}</li>` : ''}
            ${data.child_5 ? `<li>${data.child_5}</li>` : ''}
            ${data.child_6 ? `<li>${data.child_6}</li>` : ''}
          </ul>
          
          <h2>Signature</h2>
          <p><strong>Member Signature:</strong> ${data.member_signature}</p>
          ${data.witness_name ? `<p><strong>Witnessed by:</strong> ${data.witness_name}</p>` : ''}
          <p><strong>Date Signed:</strong> ${data.date_signed}</p>
        `;
        break;

      case 'volunteer':
        subject = `New Volunteer Application - ${data.name}`;
        html = `
          <h1>New Volunteer Application</h1>
          <h2>Applicant Details</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mobile:</strong> ${data.mobile}</p>
          
          <h2>About the Applicant</h2>
          <p>${data.description}</p>
        `;
        break;

      case 'enrollment':
        subject = `New School Enrollment - ${data.child_name}`;
        html = `
          <h1>New Saturday School Enrollment</h1>
          <h2>Child Information</h2>
          <p><strong>Name:</strong> ${data.child_name}</p>
          <p><strong>Age Group:</strong> ${data.child_age_group}</p>
          
          <h2>Parent/Guardian Information</h2>
          <p><strong>Name:</strong> ${data.parent_name}</p>
          <p><strong>Email:</strong> ${data.parent_email}</p>
          <p><strong>Phone:</strong> ${data.parent_phone}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          
          <h2>Emergency Contact</h2>
          <p><strong>Name:</strong> ${data.emergency_contact_name}</p>
          <p><strong>Phone:</strong> ${data.emergency_contact_phone}</p>
          
          <h2>Additional Information</h2>
          ${data.previous_education ? `<p><strong>Previous Education:</strong> ${data.previous_education}</p>` : ''}
          ${data.special_needs ? `<p><strong>Special Needs:</strong> ${data.special_needs}</p>` : ''}
          ${data.additional_info ? `<p><strong>Additional Comments:</strong> ${data.additional_info}</p>` : ''}
        `;
        break;

      case 'contact':
        subject = `New Contact Message - ${data.first_name} ${data.last_name}`;
        html = `
          <h1>New Contact Form Message</h1>
          <h2>Contact Details</h2>
          <p><strong>Name:</strong> ${data.first_name} ${data.last_name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service Type:</strong> ${data.service_type}</p>
          
          <h2>Message</h2>
          <p>${data.message}</p>
        `;
        break;

      default:
        throw new Error(`Unknown form type: ${formType}`);
    }

    // Generate CSV content
    const csvContent = objectToCSV(data);
    const csvBase64 = btoa(csvContent);
    
    const emailResponse = await resend.emails.send({
      from: "ORC Forms <onboarding@resend.dev>",
      to: ["savefes@gmail.com"],
      subject: subject,
      html: html,
      attachments: [
        {
          filename: `${formType}_${new Date().toISOString().split('T')[0]}.csv`,
          content: csvBase64,
        },
      ],
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
