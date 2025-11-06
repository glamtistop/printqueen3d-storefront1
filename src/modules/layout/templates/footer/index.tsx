import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-green mb-4">Print Queen 3D</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Precision in Every Layer. Style in Every Print.<br />
              Built in LA. Made for Everywhere.<br />
              If You Can Dream It, We Can Print It.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Local Pickup Available In These Cities: Los Angeles, Altadena, Long Beach, Hawthorne, West Covina</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="text-gray-300">Shipping Everywhere</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:800-495-6227" className="text-gray-300 hover:text-brand-green">
                  800-495-6227
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Printqueen3d@gmail.com" className="text-gray-300 hover:text-brand-green">
                  Printqueen3d@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LocalizedClientLink href="/about" className="text-gray-300 hover:text-brand-green transition-colors">
                  About Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/portfolio" className="text-gray-300 hover:text-brand-green transition-colors">
                  Portfolio
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/quote" className="text-gray-300 hover:text-brand-green transition-colors">
                  Request a Quote
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/store" className="text-gray-300 hover:text-brand-green transition-colors">
                  Shop Products
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/account" className="text-gray-300 hover:text-brand-green transition-colors">
                  My Account
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* Products */}
          {collections && collections.length > 0 && (
            <div>
              <h4 className="font-display font-bold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                {collections?.slice(0, 5).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      href={`/collections/${c.handle}`}
                      className="text-gray-300 hover:text-brand-green transition-colors"
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social & Partner */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Partner & collaborate</h4>
            <p className="text-gray-300 text-sm mb-4">
              Creators, event organizers, and brands—let's build together. Pitch product ideas, event activations, or content collabs.
            </p>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://instagram.com/printqueen3d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-brand-blue transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@printqueen3d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-brand-blue transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
            <ul className="space-y-2 text-sm mt-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Refund Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Product Care</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-brand-green transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Print Queen 3D. All rights reserved.</p>
            <p className="text-xs">Made to order in Los Angeles · Fast, reliable shipping · Local pickup available</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
