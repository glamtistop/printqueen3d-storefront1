import { HttpTypes } from "@medusajs/types"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="w-full">
      {/* Compact Banner-Style Header */}
      <div className="bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow py-8 px-4 rounded-2xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          {/* Product Title */}
          <h1 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
            data-testid="product-title"
          >
            {product.title}
          </h1>

          {/* Product Description */}
          {product.description && (
            <p 
              className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed whitespace-pre-line"
              data-testid="product-description"
            >
              {product.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
