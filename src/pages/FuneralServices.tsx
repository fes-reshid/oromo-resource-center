import { Heart, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const FuneralServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-24 flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Heart className="h-10 w-10 text-primary" />
          </div>
          <div className="inline-flex items-center gap-2 bg-secondary/40 px-4 py-1.5 rounded-full mb-4 text-sm font-medium text-foreground">
            <Clock className="h-4 w-4" />
            Coming Soon
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Funeral Services
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're updating this page. In the meantime, for burial services or urgent support,
            please contact us directly.
          </p>
          <Button size="lg" onClick={() => navigate('/#contact')}>
            Contact Us
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FuneralServices;
