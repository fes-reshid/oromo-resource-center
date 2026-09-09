import { Heart, DollarSign, CreditCard, Building2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import content from '@/content/donate.json';

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
            {content.description}
          </p>
          <div className="max-w-3xl mx-auto space-y-2">
            <p className="text-lg font-semibold text-primary">
              ✓ {content.taxNote}
            </p>
            <p className="text-lg font-semibold text-primary">
              ✓ {content.sadaqahNote}
            </p>
          </div>
        </div>

        {/* Coming Soon - Stripe */}
        <Card className="mb-12 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              {content.onlinePayments.heading}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-lg">
                {content.onlinePayments.text}
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Bank Transfer Details */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              {content.bankTransfer.heading}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              {content.bankTransfer.intro}
            </p>

            <div className="bg-secondary/30 p-6 rounded-lg space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Name</p>
                  <p className="text-lg font-semibold">{content.bankTransfer.accountName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">BSB</p>
                  <p className="text-lg font-semibold">{content.bankTransfer.bsb}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Account Number</p>
                  <p className="text-lg font-semibold">{content.bankTransfer.accountNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">PayID</p>
                  <p className="text-lg font-semibold">{content.bankTransfer.payId}</p>
                </div>
              </div>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {content.bankTransfer.note}
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Tax Deductibility Notice */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              {content.aboutYourDonation.heading}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-lg font-semibold text-primary mb-2">
                {content.aboutYourDonation.highlight}
              </p>
              <p className="text-sm text-muted-foreground">
                {content.aboutYourDonation.highlightText}
              </p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {content.aboutYourDonation.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Impact Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8">
              <Heart className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">{content.impact.heading}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {content.impact.text}
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>ABN:</strong> {content.impact.abn}
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
