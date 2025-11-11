import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getRegion } from "@lib/data/regions"
import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"
import { getAuthHeaders, getCacheOptions } from "@lib/data/cookies"

export const dynamic = 'force-dynamic'

// Category mapping for display names
const CATEGORY_NAMES: Record<string, string> = {
  "nfc-qr-payment-stand": "NFC & QR Payment Stands",
  "nfc-keychains": "NFC Keychains",
  "home-decor": "Home Decor",
  "incenseaccessories": "Incense Accessories",
  "toys-fidgets": "Toys & Fidgets",
  "custom-3d-prints": "Custom 3D Prints",
}

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>
}): Promise<Metadata> {
  const params = await props.params
  const categoryName = CATEGORY_NAMES[params.handle] || params.handle
  
  return {
    title: `${categoryName} | Print Queen 3D`,
    description: `Browse our ${categoryName.toLowerCase()} collection. Premium 3D printed products made in Los Angeles.`,
  }
}

export default async function CategoryPage(props: {
  params: Promise<{ countryCode: string; handle: string }>
}) {
  const params = await props.params
  const { countryCode, handle } = params
  
  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }

  // Fetch category by handle to get category_id
  const headers = {
    ...(await getAuthHeaders()),
  }

  const next = {
    ...(await getCacheOptions("categories")),
  }

  const categoryResponse = await sdk.client
    .fetch<{ product_categories: HttpTypes.StoreProductCategory[] }>(
      `/store/product-categories`,
      {
        method: "GET",
        query: {
          handle: handle,
          fields: "*category_children, *products, *parent_category, *parent_category.parent_category",
        },
        headers,
        next,
        cache: "no-store",
      }
    )
    .catch(() => ({ product_categories: [] }))

  const category = categoryResponse.product_categories?.[0]

  if (!category) {
    notFound()
  }

  // Fetch products in this category
  const productsResponse = await sdk.client
    .fetch<{ products: HttpTypes.StoreProduct[]; count: number }>(
      `/store/products`,
      {
        method: "GET",
        query: {
          limit: 100,
          region_id: region.id,
          category_id: [category.id],
          fields: "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags",
        },
        headers,
        next,
        cache: "no-store",
      }
    )
    .catch(() => ({ products: [], count: 0 }))

  const products = productsResponse.products || []
  const categoryName = CATEGORY_NAMES[handle] || category.name

  return (
    <div className="content-container py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
          <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
            {categoryName}
          </span>
        </h1>
        {category.description && (
          <p className="text-gray-600 mt-2">{category.description}</p>
        )}
        <p className="text-sm text-gray-500 mt-1">
          {products.length} {products.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductPreview
              key={product.id}
              product={product}
              region={region}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gradient-to-br from-brand-cream/30 to-white rounded-2xl">
          <div className="text-6xl mb-4">🏗️</div>
          <h3 className="text-xl font-bold text-brand-navy mb-2">Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            We're working on adding products to this category. Check back soon!
          </p>
          <a
            href={`/${countryCode}/store`}
            className="inline-block bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse All Products
          </a>
        </div>
      )}
    </div>
  )
}
