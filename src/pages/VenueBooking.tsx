import { MapPin, Mail, FileText, Calendar, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const VenueBooking = () => {
  const [equipmentNeeds, setEquipmentNeeds] = useState({
    tables: false,
    chairs: false,
    audio: false,
    projector: false,
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEquipmentChange = (equipment: string, checked: boolean) => {
    setEquipmentNeeds(prev => ({ ...prev, [equipment]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const { error } = await supabase.from('venue_bookings').insert({
        applicant_name: formData.get('name') as string,
        contact_number: formData.get('contact') as string,
        email: formData.get('email') as string,
        organization: formData.get('organization') as string || null,
        purpose: formData.get('purpose') as string,
        booking_date: formData.get('date') as string,
        expected_attendees: parseInt(formData.get('attendees') as string),
        start_time: formData.get('start-time') as string,
        end_time: formData.get('end-time') as string,
        room_area: formData.get('room') as string || null,
        needs_tables: equipmentNeeds.tables,
        needs_chairs: equipmentNeeds.chairs,
        needs_audio: equipmentNeeds.audio,
        needs_projector: equipmentNeeds.projector,
        other_equipment: formData.get('other-equipment') as string || null,
        agreed_to_terms: agreedToTerms,
      });

      if (error) throw error;

      toast({
        title: "Booking Submitted!",
        description: "Your venue booking request has been submitted successfully. We will contact you within 2-3 business days.",
      });

      // Reset form
      e.currentTarget.reset();
      setEquipmentNeeds({ tables: false, chairs: false, audio: false, projector: false });
      setAgreedToTerms(false);
    } catch (error) {
      console.error('Error submitting venue booking:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your booking request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Venue Booking</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Book our community venue for your events and gatherings
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Oromo Resource Centre Inc</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>oromoirc@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>664–678 Downing Street, Mt Cottrell VIC 3024</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>ABN: 24 434 146 730</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Form */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Venue Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Booking Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Booking Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name of Applicant *</Label>
                    <Input id="name" name="name" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="contact">Contact Number *</Label>
                    <Input id="contact" name="contact" placeholder="Enter your phone number" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization/Group</Label>
                    <Input id="organization" name="organization" placeholder="Optional - organization name" />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="purpose">Purpose of Booking *</Label>
                    <Textarea id="purpose" name="purpose" placeholder="Describe the purpose of your event" required />
                  </div>
                  <div>
                    <Label htmlFor="date">Date of Booking *</Label>
                    <Input id="date" name="date" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="attendees">Expected Number of Attendees *</Label>
                    <Input id="attendees" name="attendees" type="number" placeholder="Number of people" required />
                  </div>
                  <div>
                    <Label htmlFor="start-time">Start Time *</Label>
                    <Input id="start-time" name="start-time" type="time" required />
                  </div>
                  <div>
                    <Label htmlFor="end-time">End Time *</Label>
                    <Input id="end-time" name="end-time" type="time" required />
                  </div>
                </div>
              </div>

              {/* Venue Requirements */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Venue Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="room">Room/Area Requested</Label>
                    <Input id="room" name="room" placeholder="Specify which room or area you need" />
                  </div>
                  
                  <div>
                    <Label className="text-base font-medium">Equipment Needed</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="tables" 
                          checked={equipmentNeeds.tables}
                          onCheckedChange={(checked) => handleEquipmentChange('tables', checked as boolean)}
                        />
                        <Label htmlFor="tables" className="text-sm">Tables</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="chairs" 
                          checked={equipmentNeeds.chairs}
                          onCheckedChange={(checked) => handleEquipmentChange('chairs', checked as boolean)}
                        />
                        <Label htmlFor="chairs" className="text-sm">Chairs</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="audio" 
                          checked={equipmentNeeds.audio}
                          onCheckedChange={(checked) => handleEquipmentChange('audio', checked as boolean)}
                        />
                        <Label htmlFor="audio" className="text-sm">Audio Equipment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="projector" 
                          checked={equipmentNeeds.projector}
                          onCheckedChange={(checked) => handleEquipmentChange('projector', checked as boolean)}
                        />
                        <Label htmlFor="projector" className="text-sm">Projector</Label>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Label htmlFor="other-equipment">Other Equipment</Label>
                      <Input id="other-equipment" name="other-equipment" placeholder="Specify any other equipment needed" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost */}
              <Card className="bg-secondary/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Total Cost: $300 AUD (Three Hundred Australian Dollars)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
                  <p>• All bookings are subject to availability and must be confirmed by ORC.</p>
                  <p>• The venue must be left clean and in its original condition.</p>
                  <p>• Any damage to the property will be charged to the applicant.</p>
                  <p>• ORC reserves the right to cancel or change bookings if necessary.</p>
                  <p>• Full payment or deposit may be required before the booking date.</p>
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox 
                    id="agree" 
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    required
                  />
                  <Label htmlFor="agree" className="text-sm">
                    I agree to the terms and conditions stated above *
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12" disabled={isSubmitting || !agreedToTerms}>
                  {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  We will contact you within 2-3 business days to confirm your booking
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VenueBooking;