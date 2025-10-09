import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/b99f89fa-f302-4d77-8775-fb2f5e6a9ec1.png" 
                alt="Oromo Resource Centre Inc Logo" 
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-bold">Oromo Resource Centre Inc</h3>
                <p className="text-primary-foreground/80 text-sm">Melbourne Community Hub</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Serving the Oromo community in Victoria with educational programs, 
              cultural activities, and Islamic burial services. Building bridges between 
              tradition and modern life.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/664DowningStreet" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://oromorc.org.au" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="/#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Services</a></li>
              <li><a href="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="/volunteer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Volunteer</a></li>
              <li><a href="/membership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Contact Info</h4>
            <div className="space-y-3">
              <a href="https://maps.google.com/?q=Victoria,Australia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">Victoria</span>
              </a>
              <a href="tel:+61" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">24/7 Emergency Line</span>
              </a>
              <a href="mailto:info@oromorc.org.au" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">info@oromorc.org.au</span>
              </a>
            </div>

            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <h5 className="font-medium text-primary-foreground mb-2">Saturday School</h5>
              <p className="text-primary-foreground/80 text-sm">
                Every Saturday, 9:00 AM - 3:00 PM<br />
                Registration now open!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Oromo Resource Centre Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground/80 text-sm">Serving our community with love</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;