import { MapPin, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need IT infrastructure support, AI automation, web development, 
                or a comprehensive technology strategy, our team is here to help. 
                Reach out today for a free consultation.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-colors">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Our Location</h4>
                  <p className="text-muted-foreground">Miami, Florida, USA</p>
                  <p className="text-sm text-muted-foreground">Serving clients locally and globally</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-colors">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+17864597652" 
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    +1 (786) 459-7652
                  </a>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-colors">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:info@aetherlogik.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    info@aetherlogik.com
                  </a>
                  <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Quick Connect */}
            <div className="card-primary p-6">
              <h4 className="font-semibold mb-4">Quick Connect</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Prefer instant messaging? Connect with us on your favorite platform:
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://bit.ly/aetherlogik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/aetherlogik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card-primary p-6">
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Emergency Support Only</span>
                </div>
                <div className="pt-2 border-t border-border/20">
                  <p className="text-xs text-muted-foreground">
                    *24/7 emergency support available for existing clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="card-primary max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4">
              Not Ready to Commit? No Problem!
            </h3>
            <p className="text-muted-foreground mb-6">
              Start with a free 30-minute consultation where we'll discuss your technology 
              challenges and explore potential solutions - no strings attached.
            </p>
            <button 
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;