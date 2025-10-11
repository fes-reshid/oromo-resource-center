import { Heart, DollarSign, CreditCard, Building2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Donate = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            {t('donate')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Support the Oromo Resource Centre in serving our community through education, 
            cultural preservation, and essential services.
          </p>
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-lg font-semibold text-primary">
              ✓ All donations are tax deductible
            </p>
            <p className="text-lg font-semibold text-primary">
              ✓ Your donation is Sadaqah Jariyah (ongoing charity)
            </p>
          </div>
        </div>

        {/* Coming Soon - Stripe */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              Online Card Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-lg">
                <strong>Coming Soon!</strong> We're working on integrating secure online card payments 
                through Stripe. Soon you'll be able to donate easily using your credit or debit card.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Bank Transfer Details */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Bank Transfer Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              You can make a direct bank transfer to support our organization. 
              Please use the details below:
            </p>
            
            <div className="bg-secondary/30 p-6 rounded-lg space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                  <p className="text-lg font-semibold">Oromo Resource Centre</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">BSB</p>
                  <p className="text-lg font-semibold">063-622</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                  <p className="text-lg font-semibold">10636275</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">PayID</p>
                  <p className="text-lg font-semibold">oromoirc@gmail.com</p>
                </div>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Please include your name or reference in the transfer description so we can 
                acknowledge your generous donation.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Tax Deductibility Notice */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              About Your Donation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">
                All donations are tax deductible and count as Sadaqah Jariyah
              </p>
              <p className="text-sm text-muted-foreground">
                Your donation is an ongoing charity that continues to benefit the community, 
                earning you rewards long after your contribution.
              </p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• All donations support our community programs, educational services, and cultural activities</li>
              <li>• Your contribution helps us maintain our facilities and continue serving the Oromo community</li>
              <li>• Every donation, no matter the size, makes a meaningful difference</li>
              <li>• For tax receipts or queries, please contact us at oromoirc@gmail.com</li>
            </ul>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Your Impact Matters</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your generous donation helps us provide Saturday school education, preserve our cultural 
                heritage, offer Islamic burial services, and support families in our community.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>ABN:</strong> 24 434 146 730
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
