import { ArrowRight, Cpu, Globe, Bot } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 animate-float">
          <Cpu className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <Globe className="w-6 h-6 text-secondary" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Bot className="w-10 h-10 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Future-Ready
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Technology
                </span>
                Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Empowering businesses in Miami and beyond with cutting-edge IT infrastructure, 
                AI automation, and high-performance development solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-primary group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="card-glow">
              <div className="card-primary p-8 text-center animate-glow">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                      <Cpu className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">IT Infrastructure</h3>
                    <p className="text-sm text-muted-foreground">Dedicated servers & maintenance</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto">
                      <Bot className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold">AI Automation</h3>
                    <p className="text-sm text-muted-foreground">Intelligent chatbots & workflows</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
                      <Globe className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-semibold">Web Development</h3>
                    <p className="text-sm text-muted-foreground">High-performance applications</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto">
                      <ArrowRight className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">Baycoding</h3>
                    <p className="text-sm text-muted-foreground">Optimized development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;