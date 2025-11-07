import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Print Queen 3D Refund Policy - No refunds, no exchanges. Please read carefully.",
}

export default function RefundPolicyPage() {
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
            Refund Policy
          </span>
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: November 6, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">1. No Refunds, No Exchanges Policy</h2>
            <p className="text-gray-700 mb-4 font-semibold text-lg">
              <strong>Print Queen 3D operates a strict NO REFUNDS and NO EXCHANGES policy.</strong> All sales are final. By placing an order, you acknowledge and accept this policy.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Limited Exceptions for Defective or Damaged Items</h2>
            <p className="text-gray-700 mb-4">Refunds or replacements are available <strong>ONLY</strong> if:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The item arrives defective or non-functional due to a manufacturing error</li>
              <li>The item is damaged during shipping (not after delivery)</li>
              <li>You receive the wrong item</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">3. Reporting Damage or Defects</h2>
            <p className="text-gray-700 mb-4 font-semibold">
              <strong>You MUST contact us within 24 hours of delivery if your item arrives damaged or defective.</strong>
            </p>
            <p className="text-gray-700 mb-4">To report an issue:</p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Inspect your order immediately upon reception</li>
              <li>Contact Print Queen 3D within <strong>24 hours</strong> of arrival</li>
              <li>Provide your order number, photos of the damage/defect, and description of the issue</li>
              <li>We will evaluate the issue and determine if a replacement or refund is warranted</li>
            </ol>
            <p className="text-red-600 font-semibold">
              After 24 hours, we will NOT accept any complaints, refunds, or exchanges about the product.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Items NOT Eligible for Refund or Exchange</h2>
            <p className="text-gray-700 mb-4">NO refunds or exchanges for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Change of mind</strong> – We do not accept any change of mind orders</li>
              <li>Personalized or customized items (unless Print Queen 3D made an error)</li>
              <li>Products where you approved the design, color, and font selections before production</li>
              <li>Damage incurred after delivery</li>
              <li>Accidental damage caused by the customer or third parties</li>
              <li>Products that have been used, altered, painted, glued, or modified after delivery</li>
              <li>Normal wear and tear</li>
              <li>Color variations inherent to 3D printing or monitor settings</li>
              <li>Products damaged due to improper care, storage, or handling</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">
              Please ensure you are happy with all color and font selections prior to making your order.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Case-by-Case Basis and Restocking Fee</h2>
            <p className="text-gray-700 mb-4">
              In the event that a return has been requested, it will be dealt with on a <strong>case-by-case basis</strong> at Print Queen 3D's sole discretion. If approved, a <strong>15% restocking fee will be applied</strong> to your refund.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Return Shipping Costs</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>You will be responsible for paying for your own shipping costs for returning your item</strong></li>
              <li>Shipping costs are <strong>non-refundable</strong></li>
              <li>If you receive a refund, the cost of return shipping will be deducted from your refund</li>
              <li><strong>Taxes paid are non-refundable</strong></li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Refund Processing</h2>
            <p className="text-gray-700 mb-4">If your refund is approved:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Refunds will be processed to your original payment method within 10 business days</li>
              <li>The refund amount will be the product cost minus the 15% restocking fee, any return shipping costs, and taxes paid</li>
              <li>Allow 5-7 additional business days for the refund to appear in your account</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              <strong>Print Queen 3D is not responsible for any consequential, indirect, incidental, or special damages arising from product use or failure. Our total liability shall not exceed the amount paid for the product.</strong>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              To report a defect or damage within 24 hours of delivery, contact Print Queen 3D using the contact information on our website. Include your order number, delivery date, and clear photos of the issue.
            </p>
            <p className="text-gray-700 font-semibold">
              By purchasing from Print Queen 3D, you accept this strict No Refunds, No Exchanges policy. All sales are final unless the item is defective, damaged during shipping, or incorrect.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
