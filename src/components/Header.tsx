import { Menu, X, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/f306178b-014f-4630-8f80-7cb59f05f283.png" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative container mx-auto px-4">
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
            <img 
              src="/lovable-uploads/b99f89fa-f302-4d77-8775-fb2f5e6a9ec1.png" 
              alt="Oromo Resource Centre Inc Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Oromo Resource Centre Inc</h1>
              <p className="text-sm text-muted-foreground">Melbourne Community Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Link to="/volunteer">
              <Button variant="default" size="sm">
                Volunteer
              </Button>
            </Link>
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
              <Link to="/" className="block py-2 text-foreground hover:text-primary transition-colors">Home</Link>
              <a href="/#about" className="block py-2 text-foreground hover:text-primary transition-colors">About</a>
              <a href="/#services" className="block py-2 text-foreground hover:text-primary transition-colors">Services</a>
              <a href="/#contact" className="block py-2 text-foreground hover:text-primary transition-colors">Contact</a>
              <Link to="/volunteer">
                <Button variant="default" size="sm" className="mt-2 self-start">
                  Volunteer
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;