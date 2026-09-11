import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Users,
  GraduationCap,
  Heart,
  PartyPopper,
  Calendar,
  Clock,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import eventsContent from '@/content/upcoming-events.json';
import { formatRibbonDate } from '@/lib/eventStyle';
import EventFlyer from '@/components/EventFlyer';

const SLIDE_INTERVAL_MS = 8000;

const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const featuredEvent = eventsContent.events[0];
  const slideCount = featuredEvent ? 2 : 1;

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (slideCount < 2) return;
    const advance = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slideCount);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(advance);
  }, [slideCount]);

  const fadeUp = () =>
    `transition-all duration-700 ease-out ${
      loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ width: `${slideCount * 100}%`, transform: `translateX(-${(100 / slideCount) * slideIndex}%)` }}
      >
        {/* Slide 1: main hero */}
        <div className="relative min-h-screen flex items-center flex-shrink-0" style={{ width: `${100 / slideCount}%` }}>
          <div className="absolute inset-0 z-0">
            <img
              src="lovable-uploads/f306178b-014f-4630-8f80-7cb59f05f283.png"
              alt="Oromo Resource Center grounds and memorial site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${fadeUp()}`}>
                {t('hero.title')}
                <span className="block text-accent">{t('hero.titleAccent')}</span>
              </h1>

              <p
                className={`text-lg md:text-xl mb-8 leading-relaxed opacity-95 ${fadeUp()}`}
                style={{ transitionDelay: loaded ? '150ms' : '0ms' }}
              >
                {t('hero.description')}
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 mb-12 ${fadeUp()}`}
                style={{ transitionDelay: loaded ? '300ms' : '0ms' }}
              >
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
              <div
                className={`grid grid-cols-1 sm:grid-cols-3 gap-6 ${fadeUp()}`}
                style={{ transitionDelay: loaded ? '450ms' : '0ms' }}
              >
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
        </div>

        {/* Slide 2: featured upcoming event */}
        {featuredEvent && (
          <div
            className="relative min-h-screen flex items-center flex-shrink-0 bg-gradient-to-br from-primary via-primary to-deep-forest"
            style={{ width: `${100 / slideCount}%` }}
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_60%,white,transparent_35%)]" />
            {featuredEvent.posterImage && (
              <img
                src={featuredEvent.posterImage}
                alt=""
                aria-hidden
                className="hidden md:block absolute right-[-8%] top-1/2 -translate-y-1/2 w-[65%] max-w-[900px] opacity-[0.14] blur-md scale-110 pointer-events-none select-none"
              />
            )}
            <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
              <div className="text-primary-foreground text-center md:text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
                  <PartyPopper className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold tracking-wide uppercase">Upcoming Event</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-3 leading-tight">
                  {featuredEvent.title}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-accent mb-4">
                  {featuredEvent.titleOromo}
                </p>
                <p className="text-lg md:text-xl mb-8 opacity-95">{featuredEvent.tagline}</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                    {featuredEvent.date}
                  </div>
                  <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                    {featuredEvent.time}
                  </div>
                  <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                    {featuredEvent.location}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group"
                    onClick={() => navigate('/events')}
                  >
                    View Event Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="default"
                    className="bg-background text-foreground border-2 border-background hover:bg-background/90"
                    onClick={() => {
                      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                      setSlideIndex(0);
                    }}
                  >
                    Back to Home
                  </Button>
                </div>
              </div>

              {featuredEvent.posterImage && (
                <div className="order-1 md:order-2">
                  <EventFlyer
                    src={featuredEvent.posterImage}
                    alt={`${featuredEvent.title} flyer`}
                    dateBadge={formatRibbonDate(featuredEvent.startDateTime)}
                    className="max-w-[300px] sm:max-w-[360px] md:max-w-[440px]"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Slide navigation dots */}
      {slideCount > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setSlideIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === slideIndex ? 'w-8 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
