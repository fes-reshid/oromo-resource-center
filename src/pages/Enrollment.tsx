import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import schoolHero from '@/assets/school-hero.jpg';

const Enrollment = () => {
  const navigate = useNavigate();

  // Load JotForm embed handler script
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.innerHTML = `window.jotformEmbedHandler("iframe[id='JotFormIFrame-253146975453869']", "https://form.jotform.com/")`;
      document.body.appendChild(script2);
    };

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with School Photo */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={schoolHero} 
          alt="Saturday School Classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-deep-forest/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="absolute top-8 left-8 text-primary-foreground hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <GraduationCap className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Saturday School Enrollment
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join our comprehensive educational program for Oromo language, Islamic studies, and cultural heritage
            </p>
          </div>
        </div>
      </section>

      {/* JotForm Course Registration */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-foreground mb-4">
                Saturday School Enrollment
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Please fill out the form below to enroll your child in our Saturday school program
              </p>
            </CardHeader>
            <CardContent>
              <iframe
                id="JotFormIFrame-253146975453869"
                title="Course Registration Form"
                onLoad={() => window.parent.scrollTo(0,0)}
                allowTransparency={true}
                allow="geolocation; microphone; camera; fullscreen; payment"
                src="https://form.jotform.com/253146975453869"
                frameBorder="0"
                style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                scrolling="no"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;