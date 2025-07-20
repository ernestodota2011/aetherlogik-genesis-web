import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceDetailsProps {
  service: {
    title: string;
    description: string;
    features: string[];
    detailedInfo: string;
    technologies: string[];
    benefits: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDetails = ({ service, isOpen, onClose }: ServiceDetailsProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="card-primary max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold">{service.title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.detailedInfo}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Benefits</h3>
            <ul className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-border/20">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get Quote
              </Button>
              <Button 
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;