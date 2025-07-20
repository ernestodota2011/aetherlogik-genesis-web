import { useState } from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceType: string;
  notes: string;
}

const AppointmentForm = () => {
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    serviceType: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const serviceTypes = [
    'IT Infrastructure Consultation',
    'AI Strategy Discussion',
    'Web Development Project',
    'Backend Architecture Review',
    'Technology Assessment',
    'General Technology Consultation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointmentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!appointmentData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your name",
        variant: "destructive"
      });
      return false;
    }

    if (!appointmentData.email.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter your email",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(appointmentData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (!appointmentData.preferredDate) {
      toast({
        title: "Validation Error",
        description: "Please select a preferred date",
        variant: "destructive"
      });
      return false;
    }

    if (!appointmentData.preferredTime) {
      toast({
        title: "Validation Error",
        description: "Please select a preferred time",
        variant: "destructive"
      });
      return false;
    }

    if (!appointmentData.serviceType) {
      toast({
        title: "Validation Error",
        description: "Please select a service type",
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
      const response = await fetch('https://webhook.aetherlogik.com/webhook/AppointmentManagement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setAppointmentData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          serviceType: '',
          notes: ''
        });
        toast({
          title: "Appointment Requested Successfully!",
          description: "We'll contact you within 24 hours to confirm your appointment.",
        });
      } else {
        throw new Error('Failed to submit appointment');
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      setSubmitStatus('error');
      toast({
        title: "Error Submitting Appointment",
        description: "Please try again or contact us directly at info@aetherlogik.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Schedule Your <span className="bg-gradient-primary bg-clip-text text-transparent">Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book a free consultation with our experts to discuss your technology needs 
            and explore how AetherLogik can transform your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-primary p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Appointment Form */}
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-primary" />
                    Book Your Appointment
                  </h3>
                  <p className="text-muted-foreground">
                    Choose your preferred date and time for a personalized consultation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={appointmentData.name}
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
                        value={appointmentData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={appointmentData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={appointmentData.preferredDate}
                        onChange={handleInputChange}
                        min={today}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={appointmentData.preferredTime}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={appointmentData.serviceType}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select service type</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={appointmentData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-textarea"
                      placeholder="Tell us more about your project or specific requirements..."
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
                        Booking Appointment...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Book Consultation
                      </span>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-accent bg-accent/10 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5" />
                      <span>Appointment requested successfully! We'll contact you to confirm.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-destructive bg-destructive/10 p-4 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span>Failed to book appointment. Please try again or contact us directly.</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Consultation Benefits */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Free Initial Consultation</h4>
                        <p className="text-sm text-muted-foreground">
                          60-minute comprehensive discussion about your technology needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Expert Guidance</h4>
                        <p className="text-sm text-muted-foreground">
                          Direct access to our senior technology consultants
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Custom Roadmap</h4>
                        <p className="text-sm text-muted-foreground">
                          Tailored technology strategy for your business goals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">No Obligation</h4>
                        <p className="text-sm text-muted-foreground">
                          No pressure to commit - just valuable insights and recommendations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-primary p-6 bg-primary/5 border-primary/20">
                  <h4 className="font-semibold mb-2 text-primary">Consultation Availability</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We offer consultations Monday through Friday, 9:00 AM to 5:00 PM EST.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> We'll confirm your appointment within 24 hours 
                    and provide meeting details via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;