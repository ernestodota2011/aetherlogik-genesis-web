import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import aetherlogikLogo from '@/assets/aetherlogik-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={aetherlogikLogo} 
              alt="AetherLogik Logo" 
              className="h-12 w-auto md:h-14"
            />
            <span className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AetherLogik
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="btn-ghost"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="btn-ghost"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="btn-ghost"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="btn-ghost"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-ghost"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+1 (786) 459-7652</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@aetherlogik.com</span>
            </div>
            <button 
              onClick={() => scrollToSection('appointment')}
              className="btn-primary"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('appointment')}
                className="btn-primary mt-4"
              >
                Book Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;