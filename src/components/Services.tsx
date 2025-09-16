import { GraduationCap, Users, Heart, Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supporting our community through education, cultural activities, and spiritual guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Saturday School */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">Saturday School</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Comprehensive educational programs for children including Oromo language, 
                Islamic studies, and cultural heritage preservation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Every Saturday</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>9:00 AM - 3:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Victoria</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => navigate('/enrollment')}
              >
                Enroll Your Child
              </Button>
            </CardContent>
          </Card>

          {/* Community Activities */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-xl text-foreground">Community Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Regular community gatherings, cultural celebrations, workshops, and 
                support programs for families in Victoria.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Weekly Events</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>All Ages Welcome</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Various Locations</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => navigate('/community-services')}
              >
                View Services
              </Button>
            </CardContent>
          </Card>

          {/* Burial Services */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-deep-forest"></div>
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">Islamic Burial Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Compassionate and dignified burial services following Islamic traditions, 
                providing support to families during difficult times.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>Islamic Traditions</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Family Guidance</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => navigate('/funeral-services')}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-deep-forest p-8 rounded-2xl text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Need Our Support?</h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you're looking for educational opportunities, community connection, 
              or spiritual guidance, we're here to help.
            </p>
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;