
import { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    priority: 'medium',
    category: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://webhook.aetherlogik.com/webhook/SendMessageWeb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'support_request'
        }),
      });

      if (response.ok) {
        toast({
          title: "Support Request Submitted",
          description: "We'll get back to you within 24 hours!",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          priority: 'medium',
          category: 'general',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Mon-Fri, 9:00 AM - 5:00 PM EST",
      contact: "+1 (786) 459-7652",
      href: "tel:+17864597652"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "24h response time",
      contact: "info@aetherlogik.com",
      href: "mailto:info@aetherlogik.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick chat support",
      contact: "Chat with us",
      href: "https://bit.ly/aetherlogik"
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Telegram",
      description: "Instant messaging",
      contact: "Message us",
      href: "https://t.me/aetherlogik"
    }
  ];

  const faqItems = [
    {
      question: "What is your typical response time?",
      answer: "We respond to all support requests within 24 hours during business days. Critical issues are addressed immediately."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "We offer 24/7 monitoring for dedicated server clients. General support is available Monday-Friday, 9 AM - 5 PM EST."
    },
    {
      question: "How do I report a server outage?",
      answer: "Contact us immediately via phone or WhatsApp for urgent server issues. We'll investigate and resolve the issue promptly."
    },
    {
      question: "Can you help with custom development projects?",
      answer: "Yes! We specialize in custom web development, AI automation, and backend solutions. Contact us to discuss your project."
    },
    {
      question: "What information should I include in my support request?",
      answer: "Please include: your contact information, service details, problem description, error messages (if any), and urgency level."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the help you need from our expert support team. We're here to ensure 
              your technology solutions work perfectly for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Support Channels */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Support</h2>
              <div className="grid gap-6">
                {supportChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.href}
                    target={channel.href.startsWith('http') ? '_blank' : undefined}
                    rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 p-6 bg-card/50 rounded-lg border border-border/20 hover:border-primary/20 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {channel.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                      <p className="text-muted-foreground mb-2">{channel.description}</p>
                      <p className="text-primary font-medium">{channel.contact}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Support Request Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Submit Support Request</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-card/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium mb-2">
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-card/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                  >
                    <option value="general">General Support</option>
                    <option value="technical">Technical Issues</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="server">Server Support</option>
                    <option value="development">Development Projects</option>
                    <option value="ai">AI & Automation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                  />
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
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card/50 border border-border/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors resize-vertical"
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-card/50 rounded-lg border border-border/20 p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-muted-foreground pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Level Commitments */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Service Commitments</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24h Response</h3>
                <p className="text-muted-foreground">
                  All support requests answered within 24 hours during business days
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">99.9% Uptime</h3>
                <p className="text-muted-foreground">
                  Reliable server infrastructure with guaranteed uptime SLA
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Priority Support</h3>
                <p className="text-muted-foreground">
                  Urgent issues get immediate attention from our expert team
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
