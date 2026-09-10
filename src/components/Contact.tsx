import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Reveal from '@/components/Reveal';
import { submitToWeb3Forms } from '@/lib/web3forms';
import content from '@/content/contact.json';

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

      await submitToWeb3Forms(`New contact form message from ${formData.firstName} ${formData.lastName}`, {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        'Service Type': formData.serviceType,
        Message: formData.message,
      });

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
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {content.heading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  {content.location.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  <a
                    href={content.location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    {content.location.address}
                  </a>
                  {'\n'}
                  {content.location.description}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  {content.emergencyContact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {content.emergencyContact.text}{'\n'}
                  <span className="font-semibold text-primary">{content.emergencyContact.highlight}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  {content.saturdaySchoolHours.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {content.saturdaySchoolHours.text}{'\n'}
                  <span className="text-sm">{content.saturdaySchoolHours.note}</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">{content.quickContact.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {content.quickContact.text}
                </p>
                <Button
                  className="w-full"
                  onClick={() => {
                    window.location.href = `tel:${content.quickContact.phone}`;
                  }}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-foreground">{content.formHeading}</CardTitle>
                <p className="text-muted-foreground">
                  {content.formSubtitle}
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
                  {content.urgentNote}
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
