import { ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router-dom';
import content from '@/content/upcoming-events.json';
import { useLanguage } from '@/contexts/LanguageContext';

const UpcomingEvents = () => {
  const { language } = useLanguage();
  const om = language === 'om';
  if (content.events.length === 0) return null;
  // Event content uses Melbourne local dates; compare in the same timezone.
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Melbourne', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const upcoming = content.events.filter(event => (event.endDateTime || event.startDateTime).slice(0, 10) >= today).sort((a, b) => a.startDateTime.localeCompare(b.startDateTime));
  const event = upcoming[0] || [...content.events].sort((a, b) => b.startDateTime.localeCompare(a.startDateTime))[0];
  const isUpcoming = upcoming.length > 0;
  return (
    <section className="orc-event-section">
      <div className="container mx-auto px-4 orc-event-layout">
        <Reveal><p className="orc-eyebrow">{om ? 'Hawaasa keenya keessatti' : 'Life at ORC'}</p><h2>{om ? 'Walitti dhufnee, yaadannoo uumanna.' : 'Coming together. Making memories.'}</h2><p className="text-muted-foreground mt-5 mb-6 leading-relaxed">{om ? 'Sagantaalee maatii, aadaa fi walitti dhufeenya hawaasa keenyaa ilaalaa.' : 'Celebrating our culture, sharing good company and making space for every generation.'}</p><Link to="/events" className="orc-text-link">{om ? 'Taateewwan ilaali' : 'Explore community events'}<ArrowRight size={18} /></Link></Reveal>
        <Reveal delayMs={120}><article className="orc-event-card">
          {event.posterImage && <div className="orc-event-poster"><img src={event.posterImage} alt={`${event.title} poster`} loading="lazy" /></div>}
          <div className="orc-event-details"><p className="orc-eyebrow mb-3">{isUpcoming ? (om ? 'Taatee dhufu' : 'Upcoming event') : (om ? 'Taatee darbe' : 'Past community event')}</p><h3>{om ? event.titleOromo : event.title}</h3><p className="text-sm text-muted-foreground">{event.tagline}</p><dl>
            <div><Calendar size={16} /><dt className="sr-only">Date</dt><dd>{event.date}</dd></div>
            <div><Clock size={16} /><dt className="sr-only">Time</dt><dd>{event.time}</dd></div>
            <div><MapPin size={16} /><dt className="sr-only">Location</dt><dd>{event.location}</dd></div>
          </dl><Link to="/events" className="orc-text-link">{om ? 'Odeeffannoo taatee' : 'View event details'}<ArrowRight size={17} /></Link></div>
        </article></Reveal>
      </div>
    </section>
  );
};
export default UpcomingEvents;
