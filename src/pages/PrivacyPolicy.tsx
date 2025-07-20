
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-card/50 rounded-lg p-8 mb-8">
              <p className="text-muted-foreground mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-muted-foreground">
                AetherLogik ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website or use our services.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-medium mb-3 text-foreground">Personal Information</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information and requirements</li>
                  <li>Communication preferences</li>
                  <li>Service usage data and feedback</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and maintain our technology services</li>
                  <li>Communicate about projects and support</li>
                  <li>Improve our services and customer experience</li>
                  <li>Send important updates and notifications</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
              <div className="bg-card/30 rounded-lg p-6 mb-4">
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <div className="bg-card/30 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
