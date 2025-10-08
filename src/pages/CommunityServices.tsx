import { GraduationCap, Users, Heart, Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const CommunityServices = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        {/* What We Do Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('whatWeDoSection.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('whatWeDoSection.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Saturday School */}
          <Card className="relative overflow-hidden border-t-4 border-t-primary hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t('whatWeDoSection.saturdaySchool.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('whatWeDoSection.saturdaySchool.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{t('whatWeDoSection.saturdaySchool.everySaturday')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{t('whatWeDoSection.saturdaySchool.time')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{t('whatWeDoSection.saturdaySchool.location')}</span>
                </div>
              </div>
              <Button 
                className="w-full bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => navigate('/enrollment')}
              >
                {t('whatWeDoSection.saturdaySchool.enrollButton')}
              </Button>
            </CardContent>
          </Card>

          {/* Community Activities */}
          <Card className="relative overflow-hidden border-t-4 border-t-primary hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t('whatWeDoSection.communityActivities.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('whatWeDoSection.communityActivities.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{t('whatWeDoSection.communityActivities.weeklyEvents')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{t('whatWeDoSection.communityActivities.allAges')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{t('whatWeDoSection.communityActivities.variousLocations')}</span>
                </div>
              </div>
              <Button 
                className="w-full bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => navigate('/services')}
              >
                {t('whatWeDoSection.communityActivities.viewButton')}
              </Button>
            </CardContent>
          </Card>

          {/* Islamic Burial Services */}
          <Card className="relative overflow-hidden border-t-4 border-t-primary hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t('whatWeDoSection.burialServices.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('whatWeDoSection.burialServices.description')}
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>{t('whatWeDoSection.burialServices.islamicTraditions')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{t('whatWeDoSection.burialServices.support247')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{t('whatWeDoSection.burialServices.familyGuidance')}</span>
                </div>
              </div>
              <Button 
                className="w-full bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => navigate('/funeral-services')}
              >
                {t('whatWeDoSection.burialServices.learnMore')}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('whatWeDoSection.callToAction.title')}
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {t('whatWeDoSection.callToAction.description')}
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigate('/#contact');
                }
              }}
            >
              {t('whatWeDoSection.callToAction.contactButton')}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CommunityServices;