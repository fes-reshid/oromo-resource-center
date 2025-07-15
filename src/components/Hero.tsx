import { ArrowRight, Users, GraduationCap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/new-hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Oromo Resource Center building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Community, 
            <span className="block text-accent">Preserving Culture</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
            The Oromo Resource Center serves Melbourne's western communities with 
            Saturday education programs, cultural activities, and Islamic burial services. 
            Together, we strengthen our heritage and support our families.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="secondary" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Us Today
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Saturday School</div>
                <div className="text-sm opacity-90">Educational Programs</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Community Hub</div>
                <div className="text-sm opacity-90">Western Melbourne</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">Burial Services</div>
                <div className="text-sm opacity-90">Islamic Traditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;