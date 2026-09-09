import {
  Calendar,
  Clock,
  MapPin,
  PartyPopper,
  FerrisWheel,
  Candy,
  Palette,
  Popcorn,
  Users,
  Sparkles,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import { Link } from 'react-router-dom';
import content from '@/content/upcoming-events.json';

const ACTIVITY_ICONS: Record<string, typeof PartyPopper> = {
  'Jumping Castle': PartyPopper,
  'Chair O Plane': FerrisWheel,
  'Fairy Floss': Candy,
  'Face Painting': Palette,
  Popcorn: Popcorn,
};

const HIGHLIGHT_ICONS = [Users, Popcorn, Sparkles, PartyPopper];

const UpcomingEvents = () => {
  if (content.events.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <PartyPopper className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Upcoming Event</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Join Us for Our Next Celebration
          </h2>
        </Reveal>

        {/* Horizontally scrollable strip — ready for more than one event */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {content.events.map((event) => (
            <Card
              key={event.title}
              className="min-w-[320px] md:min-w-[600px] snap-center flex-shrink-0 overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {event.posterImage ? (
                <img
                  src={event.posterImage}
                  alt={`${event.title} flyer`}
                  className="w-full max-h-72 object-cover"
                />
              ) : (
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 md:p-8">
                  <p className="text-sm opacity-90 mb-1">{event.greeting}</p>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">{event.title}</h3>
                  <p className="text-lg font-semibold text-accent">{event.titleOromo}</p>
                  <p className="mt-2 text-primary-foreground/90">{event.tagline}</p>
                </div>
              )}

              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{event.location}</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg px-4 py-2 text-sm font-semibold text-primary inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {event.khutbahTime}
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's on:</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {event.activities.map((activity) => {
                      const Icon = ACTIVITY_ICONS[activity] ?? Sparkles;
                      return (
                        <div
                          key={activity}
                          className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2 text-sm text-foreground"
                        >
                          <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                          {activity}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">{event.foodNote}</p>

                <div className="flex flex-wrap gap-2">
                  {event.highlights.map((highlight, i) => {
                    const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                    return (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/15 text-accent-foreground px-3 py-1.5 rounded-full"
                      >
                        <Icon className="h-3.5 w-3.5 text-primary" />
                        {highlight}
                      </span>
                    );
                  })}
                </div>

                <p className="text-primary font-medium leading-relaxed">{event.closingOromo}</p>

                {event.sponsor && (
                  <p className="text-xs text-muted-foreground pt-2 border-t">
                    Proudly sponsored by <span className="font-semibold">{event.sponsor}</span>
                  </p>
                )}

                <Button asChild className="w-full sm:w-auto">
                  <Link to="/events">View Full Event Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
