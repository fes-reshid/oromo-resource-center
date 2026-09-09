import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { submitToWeb3Forms } from '@/lib/web3forms';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const INTEREST_AREAS = [
  'Saturday School',
  'Event Support',
  'Cultural Programs',
  'Administrative Support',
  'Funeral & Community Support',
];

const Volunteer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleInterest = (area: string, checked: boolean) => {
    setInterests((prev) => (checked ? [...prev, area] : prev.filter((a) => a !== area)));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const name = formData.get('name') as string;

      await submitToWeb3Forms(`New volunteer application from ${name}`, {
        Name: name,
        Email: formData.get('email') as string,
        Phone: (formData.get('phone') as string) || 'N/A',
        'Areas of Interest': interests.length > 0 ? interests.join(', ') : 'N/A',
        Availability: (formData.get('availability') as string) || 'N/A',
        Message: (formData.get('message') as string) || 'N/A',
      });

      toast({
        title: 'Application Submitted!',
        description: "Thank you for volunteering — we'll be in touch soon.",
      });

      form.reset();
      setInterests([]);
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting your application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Make a difference in our community by volunteering with Oromo Resource Centre Inc
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Volunteer Information */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Why Volunteer With Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Make an Impact</h3>
                  <p className="text-muted-foreground">
                    Help preserve Oromo culture and language while supporting community members in their journey of integration and growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Build Connections</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals and become part of a supportive community working towards common goals.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Develop Skills</h3>
                  <p className="text-muted-foreground">
                    Gain valuable experience in community service, event organization, education, and cultural preservation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Flexible Opportunities</h3>
                  <p className="text-muted-foreground">
                    Choose from various volunteer roles that match your skills, interests, and availability.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Application Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Volunteer Application</CardTitle>
              <p className="text-muted-foreground">
                Tell us about yourself and how you'd like to contribute to our community.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Input id="availability" name="availability" placeholder="e.g. Weekends, evenings" />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Areas of Interest</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {INTEREST_AREAS.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox
                          id={`interest-${area}`}
                          checked={interests.includes(area)}
                          onCheckedChange={(checked) => toggleInterest(area, checked === true)}
                        />
                        <Label htmlFor={`interest-${area}`} className="font-normal">
                          {area}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Why would you like to volunteer with us?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about yourself and why you'd like to help"
                    rows={4}
                  />
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto px-12" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    We will contact you within 2-3 business days
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Volunteer;
