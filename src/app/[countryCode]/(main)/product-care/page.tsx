import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Product Care Guide",
  description: "Print Queen 3D Product Care Guide - How to care for your 3D printed products.",
}

export default function ProductCarePage() {
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
            Product Care Guide
          </span>
        </h1>
        <p className="text-gray-600 mb-8">Last Updated: November 6, 2025</p>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              This Product Care Guide provides essential instructions for caring for and using Print Queen 3D products. <strong>Following these care instructions is required to maintain product quality and preserve any warranty or refund eligibility.</strong> Improper care will void any refund requests.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. General Care and Handling</h2>
            
            <p className="text-gray-700 mb-4 font-semibold">Storage:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Store in cool, dry environments below 80°F (26.7°C)</li>
              <li>Avoid direct sunlight (may cause color fading or warping)</li>
              <li>Keep away from moisture, humidity, and heat sources</li>
              <li>Do not stack heavy items on products</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Handling:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Handle with care to avoid dropping or crushing</li>
              <li>Do not bend, twist, or apply stress to thin features</li>
              <li>Use both hands for larger items</li>
              <li>Do not throw or roughly handle products</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Cleaning and Maintenance</h2>
            
            <p className="text-gray-700 mb-4 font-semibold">Dry Cleaning (Recommended):</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use a soft, dry cloth to wipe products</li>
              <li>Use a soft-bristled brush for textured surfaces</li>
              <li>Avoid abrasive materials or scouring pads</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Wet Cleaning (Limited Use):</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Use lukewarm water only (not hot)</li>
              <li>Mild dish soap if needed</li>
              <li>Dry immediately and completely with a soft cloth</li>
              <li>Do NOT soak products in water</li>
              <li>Do NOT use on products with NFC tags, electronics, or painted surfaces</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Prohibited Cleaning Methods:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>No harsh chemicals (acetone, bleach, alcohol)</li>
              <li>No high-pressure washers</li>
              <li>No dishwashers or washing machines</li>
              <li>No abrasive scrubbers</li>
              <li>No degreasers or industrial cleaners</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Material-Specific Care</h2>
            
            <p className="text-gray-700 mb-4 font-semibold">PLA (Polylactic Acid):</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Sensitive to heat above 140°F (60°C)</li>
              <li>Store away from heat sources and direct sunlight</li>
              <li>Do not place hot objects on or near PLA products</li>
              <li>Clean with lukewarm water and mild soap only</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">PETG:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>More heat-resistant (up to 160°F / 71°C)</li>
              <li>More flexible; avoid excessive bending</li>
              <li>Clean with lukewarm water and mild soap</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Specialty Finishes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Dry cleaning only</li>
              <li>Avoid liquid contact with textured or matte finishes</li>
              <li>Do not use polishing compounds</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Product-Specific Care</h2>
            
            <p className="text-gray-700 mb-4 font-semibold">Keychains:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Detach before exposing to moisture</li>
              <li>Store in a dry location</li>
              <li>Keep NFC keychains away from electromagnetic interference and liquids</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">NFC Stands and Holders:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Place on flat, stable surfaces</li>
              <li>Keep away from moisture and heat</li>
              <li>Avoid water exposure on electronic components</li>
              <li>Clean with dry cloth only</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Lithophane Pictures and Nightlamps:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Place on stable, level surfaces</li>
              <li>Keep electronic components dry</li>
              <li>Do not immerse in water</li>
              <li>Allow LED components to cool before handling</li>
              <li>Clean outer surface with dry cloth only</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Fidgets and Toys:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Inspect for loose parts regularly</li>
              <li>Do not throw or drop</li>
              <li>Keep away from small children (choking hazard)</li>
            </ul>

            <p className="text-gray-700 mb-4 font-semibold">Vases and Planters:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Empty and dry thoroughly after use</li>
              <li>Do not leave water standing for extended periods</li>
              <li>Ensure proper drainage</li>
            </ul>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">6. Prohibited Modifications</h2>
            <p className="text-gray-700 mb-4">Do <strong>NOT</strong>:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Paint or stain products (voids refund eligibility)</li>
              <li>Glue products to other surfaces</li>
              <li>Drill, cut, sand, or modify products</li>
              <li>Add weights, magnets, or attachments</li>
              <li>Disassemble electronic components</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Safety and Intended Use</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Use products only for their intended purpose</li>
              <li>Keep small parts away from infants and children</li>
              <li>Do not swallow or ingest materials</li>
              <li>Keep electronics away from water</li>
              <li>If you experience skin irritation, discontinue use</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Warranty and Care</h2>
            <p className="text-gray-700 mb-4">
              <strong>Following this care guide is essential for preserving refund eligibility.</strong> Damage resulting from improper storage, handling, care, exposure to extreme temperatures, moisture, neglect, abuse, or unauthorized modifications will NOT be covered under our Refund Policy.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about product care, contact Print Queen 3D with your order number and product details.
            </p>
            <p className="text-gray-700 font-semibold">
              By purchasing from Print Queen 3D, you acknowledge that you have reviewed this Product Care Guide and agree to follow the care instructions to maintain your product.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
