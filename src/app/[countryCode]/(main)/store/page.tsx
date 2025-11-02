import { Metadata } from "next"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"

export const metadata: Metadata = {
  title: "Store | Print Queen 3D",
  description: "Browse our collection of 3D printed products, NFC stands, and custom designs.",
}

export const dynamic = 'force-dynamic'

export default async function StorePage(props: {
  params: Promise<{ countryCode: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const params = await props.params
  const searchParams = await props.searchParams
  const { countryCode } = params
  
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const { response } = await listProducts({
    queryParams: {
      limit: 24,
    },
    countryCode,
  })

  const products = response?.products || []

  return (
    <div className="content-container py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold mb-2">
          <span className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
            All Products
          </span>
        </h1>
        <p className="text-gray-600">Browse our complete collection</p>
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
        <div className="text-center py-12">
          <p className="text-gray-600">No products available yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
