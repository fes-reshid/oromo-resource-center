import { Menu, X, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Western Melbourne</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>Contact Us</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">O</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Oromo Resource Center</h1>
              <p className="text-sm text-muted-foreground">Melbourne Community Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="default" size="sm">
              Get Involved
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border/50">
            <div className="flex flex-col gap-2 pt-4">
              <a href="#home" className="block py-2 text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="block py-2 text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors">Contact</a>
              <Button variant="default" size="sm" className="mt-2 self-start">
                Get Involved
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;