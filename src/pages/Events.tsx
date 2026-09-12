import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  PartyPopper,
  FerrisWheel,
  Candy,
  Palette,
  Popcorn,
  Sparkles,
  CalendarPlus,
  Navigation,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import eventsContent from '@/content/upcoming-events.json';
import { googleCalendarUrl } from '@/lib/calendarLink';
import {
  ACTIVITY_COLORS,
  ACTIVITY_PHOTOS,
  DEFAULT_ACTIVITY_COLOR,
  FESTIVE_STRIPE_CLASS,
  formatRibbonDate,
} from '@/lib/eventStyle';
import EventFlyer from '@/components/EventFlyer';
import Reveal from '@/components/Reveal';

const ACTIVITY_ICONS: Record<string, typeof PartyPopper> = {
  'Jumping Castle': PartyPopper,
  'Chair O Plane': FerrisWheel,
  'Fairy Floss': Candy,
  'Face Painting': Palette,
  Popcorn: Popcorn,
};

const HIGHLIGHT_ICONS = [Users, Popcorn, Sparkles, PartyPopper];

const Events = () => {
  const featuredEvent = eventsContent.events[0];
  const ribbonDate = featuredEvent ? formatRibbonDate(featuredEvent.startDateTime) : '';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <PartyPopper className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Community Events</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Join Our <span className="text-primary">Community Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience the richness of our community through spiritual gatherings, cultural celebrations, and family-friendly events throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Event */}
      {featuredEvent && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <Card className="max-w-5xl mx-auto overflow-hidden border-0 shadow-2xl">
              {featuredEvent.posterImage ? (
                <div className="bg-gradient-to-br from-primary via-primary to-deep-forest p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-primary-foreground text-center md:text-left order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 bg-primary-foreground/15 px-4 py-2 rounded-full mb-4">
                      <PartyPopper className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        {featuredEvent.greeting}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                      {featuredEvent.title}
                    </h2>
                    <p className="text-xl font-semibold text-accent">{featuredEvent.titleOromo}</p>
                    <span className="inline-block mt-3 bg-accent text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                      {featuredEvent.tagline}
                    </span>
                  </div>
                  <div className="order-1 md:order-2">
                    <EventFlyer
                      src={featuredEvent.posterImage}
                      alt={`${featuredEvent.title} flyer`}
                      dateBadge={ribbonDate}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className={FESTIVE_STRIPE_CLASS} />
                  <div className="bg-gradient-to-br from-primary via-primary to-deep-forest text-primary-foreground p-8 md:p-12">
                    <div className="inline-flex items-center gap-2 bg-primary-foreground/15 px-4 py-2 rounded-full mb-4">
                      <PartyPopper className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        {featuredEvent.greeting}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                      {featuredEvent.title}
                    </h2>
                    <p className="text-xl font-semibold text-accent">{featuredEvent.titleOromo}</p>
                    <span className="inline-block mt-3 bg-accent text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full">
                      {featuredEvent.tagline}
                    </span>
                  </div>
                  <div className={FESTIVE_STRIPE_CLASS} />
                </div>
              )}

              <CardContent className="p-6 md:p-10 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{featuredEvent.location}</span>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg px-4 py-2 text-sm font-semibold text-primary inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredEvent.khutbahTime}
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">What's on:</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {featuredEvent.activities.map((activity) => {
                      const Icon = ACTIVITY_ICONS[activity] ?? Sparkles;
                      return (
                        <div
                          key={activity}
                          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium shadow-sm ${
                            ACTIVITY_COLORS[activity] ?? DEFAULT_ACTIVITY_COLOR
                          }`}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          {activity}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="bg-red-600 text-white rounded-lg px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-wide mb-1">Oromo Cultural Food</p>
                    <p className="text-sm">{featuredEvent.foodNote}</p>
                  </div>
                  {featuredEvent.foodPhotos && featuredEvent.foodPhotos.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      {featuredEvent.foodPhotos.map((photo, i) => (
                        <div
                          key={photo}
                          className="aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                          <img
                            src={photo}
                            alt={`Oromo cultural food ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredEvent.highlights.map((highlight, i) => {
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

                <p className="text-primary font-medium leading-relaxed">
                  {featuredEvent.closingOromo}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href={googleCalendarUrl(
                        featuredEvent.title,
                        featuredEvent.startDateTime,
                        featuredEvent.endDateTime,
                        featuredEvent.location,
                        featuredEvent.tagline,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CalendarPlus className="h-4 w-4" />
                      Add to Calendar
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="gap-2">
                    <a href={featuredEvent.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <Navigation className="h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>

                {featuredEvent.sponsor && (
                  <p className="text-xs text-muted-foreground pt-2 border-t">
                    Proudly sponsored by <span className="font-semibold">{featuredEvent.sponsor}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Activity Photo Gallery */}
      {featuredEvent && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                A Day Full of Fun
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jumping castles, fairy floss, face painting and more — something for every child.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {featuredEvent.activities.map((activity, i) => {
                const Icon = ACTIVITY_ICONS[activity] ?? Sparkles;
                const photo = ACTIVITY_PHOTOS[activity];
                return (
                  <Reveal key={activity} delayMs={i * 100}>
                    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                      {photo && (
                        <img
                          src={photo}
                          alt={activity}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div
                        className={`absolute top-3 left-3 h-9 w-9 rounded-full flex items-center justify-center shadow-md ${
                          ACTIVITY_COLORS[activity] ?? DEFAULT_ACTIVITY_COLOR
                        }`}
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <p className="absolute bottom-3 left-3 right-3 text-white font-bold text-sm md:text-base leading-tight">
                        {activity}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-deep-forest p-8 md:p-12 rounded-2xl text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Connected with Our Events
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Don't miss out on upcoming events and celebrations. Contact us to learn more about event schedules and how you can participate.
              </p>
              <Button size="lg" variant="secondary">
                Contact Us for Event Details
              </Button>
            </div>
          </div>
        </div>
      </section>
      )}

      <Footer />
    </div>
  );
};

export default Events;
