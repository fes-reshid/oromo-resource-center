import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Heart, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SpiritualServices = () => {
  const navigate = useNavigate();

  const prayerTimes = [
    { name: 'Fajr', time: '5:30 AM' },
    { name: 'Dhuhr', time: '1:00 PM' },
    { name: 'Asr', time: '4:30 PM' },
    { name: 'Maghrib', time: '7:00 PM' },
    { name: 'Isha', time: '8:30 PM' }
  ];

  const burialFeatures = [
    'Islamic Traditions',
    '24/7 Support',
    'Family Guidance'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Spiritual Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supporting your spiritual journey with prayer facilities, guidance, and compassionate services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Jumma Prayer */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Jumma Prayer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join our community for Jumma (Friday) prayer services. Experience spiritual unity and strengthen your faith with fellow community members.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Friday Prayer Times:</p>
                <p className="text-lg text-primary">1:00 PM - 2:00 PM</p>
              </div>
            </CardContent>
          </Card>

          {/* Salah Times */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Daily Salah Times</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Daily prayer times for Melbourne, Victoria
              </p>
              <div className="space-y-3">
                {prayerTimes.map((prayer, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium text-foreground">{prayer.name}</span>
                    <span className="text-primary font-semibold">{prayer.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Times are approximate and may vary. Please check with the centre for exact timings.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Burial Services */}
        <Card className="hover:shadow-lg transition-all duration-300 mb-8">
          <CardHeader>
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl">Islamic Burial Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-6">
              Compassionate and dignified burial services following Islamic traditions, providing support to families during difficult times.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {burialFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-primary/5 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate('/funeral-services')}
            >
              Learn More About Burial Services
            </Button>
          </CardContent>
        </Card>

        {/* Become a Member CTA */}
        <Card className="bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl text-white">Become a Member</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Join our community and access all spiritual services, educational programs, and support services. Be part of a caring and supportive community.
            </p>
            <Button 
              variant="secondary"
              className="w-full md:w-auto"
              onClick={() => navigate('/membership')}
            >
              Join Our Community
            </Button>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpiritualServices;
