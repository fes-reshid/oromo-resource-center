import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Heart, Sparkles, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: GraduationCap,
      title: t('servicesPage.educational.title'),
      description: t('servicesPage.educational.description'),
      features: [
        t('servicesPage.educational.saturdaySchool'),
        t('servicesPage.educational.adultClasses'),
        t('servicesPage.educational.quranicStudies'),
        t('servicesPage.educational.languageClasses')
      ],
      color: 'primary',
      link: '/school'
    },
    {
      icon: Sparkles,
      title: t('servicesPage.cultural.title'),
      description: t('servicesPage.cultural.description'),
      features: [
        t('servicesPage.cultural.celebrations'),
        t('servicesPage.cultural.workshops'),
        t('servicesPage.cultural.heritagePreservation')
      ],
      color: 'accent'
    },
    {
      icon: Users,
      title: t('servicesPage.support.title'),
      description: t('servicesPage.support.description'),
      features: [
        t('servicesPage.support.settlementSupport'),
        t('servicesPage.support.translationServices'),
        t('servicesPage.support.counseling'),
        t('servicesPage.support.jobSupport')
      ],
      color: 'secondary'
    },
    {
      icon: Heart,
      title: t('servicesPage.spiritual.title'),
      description: t('servicesPage.spiritual.description'),
      features: [
        t('servicesPage.spiritual.prayerFacilities'),
        t('servicesPage.spiritual.islamicEducation'),
        t('servicesPage.spiritual.burialServices'),
        t('servicesPage.spiritual.religiousGuidance')
      ],
      color: 'primary'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('servicesPage.title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('servicesPage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className={`h-5 w-5 text-${service.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => service.link && navigate(service.link)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
