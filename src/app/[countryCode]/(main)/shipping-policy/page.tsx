import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Print Queen 3D Shipping Policy - US shipping only, free shipping over $150.",
}

export default function ShippingPolicyPage() {
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
            Shipping Policy
          </span>
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: November 6, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Shipping Availability</h2>
            <p className="text-gray-700 mb-4">
              Print Queen 3D ships products exclusively within the <strong>United States only</strong> (all 50 states). We do not ship internationally. All orders must be delivered to a valid U.S. address.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Production and Processing Time</h2>
            <p className="text-gray-700 mb-4 font-semibold">Custom Print Services:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Custom and personalized products require <strong>2-3 business days</strong> for production before shipping</li>
              <li>Standard items in stock will be shipped <strong>next day</strong></li>
              <li>Processing times exclude weekends and holidays</li>
            </ul>
            
            <p className="text-gray-700 mb-4 font-semibold">Daily Cutoff Time:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Orders placed by <strong>4:00 PM EST / 1:00 PM PST</strong> will enter the production queue that day</li>
              <li>Orders placed after the cutoff time will be processed the next business day</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Next-Day Production Service:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Premium next-day production service is available for an additional fee</li>
              <li>Contact us for next-day production pricing and availability</li>
              <li>Next-day service applies to production time, not shipping time</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-cyan-50 border-2 border-green-300 rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-4">3. Free Shipping and Shipping Costs</h2>
            <p className="text-2xl font-bold text-green-600 mb-4">FREE SHIPPING on orders over $150</p>
            <p className="text-gray-700 mb-4">
              Orders $150 and above will receive free standard shipping to any U.S. address.
            </p>
            
            <p className="text-gray-700 mb-4 font-semibold">Standard Shipping Rates (Orders under $150):</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Shipping costs are calculated at checkout based on destination zip code and package weight</li>
              <li>Shipping costs vary by carrier and service level selected</li>
              <li>Rates are displayed during checkout before you complete your purchase</li>
              <li>All shipping costs are <strong>non-refundable</strong> unless the order is not delivered or significantly damaged</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Express and Priority Shipping:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Available for an additional fee</li>
              <li>Contact us for expedited shipping rates and delivery estimates</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Shipping Methods</h2>
            <p className="text-gray-700 mb-4">Print Queen 3D ships via:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>USPS (United States Postal Service)</li>
              <li>UPS (United Parcel Service)</li>
              <li>FedEx</li>
              <li>Regional carriers as appropriate</li>
            </ul>
            <p className="text-gray-700">
              The carrier and service level are determined based on order weight, destination, and efficiency. Tracking information will be sent via email once your order ships.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Delivery Timeframe</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Standard Shipping:</strong> 3-7 business days after shipment</li>
              <li><strong>Express Delivery:</strong> 1-3 business days (available for additional fee)</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-gray-700 mb-2">
                <strong>IMPORTANT: Delivery estimates from carriers are not guaranteed.</strong> These are estimates only. Delays may occur due to carrier operations, weather, or other factors beyond our control.
              </p>
              <p className="text-gray-700">
                <strong>Print Queen 3D disclaims responsibility for shipping delays.</strong> We are not responsible for late deliveries caused by carrier delays, weather events, or circumstances outside our control.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Delivery Address Verification</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Customers are responsible for providing accurate delivery addresses</li>
              <li>Print Queen 3D is not responsible for misdelivery due to incorrect addresses</li>
              <li>If a package is returned due to an incorrect address, you may be charged additional shipping costs</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Damage During Shipping</h2>
            <p className="text-gray-700 mb-4 font-semibold">Inspect packages immediately upon delivery:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>If a package arrives visibly damaged or crushed, <strong>refuse delivery or note the damage on the delivery receipt</strong></li>
              <li>If you discover damage after accepting the package, <strong>contact Print Queen 3D within 24 hours</strong> of delivery with photos</li>
              <li>Contact the carrier to file a damage claim</li>
            </ul>
            <p className="text-gray-700">
              <strong>Print Queen 3D is not responsible for damage caused by the carrier during shipping</strong> except in cases of severe, obvious damage apparent at delivery or complete package loss.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Package Loss</h2>
            <p className="text-gray-700 mb-4">If a package does not arrive within the estimated delivery window:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Contact Print Queen 3D with tracking information</li>
              <li>We will investigate with the carrier</li>
              <li>If confirmed lost by the carrier, we may issue a replacement or refund at our discretion</li>
              <li>Lost package claims must be reported within 30 days of ship date</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Tracking Information</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Tracking information will be sent via email once your order ships</li>
              <li>Customers are responsible for tracking their packages</li>
              <li>Print Queen 3D is not responsible for inaccurate tracking information provided by carriers</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Liability Limits</h2>
            <p className="text-gray-700 mb-4">
              <strong>Print Queen 3D is not responsible for any delays, losses, or damages in transit.</strong> Our total liability for lost or damaged shipments shall not exceed the cost of the product and standard shipping. We are not responsible for consequential damages, lost profits, or indirect damages resulting from shipping delays or package loss.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">11. Return Shipping Costs</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Return shipping costs are paid by the customer</li>
              <li>Shipping costs are non-refundable</li>
              <li>If a return is approved, return shipping costs will be deducted from your refund</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For shipping questions or issues, contact Print Queen 3D with your order number and tracking information.
            </p>
            <p className="text-gray-700 font-semibold">
              By placing an order, you accept the terms outlined in this Shipping Policy, including that delivery estimates are not guaranteed and Print Queen 3D is not responsible for carrier delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
