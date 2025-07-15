import { Heart, Mail, MapPin, DollarSign, FileText, CalendarIcon } from 'lucide-react';
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

const FuneralServices = () => {
  const [dateOfBirth, setDateOfBirth] = useState<Date>();

  const services = [
    "Death Certificate Assistance: Guidance in obtaining the official death certificate.",
    "Funeral Savings Fund: A structured plan designed to accumulate funds in advance to cover funeral expenses.",
    "Kafan (Shroud): Provision and application of the Islamic burial shroud.",
    "Ghusl (Ritual Washing): Preparation of the deceased's body through ritual washing, performed by trained male or female staff as appropriate.",
    "Shrouding: Wrapping the deceased in the kafan according to Islamic tradition.",
    "Ghusl Facilities: Use of our designated washing facility or access to partnered community facilities.",
    "Janazah Prayer: Organizing and conducting the funeral prayer (Salat al-Janazah) at the mosque.",
    "Transportation: Arranging the transfer of the deceased to the mosque and subsequently to the cemetery.",
    "Casket/Janaza Box: Provided through our affiliated Muslim funeral services.",
    "Burial Arrangements: Coordinating the burial process at designated Muslim cemeteries and securing a burial plot (qabr) in accordance with Islamic requirements.",
    "Taaziya (Condolence Gathering): Facilitation of up to three days of bereavement gathering at ORC or another venue chosen by the family.",
    "Education and Training: Providing community education and training related to Islamic funeral rites and procedures."
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ORC Funeral Service</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive Islamic funeral services for the Muslim Oromo community in Melbourne, Australia
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>664–678 Downing Street, Mt Cottrell VIC 3024</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>oromoirc@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>ABN: 24 434 146 730</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">About ORC Janaza Service</h2>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            The ORC Janaza Service provides comprehensive Islamic funeral services for the Muslim Oromo community in Melbourne, Australia. 
            Our services follow the traditional Islamic funeral and burial rites (Tajheez-o-Takfeen) in compliance with Australian legal requirements.
            We aim to support families during their time of loss with dignity, respect, and professionalism, ensuring the deceased is treated 
            in accordance with Islamic teachings.
          </p>
        </div>

        {/* Our Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <p className="text-sm">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Funeral Savings Fund */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Funeral Savings Fund
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The ORC Funeral Savings Fund offers financial planning for future funeral costs and is open to all members 
              of the Muslim Oromo community in Melbourne.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Initial Registration Fee:</strong> $500 per family (one-time, non-refundable)</li>
                  <li>• <strong>Monthly Contribution:</strong> $50 per family via direct debit</li>
                  <li>• <strong>Coverage:</strong> Full or partial funeral cost coverage</li>
                  <li>• <strong>Continuity:</strong> Monthly contributions must be maintained</li>
                  <li>• <strong>Liability Limit:</strong> Limited to total contributed amount</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Estimated Costs (June 2025):</h4>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-lg font-bold">Average Funeral Cost: $8,500</p>
                  <p className="text-sm text-muted-foreground">
                    Based on burials at Bacchus Marsh Cemetery, VIC 3340 during office hours
                  </p>
                </div>
                
                <div className="mt-4">
                  <h5 className="font-medium mb-2">Banking Details:</h5>
                  <div className="text-sm space-y-1">
                    <p><strong>Account Name:</strong> Oromo Resource Centre</p>
                    <p><strong>BSB:</strong> 063-622</p>
                    <p><strong>Account Number:</strong> 10636275</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl">Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• All services are provided with a commitment to the highest standards of Islamic integrity, confidentiality, and cultural sensitivity.</li>
              <li>• As the ORC funeral service expands, we plan to offer in-house transport and burial services directly.</li>
              <li>• We encourage families to plan early and educate younger generations about the importance of Islamic burial traditions.</li>
              <li>• Actual costs may vary due to changes in location, cemetery fees, administrative costs, and burial time (weekends, after-hours, etc.).</li>
              <li>• Members or their next of kin are responsible for notifying ORC of any changes to contact or banking details and ensuring timely payments.</li>
            </ul>
          </CardContent>
        </Card>

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

export default FuneralServices;