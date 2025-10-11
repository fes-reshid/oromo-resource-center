import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Language Bar - Green */}
      <div className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end py-2 text-sm text-primary-foreground">
            <span className="mr-2">{t('language')} —</span>
            <button onClick={() => setLanguage('en')} className={`hover:underline ${language === 'en' ? 'font-semibold' : ''}`}>{t('english')}</button>
            <span className="mx-1">|</span>
            <button onClick={() => setLanguage('om')} className={`hover:underline ${language === 'om' ? 'font-semibold' : ''}`}>{t('oromo')}</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">

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
              <a href="/" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('home')}</a>
              <a href="/#about" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('aboutLink')}</a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  {t('whatWeDo')} <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link to="/services" className="w-full">{t('servicesLink')}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/gallery" className="w-full">{t('gallery')}</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/#support" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('supportUs')}</Link>
              <Link to="/volunteer" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('getInvolved')}</Link>
              <Link to="/donate">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6">
                  {t('donate')}
                </Button>
              </Link>
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
              <a href="/" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('home')}</a>
              <a href="/#about" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('aboutLink')}</a>
              <Link to="/services" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('servicesLink')}</Link>
              <Link to="/gallery" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('gallery')}</Link>
              <Link to="/#support" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('supportUs')}</Link>
              <Link to="/volunteer" className="py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">{t('getInvolved')}</Link>
              <Link to="/donate" className="block mt-2">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold w-full">
                  {t('donate')}
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;