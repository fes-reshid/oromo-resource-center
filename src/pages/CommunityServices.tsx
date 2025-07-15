import { Users, Heart, Calendar, MapPin, Clock, PartyPopper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CommunityServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Nikah Services",
      description: "Traditional Islamic wedding ceremonies conducted with dignity and respect, following proper Islamic guidelines and customs.",
      icon: Heart,
      features: [
        "Islamic marriage ceremony",
        "Proper documentation",
        "Religious guidance",
        "Witness arrangement"
      ]
    },
    {
      title: "Wedding Celebrations",
      description: "Beautiful wedding celebrations that honor both Islamic traditions and Oromo cultural heritage.",
      icon: PartyPopper,
      features: [
        "Cultural wedding ceremonies",
        "Traditional music and dance",
        "Catering arrangements",
        "Photography services"
      ]
    },
    {
      title: "Taziya Services",
      description: "Compassionate support and traditional condolence gatherings for families during times of bereavement.",
      icon: Users,
      features: [
        "Condolence gathering arrangements",
        "Community support coordination",
        "Prayer services",
        "Meal arrangements for families"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Community Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Supporting our community through life's most important moments with traditional Islamic and Oromo cultural services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Services Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Community Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive support for life's special moments, combining Islamic traditions 
            with Oromo cultural heritage to serve our community in Western Melbourne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 animate-fade-in">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Service Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>664–678 Downing Street, Mt Cottrell VIC 3024</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Available by appointment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Advance booking recommended</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Venue Booking Call-to-Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-accent/10 to-primary/5 border-accent/20">
            <CardContent className="p-8">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl font-bold mb-4">Need a Venue?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Book our community hall for your special events, celebrations, and gatherings
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto hover-scale" 
                onClick={() => navigate('/venue-booking')}
              >
                Book Venue
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityServices;