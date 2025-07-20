import { Server, Bot, Globe, Code, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Server,
      title: "IT Infrastructure & Dedicated Servers",
      description: "Enterprise-grade server solutions with 99.9% uptime guarantee. From setup to maintenance, we handle your entire IT infrastructure.",
      features: ["Dedicated Server Creation", "24/7 Monitoring", "Hardware Maintenance", "Security Updates", "Performance Optimization"],
      detailedInfo: "Our IT infrastructure services provide comprehensive server solutions designed for maximum reliability and performance. We specialize in creating custom dedicated server environments that meet your specific business needs, ensuring 99.9% uptime with our enterprise-grade hardware and monitoring systems.",
      technologies: ["Linux/Windows Server", "VMware", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"],
      benefits: ["Reduced downtime and increased productivity", "Scalable infrastructure that grows with your business", "24/7 expert support and monitoring", "Enhanced security and data protection", "Cost-effective compared to in-house infrastructure"]
    },
    {
      icon: Bot,
      title: "AI Automation & Chatbots",
      description: "Intelligent automation solutions that streamline your business processes and enhance customer engagement.",
      features: ["Conversational AI", "Process Automation", "Machine Learning", "Custom Integrations", "Analytics & Insights"],
      detailedInfo: "Transform your business operations with our cutting-edge AI automation and chatbot solutions. We develop intelligent systems that handle customer inquiries, automate repetitive tasks, and provide valuable insights through machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Natural Language Processing", "OpenAI GPT", "Dialogflow", "Rasa"],
      benefits: ["Reduced operational costs and human error", "24/7 customer support availability", "Improved customer satisfaction and response times", "Valuable data insights and analytics", "Scalable automation that grows with your business"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Modern Frameworks", "Cross-browser Support"],
      detailedInfo: "Create stunning, high-performance websites that engage your audience and drive business growth. Our web development services combine beautiful design with robust functionality, ensuring your site looks great and performs excellently across all devices.",
      technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Progressive Web Apps"],
      benefits: ["Improved online presence and brand credibility", "Better search engine rankings and visibility", "Enhanced user experience and engagement", "Mobile-first responsive design", "Fast loading times and optimal performance"]
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust backend systems and APIs that power your applications with scalability and security in mind.",
      features: ["API Development", "Database Design", "Cloud Integration", "Microservices", "Performance Tuning"],
      detailedInfo: "Build powerful, scalable backend systems that serve as the foundation of your digital applications. Our backend development expertise ensures your applications can handle growth, maintain security, and integrate seamlessly with third-party services.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs", "Microservices"],
      benefits: ["Scalable architecture for business growth", "Secure data handling and API endpoints", "Improved application performance and reliability", "Seamless third-party integrations", "Cost-effective cloud deployment strategies"]
    },
    {
      icon: Shield,
      title: "IT Security & Upgrades",
      description: "Comprehensive security solutions and technology upgrades to keep your systems protected and up-to-date.",
      features: ["Security Audits", "System Upgrades", "Data Protection", "Compliance", "Risk Assessment"],
      detailedInfo: "Protect your business with comprehensive security solutions and strategic technology upgrades. We conduct thorough security audits, implement robust protection measures, and ensure your systems stay current with the latest security standards and compliance requirements.",
      technologies: ["Penetration Testing", "SSL/TLS", "Firewalls", "VPN", "Encryption", "Multi-factor Authentication", "GDPR Compliance"],
      benefits: ["Enhanced protection against cyber threats", "Compliance with industry regulations", "Reduced risk of data breaches", "Improved system performance through upgrades", "Peace of mind with continuous monitoring"]
    },
    {
      icon: Zap,
      title: "Baycoding Development",
      description: "Our specialized approach to high-performance, optimized code development for maximum efficiency.",
      features: ["Performance Focus", "Clean Code", "Scalable Architecture", "Best Practices", "Quality Assurance"],
      detailedInfo: "Experience our unique 'Baycoding' methodology - a specialized approach to software development that prioritizes performance, maintainability, and efficiency. We write clean, optimized code that not only works flawlessly but also performs at peak efficiency.",
      technologies: ["Performance Optimization", "Code Profiling", "Memory Management", "Algorithm Optimization", "Clean Code Principles", "Test-Driven Development"],
      benefits: ["Faster application performance and response times", "Reduced server costs through optimization", "Easier maintenance and future development", "Higher code quality and reliability", "Competitive advantage through superior performance"]
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
                <button 
                  onClick={() => setSelectedService(index)}
                  className="w-full btn-secondary group-hover:btn-primary transition-all"
                >
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

        {/* Service Details Modal */}
        {selectedService !== null && (
          <ServiceDetails
            service={services[selectedService]}
            isOpen={selectedService !== null}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Services;