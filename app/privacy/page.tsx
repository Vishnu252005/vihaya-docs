import { Metadata } from 'next';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vihaya',
  description: 'Privacy Policy for Vihaya - Learn how we collect, use, and protect your information when you use our academic productivity and event management platform.',
  openGraph: {
    title: 'Privacy Policy | Vihaya',
    description: 'Privacy Policy for Vihaya - Learn how we collect, use, and protect your information.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy for Vihaya
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground">
            <p>Effective Date: January 1, 2025</p>
            <span className="hidden sm:inline">•</span>
            <p>Last Updated: January 1, 2025</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-card border rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            This Privacy Policy describes how Vihaya ("we," "our," or "us") collects, uses, discloses, and safeguards your information when you use our academic productivity and event management platform. By using Vihaya, you consent to the data practices described in this policy.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-6">
              We collect information to provide, improve, and personalize our services. The types of information we collect include:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Personal Information:</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Full name and contact details (email address, phone number)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Educational information (institution, department, year of study)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Profile information (bio, profile picture, preferences)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Account credentials and authentication data</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Usage Information:</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Event registration and participation data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Course enrollment and progress information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Payment and transaction records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Communication preferences and settings</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Technical Information:</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Device information (type, operating system, unique identifiers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Log data (IP address, access times, pages viewed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>App usage statistics and performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Error reports and crash analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Provide and maintain our platform services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Process event registrations and course enrollments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Facilitate communication between users and organizers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Process payments and manage financial transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Personalize user experience and content recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Improve platform functionality and user interface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Ensure platform security and prevent fraud</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Comply with legal obligations and enforce our terms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Send important updates and service notifications</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-6">
              We may share your information in the following circumstances:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">With Event Organizers:</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Registration data is shared with event organizers to facilitate participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Contact information may be provided for event-related communications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">With Course Providers:</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Enrollment information is shared with course providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Progress data may be shared for educational purposes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">With Service Providers:</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Payment processors for secure transaction handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cloud storage providers for data hosting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Analytics services for platform improvement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Legal Requirements:</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>When required by law or legal process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To protect our rights, property, or safety</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>To investigate potential violations of our terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              4. Data Security and Protection
            </h2>
            <p className="text-muted-foreground mb-4">
              We implement comprehensive security measures to protect your information:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Encryption of data in transit and at rest</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Secure authentication and access controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Employee training on data protection practices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Incident response procedures and monitoring</span>
              </li>
            </ul>
            <div className="bg-muted/50 border border-primary/20 rounded-lg p-4 italic text-muted-foreground">
              While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-6 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Access and review your personal data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Update or correct inaccurate information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Request deletion of your account and associated data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Opt out of non-essential communications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Control privacy settings and preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Export your data in a portable format</span>
              </li>
            </ul>
            <div className="bg-muted/50 border border-primary/20 rounded-lg p-4">
              <p className="font-semibold text-foreground mb-2">To exercise these rights:</p>
              <p className="text-muted-foreground">
                Contact us at <a href="mailto:support@vihaya.app" className="text-primary hover:underline">support@vihaya.app</a> or use the in-app settings.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Provide our services and maintain your account</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Comply with legal obligations and regulatory requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Resolve disputes and enforce our agreements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Improve our services and develop new features</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              When you delete your account, we will delete or anonymize your personal information, except where retention is required by law.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              Our platform may integrate with third-party services, including:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Payment processors (Stripe, PayPal, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Social media platforms for authentication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Analytics and monitoring services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cloud storage and hosting providers</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable laws.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of material changes by:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Posting the updated policy in the app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Sending email notifications to registered users</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Displaying prominent notices within the platform</span>
              </li>
            </ul>
            <p className="text-muted-foreground">
              Your continued use of Vihaya after such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              10. Contact Us
            </h2>
            <p className="text-muted-foreground mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:support@vihaya.app" className="text-primary hover:underline">
                  support@vihaya.app
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Address: [Your Business Address]</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Phone: [Your Contact Number]</span>
              </div>
            </div>
            <div className="mt-6 bg-muted/50 border border-primary/20 rounded-lg p-4 italic text-muted-foreground">
              We are committed to addressing your privacy concerns and will respond to your inquiries within a reasonable timeframe.
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="text-sm text-primary hover:underline"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="text-sm text-primary hover:underline"
            >
              Documentation
            </Link>
            <Link
              href="/download"
              className="text-sm text-primary hover:underline"
            >
              Download
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Vihaya. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

