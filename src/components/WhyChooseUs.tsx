import { CheckCircle, Clock, Users, Trophy, Lightbulb, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Trophy,
      title: "Proven Excellence",
      description: "5+ years of delivering exceptional technology solutions with a 100% client satisfaction rate."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled developers, system architects, and AI specialists with extensive industry experience."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge technologies and creative approaches to solve complex business challenges."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Agile development methodology ensuring rapid deployment without compromising quality."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your systems running smoothly."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes to ensure reliable, bug-free solutions."
    }
  ];

  const benefits = [
    "Integrated technology ecosystem",
    "Scalable solutions that grow with your business",
    "Cost-effective implementations",
    "Future-proof architectures",
    "Comprehensive documentation and training",
    "Ongoing optimization and updates"
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">AetherLogik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just deliver technology solutions – we create lasting partnerships 
            that drive your business forward in the digital age.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Key Reasons */}
          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits & Approach */}
          <div className="space-y-8">
            <div className="card-primary p-8">
              <h3 className="text-2xl font-bold mb-6">Our Integrated Approach</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unlike traditional tech companies that focus on single solutions, AetherLogik 
                takes a holistic approach. We integrate IT infrastructure, AI automation, 
                and development services to create synergistic solutions that maximize efficiency 
                and ROI.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">What You Get:</h4>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Overview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold">Discovery & Analysis</div>
                    <div className="text-sm text-muted-foreground">Understanding your business needs and current infrastructure</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold">Strategy & Planning</div>
                    <div className="text-sm text-muted-foreground">Designing integrated solutions tailored to your goals</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold">Implementation & Testing</div>
                    <div className="text-sm text-muted-foreground">Agile development with continuous quality assurance</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold">Deployment & Support</div>
                    <div className="text-sm text-muted-foreground">Smooth rollout with ongoing maintenance and optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="card-primary p-8 text-center max-w-4xl mx-auto">
          <div className="text-2xl font-bold mb-4">
            "AetherLogik transformed our entire technology infrastructure. Their integrated approach 
            saved us time, money, and gave us a competitive edge we never had before."
          </div>
          <div className="text-muted-foreground">
            — Sarah Johnson, CTO at TechFlow Solutions
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;