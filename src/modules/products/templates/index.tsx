import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import MockReviews from "@modules/products/components/mock-reviews"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      {/* Main Product Section - Compact Side-by-Side on Desktop */}
      <div
        className="content-container py-8"
        data-testid="product-container"
      >
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 max-w-6xl mx-auto">
          {/* Image Gallery - Left side on desktop */}
          <div className="w-full lg:w-1/2">
            <ImageGallery images={product?.images || []} />
          </div>

          {/* Product Info + Actions - Right side on desktop */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Product Title & Description */}
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                {product.title}
              </h1>
              {product.description && (
                <p className="text-base text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Product Actions */}
            <div>
              <ProductOnboardingCta />
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper id={product.id} region={region} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="content-container py-12 bg-gray-50">
        <MockReviews product={product} />
      </div>

      {/* Product Information & Shipping at Bottom */}
      <div className="content-container py-12">
        <div className="max-w-6xl mx-auto">
          <ProductTabs product={product} />
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
