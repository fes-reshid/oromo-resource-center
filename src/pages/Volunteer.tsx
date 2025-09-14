import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Volunteer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.mobile || !formData.description) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase.from('volunteer_applications').insert({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        description: formData.description,
      });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in volunteering. We will contact you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile: '',
        description: ''
      });
    } catch (error) {
      console.error('Error submitting volunteer application:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
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
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="mobile" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Tell Us About Yourself *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="What best describes you and how would you like to help our community? Share your skills, interests, and availability."
                    className="min-h-[120px]"
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Please include any relevant experience, skills you'd like to share, or specific areas where you'd like to contribute.
                  </p>
                </div>

                <div className="text-center pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto px-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    We will contact you within 2-3 business days to discuss opportunities.
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