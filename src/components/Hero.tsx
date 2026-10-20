import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, GraduationCap, Heart, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HERO_PHOTOS = [
  { src: '/lovable-uploads/gallery-1.jpg', altEn: 'Families and community members gathering at ORC', altOm: 'Hawaasa Oromoo walitti dhufe' },
  { src: '/lovable-uploads/gallery-2.jpg', altEn: 'Community members gathered outside the ORC centre', altOm: 'Miseensonni hawaasaa mana ORC duratti walitti qabaman' },
  { src: '/lovable-uploads/gallery-4.jpg', altEn: 'Community members walking together at ORC', altOm: 'Miseensonni hawaasaa ORC keessatti walwajjin deemaa jiru' },
  { src: '/lovable-uploads/gallery-3.jpg', altEn: 'Community members honoured with certificates at ORC', altOm: 'Miseensonni hawaasaa waraqaa ragaa ORC irraa argatan' },
];
const HERO_PHOTO_INTERVAL_MS = 5000;

const Hero = () => {
  const { t, language } = useLanguage();
  const om = language === 'om';
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setPhotoIndex((i) => (i + 1) % HERO_PHOTOS.length),
      HERO_PHOTO_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);
  const services = [
    { icon: GraduationCap, title: t('hero.saturdaySchool'), text: t('hero.educationalPrograms'), to: '/school' },
    { icon: Users, title: t('hero.communityHub'), text: t('hero.victoria'), to: '/community-services' },
    { icon: Heart, title: t('hero.burialServices'), text: t('hero.islamicTraditions'), to: '/funeral-services' },
  ];
  return (
    <section id="home" className="orc-hero" aria-labelledby="welcome-heading">
      <div className="orc-hero-orbit" aria-hidden="true" />
      <div className="container mx-auto px-4 relative">
        <div className="orc-hero-grid">
          <div className="orc-hero-copy">
            <p className="orc-eyebrow"><span className="orc-status-dot" />{om ? 'Baga nagaan dhuftan · Melbourne' : 'Welcome to your community · Melbourne'}</p>
            <h1 id="welcome-heading">{t('hero.title')} <span>{t('hero.titleAccent')}</span></h1>
            <p className="orc-hero-description">{t('hero.description')}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/community-services" className="orc-button orc-button-gold">{t('hero.communityHub')}<ArrowUpRight size={19} /></Link>
              <a href="#about" className="orc-button orc-button-outline">{t('hero.learnMore')}<ArrowRight size={18} /></a>
            </div>
            <div className="orc-hero-note"><MapPin size={16} aria-hidden="true" />Mount Cottrell, Victoria<span aria-hidden="true">·</span>{om ? 'Waliin ni guddanna' : 'Growing together'}</div>
          </div>
          <div className="orc-hero-visual">
            <div className="orc-photo-outline" aria-hidden="true" />
            <figure className="orc-hero-photo">
              {HERO_PHOTOS.map((photo, i) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={i === photoIndex ? (om ? photo.altOm : photo.altEn) : ''}
                  width="1919"
                  height="1279"
                  fetchPriority={i === 0 ? 'high' : undefined}
                  className={`orc-hero-photo-slide ${i === photoIndex ? 'is-active' : ''}`}
                  aria-hidden={i === photoIndex ? undefined : true}
                />
              ))}
              <figcaption>{om ? 'Hawaasa keenya. Mana keenya.' : 'Our community. Our home.'}</figcaption>
            </figure>
            <div className="orc-photo-badge"><Heart size={21} /><span>{om ? 'Tokkummaa keenya' : 'Connected by culture'}<strong>{om ? 'Dhalootaaf barnoota' : 'Inspired by the next generation'}</strong></span></div>
            <div className="orc-photo-mark" aria-hidden="true">ORC<span>MELBOURNE</span></div>
          </div>
        </div>
        <div className="orc-service-strip">
          {services.map(({ icon: Icon, title, text, to }, i) => (
            <Link to={to} key={to} className="orc-service-link" style={{ animationDelay: `${i * 100 + 200}ms` }}>
              <div className="orc-service-icon"><Icon size={24} /></div><div><h2>{title}</h2><p>{text}</p></div><ArrowUpRight className="orc-service-arrow" size={21} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
