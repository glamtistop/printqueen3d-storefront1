import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Print Queen 3D Privacy Policy - How we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-brand-cream to-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocalizedClientLink
          href="/"
          className="text-brand-cyan hover:text-brand-blue font-semibold mb-6 inline-block"
        >
          ← Back to Home
        </LocalizedClientLink>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
            Privacy Policy
          </span>
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: November 6, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Print Queen 3D ("we," "us," "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Information We Collect</h2>
            
            <p className="text-gray-700 mb-4 font-semibold">Information You Provide:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Shipping address</li>
              <li>Billing address</li>
              <li>Phone number</li>
              <li>Payment information (processed by Stripe and PayPal)</li>
              <li>Customization details (names, text, images, design specifications)</li>
              <li>Customer service correspondence</li>
              <li>Tax identification information as required</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Information Collected Automatically:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Device type</li>
              <li>Geographic location (approximate)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Process and fulfill orders</li>
              <li>Produce customized products</li>
              <li>Arrange shipping and delivery</li>
              <li>Process payments through Stripe and PayPal</li>
              <li>Calculate and collect applicable taxes</li>
              <li>Send order confirmations and tracking information</li>
              <li>Provide customer service</li>
              <li>Send marketing emails (if you opt in)</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Prevent fraud and protect security</li>
              <li>Comply with legal and tax obligations</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Third-Party Services</h2>
            
            <p className="text-gray-700 mb-4 font-semibold">Payment Processors:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Stripe</strong> and <strong>PayPal</strong> handle all payment processing</li>
              <li>We share name, email, billing/shipping addresses, and payment details with these processors</li>
              <li>Stripe and PayPal maintain their own privacy policies</li>
              <li>We do not store complete credit card information on our servers</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">E-Commerce Platform:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Medusa</strong> is used to manage e-commerce operations, inventory, and customer data</li>
              <li>Medusa processes order information, customer data, and inventory according to its Privacy Policy</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Analytics Services:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Google Analytics collects anonymized data about website visitors</li>
              <li>Analytics track user behavior, traffic patterns, and website performance</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Email Marketing:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>If you opt in to marketing emails, we use third-party email platforms to send newsletters and promotions</li>
              <li>You can unsubscribe at any time by clicking "Unsubscribe" in emails</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Information Sharing</h2>
            <p className="text-gray-700 mb-4">We share information with:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Stripe and PayPal for payment processing</li>
              <li>Medusa for e-commerce management</li>
              <li>Shipping carriers (USPS, UPS, FedEx) for order delivery</li>
              <li>Analytics services for website improvement</li>
              <li>Email marketing platforms (if you opt in)</li>
              <li>Government agencies and tax authorities as required by law</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              We do NOT sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Data Security</h2>
            <p className="text-gray-700 mb-4">We implement security measures including:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>SSL encryption for data transmission</li>
              <li>Password-protected user accounts</li>
              <li>Secure payment processing through PCI-compliant processors</li>
              <li>Limited employee access to personal information</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              However, no security system is absolutely foolproof. We cannot guarantee absolute security of your information.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">7. Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Control cookies through browser settings</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">California Residents (CCPA Rights):</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Right to know what information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt out of "sale" of information</li>
              <li>Right to correct inaccurate information</li>
            </ul>
            <p className="text-gray-700">
              Contact us to exercise these rights. We will respond within 45 days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Cookies</h2>
            <p className="text-gray-700 mb-4">We use cookies to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Maintain browsing sessions</li>
              <li>Remember preferences</li>
              <li>Analyze website usage</li>
              <li>Deliver relevant advertisements</li>
            </ul>
            <p className="text-gray-700">
              You can control cookies through your browser settings.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              We do not knowingly collect information from children under 13. If we discover we have collected such information, we will delete it immediately.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Data Retention</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Account information:</strong> Retained while active and 2-3 years after closure</li>
              <li><strong>Order information:</strong> Retained for 7 years for legal/accounting/tax purposes</li>
              <li><strong>Marketing information:</strong> Retained until you unsubscribe</li>
              <li><strong>Payment information:</strong> Retained as necessary for payment processing and disputes (6-7 years)</li>
              <li><strong>Tax records:</strong> Retained as required by law</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy at any time. Material changes will be communicated via email or website notice. Your continued use after changes constitutes acceptance.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">For privacy questions or requests, contact Print Queen 3D using the contact information on our website.</p>
            <p className="text-gray-700">
              We will respond within 30 days.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">13. Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party sites. This Privacy Policy does not apply to those sites. Review their privacy policies before providing information.
            </p>
            <p className="text-gray-700 font-semibold">
              By using Print Queen 3D and purchasing our products, you acknowledge that you have read and consent to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
