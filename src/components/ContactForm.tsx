import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Validation Error", 
        description: "Please enter your email",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.subject.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a subject",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your message",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://webhook.aetherlogik.com/webhook/SendMessageWeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at info@aetherlogik.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-primary p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
        <p className="text-muted-foreground">
          Ready to transform your business with cutting-edge technology? Let's start the conversation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select a subject</option>
              <option value="IT Infrastructure Consultation">IT Infrastructure Consultation</option>
              <option value="AI Automation Inquiry">AI Automation Inquiry</option>
              <option value="Web Development Project">Web Development Project</option>
              <option value="Backend Development">Backend Development</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support Request">Support Request</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className="form-textarea"
            placeholder="Tell us about your project or how we can help..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending Message...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Send Message
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="flex items-center space-x-2 text-accent bg-accent/10 p-4 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-destructive bg-destructive/10 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <span>Failed to send message. Please try again or contact us directly.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;