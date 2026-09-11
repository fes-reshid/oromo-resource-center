import { Calendar, Clock, MapPin, PartyPopper } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router-dom';
import content from '@/content/upcoming-events.json';
import { formatRibbonDate } from '@/lib/eventStyle';
import EventFlyer from '@/components/EventFlyer';

const UpcomingEvents = () => {
  if (content.events.length === 0) return null;
  const event = content.events[0];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <PartyPopper className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Upcoming Event</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Join us on this big event
          </h2>
        </Reveal>

        <Card className="max-w-md mx-auto overflow-hidden border-0 shadow-xl">
          {event.posterImage ? (
            <div className="bg-gradient-to-br from-primary via-primary to-deep-forest p-6 flex justify-center">
              <EventFlyer
                src={event.posterImage}
                alt={`${event.title} flyer`}
                dateBadge={formatRibbonDate(event.startDateTime)}
                className="max-w-[280px]"
              />
            </div>
          ) : (
            <div className="bg-gradient-to-br from-primary via-primary to-deep-forest text-primary-foreground p-6">
              <h3 className="text-2xl font-extrabold tracking-tight">{event.title}</h3>
              <p className="text-lg font-semibold text-accent">{event.titleOromo}</p>
            </div>
          )}

          <CardContent className="p-6 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground">{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground">{event.location}</span>
            </div>

            <Button asChild className="w-full mt-2">
              <Link to="/events">View Full Event Details</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UpcomingEvents;
