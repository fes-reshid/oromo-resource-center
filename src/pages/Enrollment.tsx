import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitToWeb3Forms } from '@/lib/web3forms';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import schoolHero from '@/assets/school-hero.jpg';

const Enrollment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const childName = formData.get('childName') as string;

      await submitToWeb3Forms(`New Saturday School enrollment for ${childName}`, {
        'Child Full Name': childName,
        'Child Date of Birth': formData.get('childDob') as string,
        'Parent/Guardian Name': formData.get('parentName') as string,
        'Parent Email': formData.get('parentEmail') as string,
        'Parent Phone': formData.get('parentPhone') as string,
        'Emergency Contact Name': (formData.get('emergencyName') as string) || 'N/A',
        'Emergency Contact Phone': (formData.get('emergencyPhone') as string) || 'N/A',
        'Medical/Allergy Information': (formData.get('medical') as string) || 'N/A',
        'Additional Notes': (formData.get('notes') as string) || 'N/A',
      });

      toast({
        title: 'Enrollment Submitted!',
        description: "Thank you — we'll be in touch to confirm your child's enrollment.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast({
        title: 'Error',
        description: 'There was an error submitting the enrollment. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with School Photo */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={schoolHero}
          alt="Saturday School Classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-deep-forest/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="absolute top-8 left-8 text-primary-foreground hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <GraduationCap className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Saturday School Enrollment
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join our comprehensive educational program for Oromo language, Islamic studies, and cultural heritage
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-foreground mb-4">
                Saturday School Enrollment
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Please fill out the form below to enroll your child in our Saturday school program
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Child's Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="childName">Child's Full Name *</Label>
                      <Input id="childName" name="childName" placeholder="Enter child's full name" required />
                    </div>
                    <div>
                      <Label htmlFor="childDob">Child's Date of Birth *</Label>
                      <Input id="childDob" name="childDob" type="date" required />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Parent/Guardian Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input id="parentName" name="parentName" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input id="parentPhone" name="parentPhone" placeholder="Enter your phone number" required />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input id="parentEmail" name="parentEmail" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyName">Emergency Contact Name</Label>
                      <Input id="emergencyName" name="emergencyName" placeholder="Enter emergency contact name" />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                      <Input id="emergencyPhone" name="emergencyPhone" placeholder="Enter emergency contact phone" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="medical">Medical / Allergy Information</Label>
                  <Textarea
                    id="medical"
                    name="medical"
                    placeholder="Please list any medical conditions or allergies we should know about"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Anything else you'd like us to know"
                    rows={3}
                  />
                </div>

                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto px-12" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    We will contact you within 2-3 business days to confirm enrollment
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;
