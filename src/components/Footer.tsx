import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import aetherlogikLogo from '@/assets/aetherlogik-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    "IT Infrastructure",
    "Dedicated Servers",
    "AI Automation", 
    "Chatbot Development",
    "Web Development",
    "Backend Development"
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Contact", id: "contact" },
    { name: "Book Consultation", id: "appointment" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={aetherlogikLogo} 
                alt="AetherLogik Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AetherLogik
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. 
              From IT infrastructure to AI automation, we're your trusted partner 
              in digital transformation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://bit.ly/aetherlogik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://t.me/aetherlogik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Miami, Florida</div>
                  <div className="text-sm">United States</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+17864597652" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (786) 459-7652
                  </a>
                  <div className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM EST</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@aetherlogik.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@aetherlogik.com
                  </a>
                  <div className="text-sm text-muted-foreground">24h response time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} AetherLogik. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;