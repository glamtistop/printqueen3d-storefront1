"use client"

import { addToCart } from "@lib/data/cart"
import { useIntersection } from "@lib/hooks/use-in-view"
import { HttpTypes } from "@medusajs/types"
import { Button } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/product-actions/option-select"
import { isEqual } from "lodash"
import { useParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import ProductPrice from "../product-price"
import MobileActions from "./mobile-actions"
import JotFormModal from "./jotform-modal"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

// Sample color options with hex codes (you'll replace with your 36 colors)
const COLOR_OPTIONS = [
  { value: "black", label: "Black", hex: "#000000" },
  { value: "white", label: "White", hex: "#FFFFFF" },
  { value: "red", label: "Red", hex: "#EF4444" },
  { value: "blue", label: "Blue", hex: "#3B82F6" },
  { value: "green", label: "Green", hex: "#10B981" },
  { value: "yellow", label: "Yellow", hex: "#FCD34D" },
  { value: "orange", label: "Orange", hex: "#F97316" },
  { value: "purple", label: "Purple", hex: "#A855F7" },
  { value: "pink", label: "Pink", hex: "#EC4899" },
  { value: "cyan", label: "Cyan", hex: "#06B6D4" },
  { value: "navy", label: "Navy", hex: "#1E3A8A" },
  { value: "gray", label: "Gray", hex: "#6B7280" },
  { value: "brown", label: "Brown", hex: "#92400E" },
  { value: "gold", label: "Gold", hex: "#EAB308" },
  { value: "silver", label: "Silver", hex: "#C0C0C0" },
  { value: "rose-gold", label: "Rose Gold", hex: "#B76E79" },
  { value: "turquoise", label: "Turquoise", hex: "#14B8A6" },
  { value: "lime", label: "Lime", hex: "#84CC16" },
  { value: "maroon", label: "Maroon", hex: "#7F1D1D" },
  { value: "teal", label: "Teal", hex: "#0D9488" },
  // Add more colors here...
]

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const [options, setOptions] = useState<Record<string, string | undefined>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [showJotForm, setShowJotForm] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const countryCode = useParams().countryCode as string

  // Check if this is a payment stand product
  const isPaymentStand = useMemo(() => {
    // Check if product has "payment" or "stand" in title, or check categories
    const title = product.title?.toLowerCase() || ""
    const categories = product.categories?.map(cat => cat.name?.toLowerCase()) || []
    
    return (
      title.includes("payment") || 
      title.includes("stand") ||
      title.includes("nfc") ||
      categories.some(cat => cat?.includes("payment") || cat?.includes("stand"))
    )
  }, [product])

  // If there is only 1 variant, preselect the options
  useEffect(() => {
    if (product.variants?.length === 1) {
      const variantOptions = optionsAsKeymap(product.variants[0].options)
      setOptions(variantOptions ?? {})
    }
  }, [product.variants])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }


  //check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])


  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  // Handle add to cart - open JotForm for payment stands
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    // If this is a payment stand, open JotForm modal instead of adding directly
    if (isPaymentStand) {
      setShowJotForm(true)
      return
    }

    // For non-payment stand products, add directly to cart
    setIsAdding(true)
    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
    } as any)
    setIsAdding(false)
  }

  // Handle JotForm submission - add to cart with form data
  const handleJotFormSubmit = async (formData: any) => {
    if (!selectedVariant?.id) return

    setIsAdding(true)
    setShowJotForm(false)

    // Add to cart with JotForm data as metadata
    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
      metadata: {
        jotform_submission: formData,
        customization_method: "jotform",
      },
    } as any)

    setIsAdding(false)
    
    // Show success message
    setShowSuccessMessage(true)
    setTimeout(() => setShowSuccessMessage(false), 3000)
  }

  return (
    <>
      <div className="flex flex-col gap-y-4" ref={actionsRef}>
        {/* Variant Options from Medusa */}
        <div>
          {(product.variants?.length ?? 0) > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={setOptionValue}
                      title={option.title ?? ""}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                      variants={product.variants || undefined}
                      region={region}
                    />
                  </div>
                )
              })}
              <Divider />
            </div>
          )}
        </div>

        {/* Payment Stand Customization Info */}
        {isPaymentStand && (
          <div className="flex flex-col gap-y-3 p-4 rounded-xl bg-gradient-to-br from-brand-cream to-white border-2 border-brand-cyan/20">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="font-display font-bold text-base text-brand-navy">
                  Custom Payment Stand
                </h3>
                <p className="text-sm text-gray-600">
                  Complete customization form after selecting your base option
                </p>
              </div>
            </div>
            
            <div className="bg-brand-yellow/10 border border-brand-orange/30 rounded-lg p-3">
              <p className="text-xs font-semibold text-brand-navy mb-1">
                📝 What You'll Customize:
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>✓ Primary & Secondary Colors</li>
                <li>✓ NFC Icons & Links</li>
                <li>✓ Logo Upload</li>
                <li>✓ Custom Design Preferences</li>
              </ul>
            </div>
          </div>
        )}

        <ProductPrice product={product} variant={selectedVariant} />

        <Button
          onClick={handleAddToCart}
          disabled={
            !inStock ||
            !selectedVariant ||
            !!disabled ||
            isAdding ||
            !isValidVariant
          }
          variant="primary"
          className="w-full h-12 bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow hover:from-brand-yellow hover:to-brand-pink text-white font-bold text-lg transition-all duration-300"
          isLoading={isAdding}  
          data-testid="add-product-button"
        >
          {!selectedVariant && !options
            ? "Select variant"
            : !inStock || !isValidVariant
            ? "Out of stock"
            : isPaymentStand
            ? "Customize & Add to Cart"
            : "Add to cart"}
        </Button>

        {/* JotForm Modal */}
        {isPaymentStand && (
          <JotFormModal
            isOpen={showJotForm}
            onClose={() => setShowJotForm(false)}
            onSubmit={handleJotFormSubmit}
            product={product}
            selectedVariant={selectedVariant}
          />
        )}

        {/* Success Message Toast */}
        {showSuccessMessage && (
          <div className="fixed top-20 right-4 z-[60] animate-slide-in-right">
            <div className="bg-white rounded-xl shadow-2xl border-2 border-brand-cyan p-5 flex items-start gap-4 max-w-md">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-cyan to-brand-navy rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-brand-navy text-lg mb-1">
                  Added to Cart! 🎉
                </h3>
                <p className="text-gray-600 text-sm">
                  Your customized payment stand has been added to your cart
                </p>
              </div>
              <button
                onClick={() => setShowSuccessMessage(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <MobileActions
          product={product}
          variant={selectedVariant}
          options={options}
          updateOptions={setOptionValue}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
        />
      </div>
    </>
  )
}
