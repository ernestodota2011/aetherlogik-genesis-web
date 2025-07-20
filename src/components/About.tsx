import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">AetherLogik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based in the vibrant tech hub of Miami, AetherLogik is your trusted partner for 
            comprehensive technology solutions that drive business transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Pioneering Technology Excellence</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AetherLogik, we believe in the power of integrated technology solutions. 
              Our team of expert developers, system architects, and AI specialists work 
              together to deliver cutting-edge solutions that not only meet today's needs 
              but anticipate tomorrow's challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From robust IT infrastructure to intelligent automation systems, we provide 
              end-to-end technology services that empower businesses to thrive in the 
              digital age. Our commitment to excellence and innovation has made us a 
              trusted partner for companies across Miami and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card-primary text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Our Mission</h4>
              <p className="text-sm text-muted-foreground">
                To democratize advanced technology and make it accessible to businesses of all sizes.
              </p>
            </div>

            <div className="card-primary text-center p-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Our Vision</h4>
              <p className="text-sm text-muted-foreground">
                To be the leading technology partner that transforms businesses through innovation.
              </p>
            </div>

            <div className="card-primary text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Our Values</h4>
              <p className="text-sm text-muted-foreground">
                Excellence, integrity, innovation, and client-centric approach in everything we do.
              </p>
            </div>

            <div className="card-primary text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Our Team</h4>
              <p className="text-sm text-muted-foreground">
                Expert professionals passionate about delivering exceptional technology solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Company Highlights */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;