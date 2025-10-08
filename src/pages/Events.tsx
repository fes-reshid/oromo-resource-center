import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Users, Clock, PartyPopper, BookOpen, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const events = [
    {
      title: 'Muhadara',
      description: 'Islamic lectures and educational sessions featuring renowned scholars and speakers, providing spiritual guidance and knowledge to our community.',
      icon: BookOpen,
      color: 'from-primary to-accent',
      details: [
        { icon: Calendar, text: 'Monthly Sessions' },
        { icon: Clock, text: 'Evening Programs' },
        { icon: Users, text: 'Open to All' },
        { icon: MapPin, text: 'Victoria' }
      ]
    },
    {
      title: 'ORC Family Day',
      description: 'A special day bringing together families from our community for fun activities, cultural programs, and shared meals. Strengthening bonds and creating memories.',
      icon: Users,
      color: 'from-accent to-primary',
      details: [
        { icon: Calendar, text: 'Annual Event' },
        { icon: Clock, text: 'All Day Activities' },
        { icon: Users, text: 'Family Friendly' },
        { icon: MapPin, text: 'Various Venues' }
      ]
    },
    {
      title: 'Eid al-Fitr',
      description: 'Celebrate the blessed festival marking the end of Ramadan with communal prayers, festive meals, and joyous gatherings with the community.',
      icon: PartyPopper,
      color: 'from-primary to-deep-forest',
      details: [
        { icon: Calendar, text: 'After Ramadan' },
        { icon: Clock, text: 'Morning Prayer & Celebration' },
        { icon: Users, text: 'Community Celebration' },
        { icon: MapPin, text: 'Victoria' }
      ]
    },
    {
      title: 'Eid al-Adha',
      description: 'Join us in commemorating the willingness of Ibrahim to sacrifice as an act of obedience to Allah. Prayers, sacrifice, and community feasting.',
      icon: Heart,
      color: 'from-deep-forest to-primary',
      details: [
        { icon: Calendar, text: 'During Hajj Season' },
        { icon: Clock, text: 'Morning Prayer & Qurbani' },
        { icon: Users, text: 'Community Gathering' },
        { icon: MapPin, text: 'Victoria' }
      ]
    }
  ];

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

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${event.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {event.details.map((detail, idx) => {
                        const DetailIcon = detail.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <DetailIcon className="h-4 w-4 text-primary" />
                            <span>{detail.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
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

      <Footer />
    </div>
  );
};

export default Events;
