import { Metadata } from "next"
import Link from "next/link"
import { getRegion } from "@lib/data/regions"
import { listProducts } from "@lib/data/products"
import ProductPreview from "@modules/products/components/product-preview"
import HeroCarousel from "../../../components/HeroCarousel"

export const metadata: Metadata = {
  title: "Print Queen 3D | Professional NFC + 3D Printing Services",
  description: "Premium precision. Fast turnaround. Local Los Angeles expertise. Custom NFC payment stands, QR displays, and 3D printed products for businesses.",
}

export const dynamic = 'force-dynamic'

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  
  const region = await getRegion(countryCode)
  
  // Fetch 6 featured products
  const { response } = await listProducts({
    queryParams: {
      limit: 6,
    },
    countryCode,
  })
  
  const featuredProducts = response?.products || []

  return (
    <>
      {/* Announcement Banner - Scrolling text */}
      <div className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow text-white py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-sm font-bold mx-8">Fast & reliable U.S. shipping · Local pickup in Los Angeles, Altadena, Long Beach, Hawthorne, West Covina</span>
          <span className="text-sm font-bold mx-8">Handmade 3D printed designs made to order in LA</span>
          <span className="text-sm font-bold mx-8">Join our list and get 10% off your first order</span>
          <span className="text-sm font-bold mx-8">Fast & reliable U.S. shipping · Local pickup in Los Angeles, Altadena, Long Beach, Hawthorne, West Covina</span>
          <span className="text-sm font-bold mx-8">Handmade 3D printed designs made to order in LA</span>
        </div>
      </div>

      {/* Hero Banner - Image Carousel with Navigation */}
      <HeroCarousel />

      {/* Collections Grid - 2 on mobile, 6 on desktop */}
      <section className="py-12 bg-gradient-to-br from-white via-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
            {/* Payment Stands */}
            <Link 
              href={`/${countryCode}/store`}
              className="relative group overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-brand-green to-brand-cyan hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-black uppercase tracking-tight leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Payment<br />Stands
                </h3>
              </div>
            </Link>

            {/* Keychains */}
            <Link 
              href={`/${countryCode}/store`}
              className="relative group overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-brand-pink to-brand-orange hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-black uppercase tracking-tight leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Keychains
                </h3>
              </div>
            </Link>

            {/* Signage */}
            <Link 
              href={`/${countryCode}/store`}
              className="relative group overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-brand-yellow to-brand-orange hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-black uppercase tracking-tight leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Signage
                </h3>
              </div>
            </Link>

            {/* Incense Holders */}
            <Link 
              href={`/${countryCode}/store`}
              className="relative group overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-brand-cyan to-brand-blue hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-black uppercase tracking-tight leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Incense<br />Holders
                </h3>
              </div>
            </Link>

            {/* Toys & Fidgets */}
            <Link 
              href={`/${countryCode}/store`}
              className="relative group overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-brand-pink to-brand-yellow hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-black uppercase tracking-tight leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Toys &<br />Fidgets
                </h3>
              </div>
            </Link>

            {/* Custom 3D Prints */}
            <Link 
              href={`/${countryCode}/quote`}
              className="relative group overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-brand-green via-brand-cyan to-brand-blue hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
                <h3 className="text-lg md:text-xl lg:text-2xl font-display font-black uppercase tracking-tight leading-tight" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Custom<br />3D Prints
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {featuredProducts.length > 0 && region && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                  Featured Products
                </span>
              </h2>
              <p className="text-lg text-gray-700">Our most popular items</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
              {featuredProducts.map((product) => (
                <ProductPreview
                  key={product.id}
                  product={product}
                  region={region}
                  isFeatured
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/${countryCode}/store`}
                className="inline-block bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Benefits/Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-brand-cream via-white to-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-brand-green via-brand-cyan to-brand-blue bg-clip-text text-transparent">
                Why Choose Print Queen 3D?
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-brand-green/20">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-brand-cyan rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-blue mb-2">Fast Turnaround</h3>
              <p className="text-gray-700">1-3 day processing for quick delivery</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-brand-yellow/20">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-yellow to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-blue mb-2">Precision Quality</h3>
              <p className="text-gray-700">Professional-grade 3D printing</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-brand-cyan/20">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">💡</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-blue mb-2">Expert Support</h3>
              <p className="text-gray-700">Guidance from concept to completion</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-brand-pink/20">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-pink to-brand-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">�</span>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-blue mb-2">Local LA Service</h3>
              <p className="text-gray-700">Supporting local businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-brand-pink">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Want 10% off?
          </h2>
          <p className="text-lg text-white mb-8">
            Join the royal list for new drops, exclusive offers, and a 10% welcome coupon. We send good vibes only.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="bg-white text-brand-pink font-bold px-8 py-4 rounded-full hover:bg-brand-cream transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get my 10%
            </button>
          </form>
        </div>
      </section>

      {/* Made to Order Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
              Your Vision, Printed Perfectly.
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Print Queen 3D turns creativity into tangible design. We specialize in premium, made-to-order 3D prints—NFC payment stands, QR displays, personalized keychains and charms, lithophane lamps, vases, fidgets, and custom pieces for events and brands. Every item is printed locally in LA with quality materials, then checked by hand for a clean, professional finish. Whether you're a business that needs smart, on-brand tools or you're gifting something one-of-a-kind, we deliver fast, friendly service and precision results. Your ideas deserve to be printed perfectly.
          </p>
          <Link 
            href={`/${countryCode}/about`}
            className="inline-block text-brand-blue font-bold hover:text-brand-cyan transition-colors"
          >
            Learn more about us →
          </Link>
        </div>
      </section>
    </>
  )
}
