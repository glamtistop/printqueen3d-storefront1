import { Suspense } from "react"
import Image from "next/image"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto duration-200 bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full h-full">
          {/* Mobile Menu */}
          <div className="flex lg:hidden h-full items-center">
            <SideMenu regions={regions} />
          </div>

          {/* Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity duration-300"
              data-testid="nav-store-link"
            >
              <Image
                src="/printqueen-logo.png"
                alt="Print Queen 3D"
                width={240}
                height={80}
                className="h-16 w-auto"
                priority
                quality={100}
              />
            </LocalizedClientLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-x-8 h-full">
            <LocalizedClientLink
              className="text-gray-700 hover:text-brand-cyan font-medium transition-colors duration-200"
              href="/"
            >
              Home
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-gray-700 hover:text-brand-cyan font-medium transition-colors duration-200"
              href="/store"
            >
              Shop
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-gray-700 hover:text-brand-cyan font-medium transition-colors duration-200"
              href="/about"
            >
              About
            </LocalizedClientLink>
            <LocalizedClientLink
              className="bg-brand-cyan hover:bg-brand-neon text-brand-navy font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              href="/quote"
            >
              Get Quote
            </LocalizedClientLink>
          </div>

          {/* Right Side - Account & Cart */}
          <div className="flex items-center gap-x-4 h-full">
            <div className="hidden sm:flex items-center gap-x-4 h-full">
              <LocalizedClientLink
                className="text-gray-700 hover:text-brand-cyan font-medium transition-colors duration-200"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-gray-700 hover:text-brand-cyan font-medium flex gap-2 transition-colors duration-200"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
