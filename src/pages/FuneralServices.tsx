import { Heart, Mail, MapPin, DollarSign, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FuneralServices = () => {

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
        <Card>
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
      </div>
    </div>
  );
};

export default FuneralServices;