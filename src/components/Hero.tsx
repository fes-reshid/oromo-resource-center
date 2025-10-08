import { ArrowRight, Users, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/f306178b-014f-4630-8f80-7cb59f05f283.png" 
          alt="Oromo Resource Center grounds and memorial site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-accent">{t('hero.titleAccent')}</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.learnMore')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="default" 
              className="bg-background text-foreground border-2 border-background hover:bg-background/90"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('hero.contactUs')}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <button 
              onClick={() => navigate('/school')}
              className="flex items-center gap-3 hover:bg-primary-foreground/10 p-3 rounded-lg transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">{t('hero.saturdaySchool')}</div>
                <div className="text-sm opacity-90">{t('hero.educationalPrograms')}</div>
              </div>
            </button>
            
            <button 
              onClick={() => navigate('/community-services')}
              className="flex items-center gap-3 hover:bg-primary-foreground/10 p-3 rounded-lg transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">{t('hero.communityHub')}</div>
                <div className="text-sm opacity-90">{t('hero.victoria')}</div>
              </div>
            </button>
            
            <button 
              onClick={() => navigate('/funeral-services')}
              className="flex items-center gap-3 hover:bg-primary-foreground/10 p-3 rounded-lg transition-colors cursor-pointer text-left"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">{t('hero.burialServices')}</div>
                <div className="text-sm opacity-90">{t('hero.islamicTraditions')}</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;