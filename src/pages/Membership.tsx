import { Heart, CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useState } from 'react';

const Membership = () => {
  const [dateOfBirth, setDateOfBirth] = useState<Date>();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Funeral Scheme Membership</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join the ORC Funeral Scheme for comprehensive Islamic funeral service coverage
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Membership Form */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">ORC Funeral Scheme Membership Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="surname">Surname *</Label>
                    <Input id="surname" placeholder="Enter your surname" />
                  </div>
                </div>
              </div>

              {/* Marital Status */}
              <div>
                <Label className="text-base font-medium">Marital Status *</Label>
                <RadioGroup defaultValue="no" className="flex gap-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="married-yes" />
                    <Label htmlFor="married-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="married-no" />
                    <Label htmlFor="married-no">No</Label>
                  </div>
                </RadioGroup>
                <div className="mt-3">
                  <Label htmlFor="spouse">Spouse Name</Label>
                  <Input id="spouse" placeholder="Enter spouse name (if applicable)" />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <Label className="text-base font-medium">Date of Birth *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-2",
                        !dateOfBirth && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {dateOfBirth ? format(dateOfBirth, "PPP") : <span>Pick your date of birth</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={dateOfBirth}
                      onSelect={setDateOfBirth}
                      disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">Address *</Label>
                <Textarea id="address" placeholder="Enter your full address" rows={3} />
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input id="mobile" placeholder="Enter your mobile number" />
                  </div>
                  <div>
                    <Label htmlFor="home">Home Number</Label>
                    <Input id="home" placeholder="Enter your home number" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                </div>
              </div>

              {/* Next of Kin */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Next of Kin</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nextOfKin">Next of Kin Name *</Label>
                    <Input id="nextOfKin" placeholder="Enter next of kin name" />
                  </div>
                  <div>
                    <Label htmlFor="nextOfKinMobile">Mobile Number *</Label>
                    <Input id="nextOfKinMobile" placeholder="Enter their mobile number" />
                  </div>
                </div>
              </div>

              {/* Children */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Children</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="child1">Child 1</Label>
                    <Input id="child1" placeholder="Enter child name" />
                  </div>
                  <div>
                    <Label htmlFor="child2">Child 2</Label>
                    <Input id="child2" placeholder="Enter child name" />
                  </div>
                  <div>
                    <Label htmlFor="child3">Child 3</Label>
                    <Input id="child3" placeholder="Enter child name" />
                  </div>
                  <div>
                    <Label htmlFor="child4">Child 4</Label>
                    <Input id="child4" placeholder="Enter child name" />
                  </div>
                  <div>
                    <Label htmlFor="child5">Child 5</Label>
                    <Input id="child5" placeholder="Enter child name" />
                  </div>
                  <div>
                    <Label htmlFor="child6">Child 6</Label>
                    <Input id="child6" placeholder="Enter child name" />
                  </div>
                </div>
              </div>

              {/* Terms and Acknowledgment */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Terms and Acknowledgment</h3>
                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <p className="text-sm">
                    I hereby acknowledge that I have read and understood the terms and conditions of ORC Funeral Scheme 
                    and I agree to all the terms by signing below.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="memberSignature">Member Signature *</Label>
                    <Input id="memberSignature" placeholder="Type your full name as signature" />
                  </div>
                  <div>
                    <Label htmlFor="witnessName">Witnessed by ORC Office Bearer</Label>
                    <Input id="witnessName" placeholder="Office bearer name" />
                  </div>
                </div>
                
                <div className="mt-4">
                  <Label htmlFor="dateSign">Date Signed *</Label>
                  <Input id="dateSign" type="date" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button size="lg" className="w-full md:w-auto px-12">
                  Submit Membership Application
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  We will contact you within 2-3 business days to confirm your membership
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Membership;