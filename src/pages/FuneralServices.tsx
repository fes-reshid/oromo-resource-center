import { Heart, Mail, MapPin, DollarSign, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import content from '@/content/funeral-services.json';

// Renders "**bold**" segments (as authored in the CMS content) as <strong>.
function renderBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

const FuneralServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">{content.heading}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.subheading}
          </p>
        </div>
        {/* Contact Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{content.contactInfo.address}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>{content.contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>ABN: {content.contactInfo.abn}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">{content.about.heading}</h2>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            {content.about.text}
          </p>
        </div>

        {/* Our Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.services.map((service) => (
              <Card key={service} className="border-l-4 border-l-primary">
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
              {content.savingsFund.heading}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              {content.savingsFund.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  {content.savingsFund.keyFeatures.map((feature) => (
                    <li key={feature}>• {renderBold(feature)}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">{content.savingsFund.estimatedCostHeading}</h4>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-lg font-bold">{content.savingsFund.averageCost}</p>
                  <p className="text-sm text-muted-foreground">
                    {content.savingsFund.averageCostNote}
                  </p>
                </div>

                <div className="mt-4">
                  <h5 className="font-medium mb-2">Banking Details:</h5>
                  <div className="text-sm space-y-1">
                    <p><strong>Account Name:</strong> {content.savingsFund.banking.accountName}</p>
                    <p><strong>BSB:</strong> {content.savingsFund.banking.bsb}</p>
                    <p><strong>Account Number:</strong> {content.savingsFund.banking.accountNumber}</p>
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
              {content.importantNotes.map((note) => (
                <li key={note}>• {note}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Membership Call-to-Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">{content.membershipCta.heading}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {content.membershipCta.text}
              </p>
              <Button size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => window.location.href = '/membership'}>
                {content.membershipCta.buttonText}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FuneralServices;
