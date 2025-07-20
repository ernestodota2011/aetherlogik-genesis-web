
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card/50 rounded-lg p-8 mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-muted-foreground">
                These Terms of Service ("Terms") govern your use of AetherLogik's website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Services Overview</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground mb-4">AetherLogik provides:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>IT Infrastructure and Dedicated Server Services</li>
                  <li>AI Automation and Chatbot Development</li>
                  <li>Web Development and Backend Solutions</li>
                  <li>Technology Consulting and Support</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Acceptable Use</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for illegal or fraudulent activities</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Service Level Agreement</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground mb-4">We strive to provide high-quality services with:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>99.9% uptime for dedicated server services</li>
                  <li>24-hour response time for support requests</li>
                  <li>Regular maintenance and security updates</li>
                  <li>Professional project management and delivery</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Payment Terms</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Services are billed according to agreed-upon terms</li>
                  <li>Payment is due within 30 days of invoice date</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground mb-4">
                  All intellectual property rights in our services, software, and materials remain 
                  with AetherLogik unless otherwise agreed. Client-specific work products are 
                  delivered according to project agreements.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, AetherLogik shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages arising from 
                  your use of our services.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Termination</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground">
                  Either party may terminate services with appropriate notice as specified in 
                  individual service agreements. Termination does not relieve obligations 
                  incurred prior to termination.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
              <div className="bg-card/30 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, contact us:
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Email:</strong> info@aetherlogik.com</p>
                  <p><strong>Phone:</strong> +1 (786) 459-7652</p>
                  <p><strong>Address:</strong> Miami, Florida, United States</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
