import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
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
                  Western Melbourne<br />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    How can we help you?
                  </label>
                  <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground">
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
                    Message
                  </label>
                  <Textarea 
                    placeholder="Please tell us more about how we can help you..." 
                    rows={5}
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  onClick={() => {
                    // Handle form submission here
                    alert('Message functionality will be implemented with form handling');
                  }}
                >
                  Send Message
                </Button>

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