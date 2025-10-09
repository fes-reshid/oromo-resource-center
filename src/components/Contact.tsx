import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || 
          !formData.phone || !formData.serviceType || !formData.message) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const contactData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        message: formData.message,
      };

      const { error } = await supabase.from('contact_messages').insert(contactData);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      // Send email notification
      try {
        await supabase.functions.invoke('send-form-notification', {
          body: {
            formType: 'contact',
            data: contactData
          }
        });
      } catch (emailError) {
        console.error('Error sending email notification:', emailError);
        // Don't fail the submission if email fails
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact message:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/30 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have questions about our services or need immediate support, 
            we're here to help our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Victoria<br />
                  Serving Footscray, Sunshine,<br />
                  Werribee, and surrounding areas
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For burial services and<br />
                  urgent community support<br />
                  <span className="font-semibold text-primary">Available 24/7</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  Saturday School Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every Saturday<br />
                  9:00 AM - 3:00 PM<br />
                  <span className="text-sm">Registration required</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Quick Contact</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Need immediate assistance or have questions? Reach out to us directly.
                </p>
                <Button 
                  className="w-full"
                  onClick={() => {
                    window.location.href = 'tel:+61-xxx-xxx-xxx';
                  }}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  We'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input 
                        placeholder="Your first name" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      How can we help you? *
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground"
                      value={formData.serviceType}
                      onChange={(e) => handleInputChange('serviceType', e.target.value)}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="saturday-school">Saturday School Enrollment</option>
                      <option value="community">Community Activities</option>
                      <option value="burial">Burial Services</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Please tell us more about how we can help you..." 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center">
                  For urgent matters, especially burial services, please call our 24/7 line directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;