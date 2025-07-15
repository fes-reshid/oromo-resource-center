import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Phone, Mail, MapPin, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import schoolHero from '@/assets/school-hero.jpg';

const Enrollment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    emergencyContact: '',
    emergencyPhone: '',
    previousEducation: '',
    specialNeeds: '',
    additionalInfo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.childName || !formData.childAge || !formData.parentName || 
          !formData.parentEmail || !formData.parentPhone || !formData.address ||
          !formData.emergencyContact || !formData.emergencyPhone) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const enrollmentData = {
        child_name: formData.childName,
        child_age_group: formData.childAge,
        parent_name: formData.parentName,
        parent_email: formData.parentEmail,
        parent_phone: formData.parentPhone,
        address: formData.address,
        emergency_contact_name: formData.emergencyContact,
        emergency_contact_phone: formData.emergencyPhone,
        previous_education: formData.previousEducation || null,
        special_needs: formData.specialNeeds || null,
        additional_info: formData.additionalInfo || null,
      };

      console.log('Submitting enrollment data:', enrollmentData);

      const { error } = await supabase.from('enrollments').insert(enrollmentData);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast({
        title: "Enrollment Submitted!",
        description: "Thank you for your enrollment. We will contact you within 2 business days.",
      });

      // Reset form
      setFormData({
        childName: '',
        childAge: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        address: '',
        emergencyContact: '',
        emergencyPhone: '',
        previousEducation: '',
        specialNeeds: '',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your enrollment. Please try again.",
        variant: "destructive",
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
                Enrollment Application
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Please fill out all required fields to enroll your child in our Saturday school program
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Child Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Child Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Child's Full Name *</Label>
                      <Input
                        id="childName"
                        value={formData.childName}
                        onChange={(e) => handleInputChange('childName', e.target.value)}
                        placeholder="Enter child's full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Age Group *</Label>
                      <Select onValueChange={(value) => handleInputChange('childAge', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5-7">5-7 years</SelectItem>
                          <SelectItem value="8-10">8-10 years</SelectItem>
                          <SelectItem value="11-13">11-13 years</SelectItem>
                          <SelectItem value="14-16">14-16 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Parent Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Parent/Guardian Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        placeholder="Enter parent/guardian name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => handleInputChange('parentEmail', e.target.value)}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Enter home address"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Emergency Contact
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                        placeholder="Enter emergency contact name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone">Emergency Phone Number *</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                        placeholder="Enter emergency phone number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Additional Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="previousEducation">Previous Oromo/Islamic Education</Label>
                      <Textarea
                        id="previousEducation"
                        value={formData.previousEducation}
                        onChange={(e) => handleInputChange('previousEducation', e.target.value)}
                        placeholder="Please describe any previous Oromo language or Islamic education your child has received"
                        rows={3}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialNeeds">Special Needs or Accommodations</Label>
                      <Textarea
                        id="specialNeeds"
                        value={formData.specialNeeds}
                        onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
                        placeholder="Please describe any special needs or accommodations your child may require"
                        rows={3}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Comments</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder="Any additional information you'd like us to know"
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Program Information */}
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Program Details
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span><strong>Schedule:</strong> Every Saturday, 9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span><strong>Location:</strong> Western Melbourne (exact location will be provided upon enrollment)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <span><strong>Curriculum:</strong> Oromo language, Islamic studies, cultural heritage</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button type="submit" size="lg" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Enrollment Application'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg"
                    onClick={() => navigate('/')}
                  >
                    Cancel
                  </Button>
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