import { Menu, X, MapPin, Phone, Users, Calculator } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Language Bar - Green */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end py-2 text-sm text-primary-foreground">
            <span className="mr-2">Language —</span>
            <button className="hover:underline font-semibold">English</button>
            <span className="mx-1">|</span>
            <button className="hover:underline">Oromo</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          {/* Top row with quick links */}
          <div className="hidden lg:flex items-center justify-between py-3 border-b border-border/50">
            <div className="flex items-center gap-6">
              <Link to="/membership" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <Users className="h-4 w-4" />
                <span>BECOME A MEMBER</span>
              </Link>
              <a href="/#contact" className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4" />
                <span>CHAPTER LOCATOR</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/community-services" className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-foreground hover:text-primary transition-colors border border-border rounded">
                <span>ANNUAL REPORT 2024</span>
              </Link>
              <Link to="/membership" className="flex items-center gap-2 px-3 py-1 text-xs font-semibold text-foreground hover:text-primary transition-colors border border-border rounded">
                <Calculator className="h-4 w-4" />
                <span>MEMBERSHIP CALCULATOR</span>
              </Link>
            </div>
          </div>

          {/* Main navigation row */}
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/b99f89fa-f302-4d77-8775-fb2f5e6a9ec1.png" 
                alt="Oromo Resource Centre Inc Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground">Oromo Resource Centre Inc</h1>
                <p className="text-xs text-muted-foreground">Melbourne Community Hub</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">HOME</Link>
              <Link to="/#about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">ABOUT</Link>
              <Link to="/#what-we-do" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">WHAT WE DO</Link>
              <Link to="/#support" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">SUPPORT US</Link>
              <Link to="/volunteer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">GET INVOLVED</Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6">
                DONATE
              </Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col gap-2 py-4">
              <Link to="/membership" className="flex items-center gap-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                <Users className="h-4 w-4" />
                <span>BECOME A MEMBER</span>
              </Link>
              <a href="/#contact" className="flex items-center gap-2 py-2 text-sm text-foreground hover:text-primary transition-colors">
                <MapPin className="h-4 w-4" />
                <span>CHAPTER LOCATOR</span>
              </a>
              <Link to="/" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">HOME</Link>
              <Link to="/#about" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">ABOUT</Link>
              <Link to="/#what-we-do" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">WHAT WE DO</Link>
              <Link to="/#support" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">SUPPORT US</Link>
              <Link to="/volunteer" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">GET INVOLVED</Link>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold mt-2">
                DONATE
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;