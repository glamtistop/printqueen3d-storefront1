import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Print Queen 3D Terms of Service - Please read carefully before making a purchase.",
}

export default function TermsPage() {
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
            Terms of Service
          </span>
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: November 6, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the Print Queen 3D website and purchasing products, you agree to be bound by these Terms of Service. If you do not agree, you may not use our website or purchase our products. Print Queen 3D reserves the right to modify these terms at any time. Your continued use constitutes acceptance of modified terms.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. User Eligibility</h2>
            <p className="text-gray-700 mb-4">
              By using Print Queen 3D, you represent that you are at least 18 years of age, accessing from within the United States, will comply with all applicable laws, and have not been previously suspended from our platform.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Product Information and Availability</h2>
            <p className="text-gray-700 mb-4">
              Print Queen 3D provides 3D-printed personalized products including keychains, NFC stands, lithophanes, nightlamps, fidgets, vases, and custom items. We do not guarantee that all product descriptions, pricing, or availability information is error-free. Print Queen 3D reserves the right to discontinue any product at any time.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Ordering and Payment</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All orders must be placed through our website checkout process</li>
              <li>Payment is processed securely through Stripe and PayPal</li>
              <li><strong>You are responsible for all applicable taxes on your order.</strong> Taxes are calculated and added to your order total based on your delivery address and applicable state and local tax laws</li>
              <li>All prices displayed are in USD and do not include taxes unless otherwise stated</li>
              <li><strong>You must agree to these Terms by checking the required checkbox during checkout before completing your purchase</strong></li>
              <li>Customized orders require design specifications and approval before production</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Customized and Personalized Products</h2>
            <p className="text-gray-700 mb-4">
              <strong>Please ensure you are happy with all color and font selections prior to making your order.</strong> Personalized orders are produced based on your specifications. Once production begins, customized orders cannot be modified or canceled. Any personalized or customized items cannot be refunded for change of mind.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Limitation of Liability and Disclaimer</h2>
            <p className="text-gray-700 mb-4 font-semibold">
              PRINT QUEEN 3D MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING ITS WEBSITE, PRODUCTS, OR SERVICES.
            </p>
            <p className="text-gray-700 mb-4"><strong>Print Queen 3D will NOT be responsible for:</strong></p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Product quality issues not covered under our strict Refund Policy</li>
              <li>Damage, loss, or injury caused by misuse of products</li>
              <li>Delays in order fulfillment due to circumstances beyond our control</li>
              <li>Damage to products after delivery acceptance</li>
              <li>Improper product care or storage</li>
              <li>Service interruptions or unavailability</li>
              <li>Errors in product descriptions or website content</li>
              <li>Any other damages or losses not explicitly covered in our policies</li>
            </ul>
            <p className="text-gray-700 font-semibold">
              TO THE FULLEST EXTENT PERMITTED BY LAW, PRINT QUEEN 3D'S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID FOR THE PRODUCT IN QUESTION.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Your use of Stripe and PayPal payment processors is governed by their respective terms and privacy policies.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Prohibited Conduct</h2>
            <p className="text-gray-700 mb-4">
              You agree not to use the website for illegal purposes, violate any laws, infringe intellectual property rights, attempt unauthorized access, or engage in fraud or deception.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Print Queen 3D from any claims, damages, or expenses arising from your violation of these Terms, your use of products, or your infringement of third-party rights.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by California law. You agree to the exclusive jurisdiction of courts in Los Angeles County, California.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions regarding these Terms, contact Print Queen 3D at the contact information on our website.
            </p>
            <p className="text-gray-700 font-semibold">
              By clicking the Terms of Service agreement checkbox at checkout, you acknowledge that you have read and agree to be bound by these Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
