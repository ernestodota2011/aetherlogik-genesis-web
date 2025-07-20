import { Server, Bot, Globe, Code, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "IT Infrastructure & Dedicated Servers",
      description: "Enterprise-grade server solutions with 99.9% uptime guarantee. From setup to maintenance, we handle your entire IT infrastructure.",
      features: ["Dedicated Server Creation", "24/7 Monitoring", "Hardware Maintenance", "Security Updates", "Performance Optimization"]
    },
    {
      icon: Bot,
      title: "AI Automation & Chatbots",
      description: "Intelligent automation solutions that streamline your business processes and enhance customer engagement.",
      features: ["Conversational AI", "Process Automation", "Machine Learning", "Custom Integrations", "Analytics & Insights"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern Frameworks", "Cross-browser Support"]
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust backend systems and APIs that power your applications with scalability and security in mind.",
      features: ["API Development", "Database Design", "Cloud Integration", "Microservices", "Performance Tuning"]
    },
    {
      icon: Shield,
      title: "IT Security & Upgrades",
      description: "Comprehensive security solutions and technology upgrades to keep your systems protected and up-to-date.",
      features: ["Security Audits", "System Upgrades", "Data Protection", "Compliance", "Risk Assessment"]
    },
    {
      icon: Zap,
      title: "Baycoding Development",
      description: "Our specialized approach to high-performance, optimized code development for maximum efficiency.",
      features: ["Performance Focus", "Clean Code", "Scalable Architecture", "Best Practices", "Quality Assurance"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-primary hover:card-glow group transition-all duration-500 hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-border/20">
                <button className="w-full btn-secondary group-hover:btn-primary transition-all">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-primary max-w-4xl mx-auto p-8">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Every business is unique. Let's discuss how we can create a tailored 
              technology solution that perfectly fits your specific needs and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get Custom Quote
              </button>
              <button 
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;