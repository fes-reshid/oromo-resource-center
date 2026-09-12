import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '@/content/footer.json';

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
                <h3 className="text-xl font-bold">{content.orgName}</h3>
                <p className="text-primary-foreground/80 text-sm">{content.tagline}</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              {content.description}
            </p>
            <div className="flex gap-4">
              <a href={content.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={content.social.website} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><a href="./#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Services</Link></li>
              <li><a href="./#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><Link to="/volunteer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Volunteer</Link></li>
              <li><Link to="/membership" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Contact Info</h4>
            <div className="space-y-3">
              <a href={content.contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">{content.contact.location}</span>
              </a>
              <a href={content.contact.phoneHref} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">{content.contact.phoneLabel}</span>
              </a>
              <a href={`mailto:${content.contact.email}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80 text-sm">{content.contact.email}</span>
              </a>
            </div>

            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
              <h5 className="font-medium text-primary-foreground mb-2">{content.saturdaySchool.title}</h5>
              <p className="text-primary-foreground/80 text-sm">
                {content.saturdaySchool.text}<br />
                {content.saturdaySchool.note}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            {content.copyright}
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground/80 text-sm">{content.loveNote}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
