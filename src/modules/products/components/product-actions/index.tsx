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
  const countryCode = useParams().countryCode as string

  // Custom fields for payment stands
  const [primaryColor, setPrimaryColor] = useState<string>("")
  const [secondaryColor, setSecondaryColor] = useState<string>("")
  const [logoConfirmed, setLogoConfirmed] = useState<boolean>(false)
  const [nfcLinks, setNfcLinks] = useState<string>("")
  const [primaryColorOpen, setPrimaryColorOpen] = useState<boolean>(false)
  const [secondaryColorOpen, setSecondaryColorOpen] = useState<boolean>(false)
  const [nfcIcons, setNfcIcons] = useState<{
    venmo: boolean
    zelle: boolean
    cashapp: boolean
    paypal: boolean
    website: boolean
    instagram: boolean
    facebook: boolean
    tiktok: boolean
    custom: string
  }>({
    venmo: false,
    zelle: false,
    cashapp: false,
    paypal: false,
    website: false,
    instagram: false,
    facebook: false,
    tiktok: false,
    custom: "",
  })

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

  // Count selected NFC icons
  const selectedIconCount = useMemo(() => {
    let count = 0
    if (nfcIcons.venmo) count++
    if (nfcIcons.zelle) count++
    if (nfcIcons.cashapp) count++
    if (nfcIcons.paypal) count++
    if (nfcIcons.website) count++
    if (nfcIcons.instagram) count++
    if (nfcIcons.facebook) count++
    if (nfcIcons.tiktok) count++
    if (nfcIcons.custom.trim() !== "") count++
    return count
  }, [nfcIcons])

  // Check if all required payment stand fields are filled
  const isPaymentStandComplete = useMemo(() => {
    if (!isPaymentStand) return true // Not a payment stand, no extra validation needed
    
    return (
      primaryColor !== "" &&
      secondaryColor !== "" &&
      logoConfirmed === true &&
      nfcLinks.trim() !== "" &&
      selectedIconCount > 0
    )
  }, [isPaymentStand, primaryColor, secondaryColor, logoConfirmed, nfcLinks, selectedIconCount])

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

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    // Prepare metadata for payment stands
    const metadata: any = {}
    
    if (isPaymentStand) {
      metadata.primary_color = primaryColor
      metadata.secondary_color = secondaryColor
      metadata.nfc_links = nfcLinks
      metadata.nfc_icons = nfcIcons
      metadata.selected_icon_count = selectedIconCount
      metadata.logo_via_email = true
      metadata.logo_instructions = "Customer will email logo to order confirmation email"
    }

    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
      countryCode,
      metadata: Object.keys(metadata).length > 0 ? metadata : undefined,
    } as any)

    setIsAdding(false)
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

        {/* Custom Payment Stand Options */}
        {isPaymentStand && (
          <div className="flex flex-col gap-y-4 p-4 rounded-xl bg-gradient-to-br from-brand-cream to-white border-2 border-brand-cyan/20">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-2">
              🎨 Customize Your Stand
            </h3>

            {/* Primary Color Selection - Accordion Style */}
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setPrimaryColorOpen(!primaryColorOpen)}
                className="w-full p-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                disabled={disabled || isAdding}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-brand-navy">
                    Primary Color <span className="text-brand-pink">*</span>
                  </span>
                  {primaryColor && (
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: COLOR_OPTIONS.find(c => c.value === primaryColor)?.hex }}
                      />
                      <span className="text-sm font-medium text-brand-cyan">
                        {COLOR_OPTIONS.find(c => c.value === primaryColor)?.label}
                      </span>
                    </div>
                  )}
                  {!primaryColor && (
                    <span className="text-xs text-gray-500">Click to select</span>
                  )}
                </div>
                <svg 
                  className={`w-5 h-5 text-brand-navy transition-transform ${primaryColorOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {primaryColorOpen && (
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white border-t-2 border-gray-200">
                  <div className="grid grid-cols-5 gap-2">
                    {COLOR_OPTIONS.map((color) => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => {
                          setPrimaryColor(color.value)
                          setPrimaryColorOpen(false)
                        }}
                        disabled={disabled || isAdding}
                        className={`
                          w-full aspect-square rounded-lg border-2 transition-all
                          ${primaryColor === color.value 
                            ? 'border-brand-cyan ring-2 ring-brand-cyan ring-offset-2 scale-110' 
                            : 'border-gray-300 hover:border-brand-cyan hover:scale-105'
                          }
                          ${disabled || isAdding ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        `}
                        style={{ backgroundColor: color.hex }}
                        title={color.label}
                      >
                        {color.hex === '#FFFFFF' && (
                          <div className="w-full h-full border border-gray-200 rounded-lg" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Secondary Color Selection - Accordion Style */}
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setSecondaryColorOpen(!secondaryColorOpen)}
                className="w-full p-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                disabled={disabled || isAdding}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-brand-navy">
                    Secondary Color <span className="text-brand-pink">*</span>
                  </span>
                  {secondaryColor && (
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: COLOR_OPTIONS.find(c => c.value === secondaryColor)?.hex }}
                      />
                      <span className="text-sm font-medium text-brand-cyan">
                        {COLOR_OPTIONS.find(c => c.value === secondaryColor)?.label}
                      </span>
                    </div>
                  )}
                  {!secondaryColor && (
                    <span className="text-xs text-gray-500">Click to select</span>
                  )}
                </div>
                <svg 
                  className={`w-5 h-5 text-brand-navy transition-transform ${secondaryColorOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {secondaryColorOpen && (
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white border-t-2 border-gray-200">
                  <div className="grid grid-cols-5 gap-2">
                    {COLOR_OPTIONS.map((color) => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => {
                          setSecondaryColor(color.value)
                          setSecondaryColorOpen(false)
                        }}
                        disabled={disabled || isAdding}
                        className={`
                          w-full aspect-square rounded-lg border-2 transition-all
                          ${secondaryColor === color.value 
                            ? 'border-brand-cyan ring-2 ring-brand-cyan ring-offset-2 scale-110' 
                            : 'border-gray-300 hover:border-brand-cyan hover:scale-105'
                          }
                          ${disabled || isAdding ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        `}
                        style={{ backgroundColor: color.hex }}
                        title={color.label}
                      >
                        {color.hex === '#FFFFFF' && (
                          <div className="w-full h-full border border-gray-200 rounded-lg" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Logo Submission Instructions - Email Method */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                Logo Submission <span className="text-brand-pink">*</span>
              </label>
              
              <div className="p-4 bg-gradient-to-br from-brand-cream/50 to-brand-yellow/10 border-2 border-brand-cyan/30 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl">📧</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-brand-navy mb-2">
                      Email Your Logo After Checkout
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      After completing your order, you'll receive a confirmation email.
                    </p>
                    <p className="text-sm font-semibold text-brand-pink mb-2">
                      ⚠️ REPLY to that email with your logo attached
                    </p>
                  </div>
                </div>
                
                <div className="bg-white/80 p-3 rounded-lg border border-brand-cyan/20">
                  <p className="text-xs font-semibold text-brand-navy mb-2">
                    Logo Requirements:
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✓ High resolution (300+ DPI preferred)</li>
                    <li>✓ Accepted formats: PNG, JPG, AI, SVG</li>
                    <li>✓ Transparent background recommended</li>
                    <li>✓ Include your order number in email</li>
                  </ul>
                </div>
              </div>
              
              <label className="flex items-start gap-3 mt-3 p-3 border-2 border-gray-300 rounded-lg hover:border-brand-cyan cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={logoConfirmed}
                  onChange={(e) => setLogoConfirmed(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-brand-cyan focus:ring-brand-cyan flex-shrink-0"
                  disabled={disabled || isAdding}
                  required
                />
                <span className="text-sm text-gray-700">
                  <span className="font-semibold text-brand-navy">I understand:</span> I will reply to my order confirmation email with my logo attached. Production will begin once my logo is received.
                </span>
              </label>
            </div>

            {/* NFC Icon Selection */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                Select NFC Icons <span className="text-brand-pink">*</span>
              </label>
              <div className="bg-brand-yellow/10 border border-brand-orange/30 rounded-lg p-3 mb-3">
                <p className="text-xs font-semibold text-brand-navy">
                  ⚠️ Only select the number of icons that match your base option above
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Selected: <span className="font-bold text-brand-cyan">{selectedIconCount}</span> icon{selectedIconCount !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.venmo}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, venmo: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">💸 Venmo</span>
                </label>

                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.zelle}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, zelle: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">💰 Zelle</span>
                </label>

                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.cashapp}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, cashapp: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">💵 Cash App</span>
                </label>

                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.paypal}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, paypal: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">💳 PayPal</span>
                </label>

                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.website}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, website: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">🌐 Website</span>
                </label>

                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.instagram}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, instagram: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">📷 Instagram</span>
                </label>

                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.facebook}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, facebook: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">👥 Facebook</span>
                </label>

                <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded-lg hover:border-brand-cyan cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nfcIcons.tiktok}
                    onChange={(e) => setNfcIcons(prev => ({ ...prev, tiktok: e.target.checked }))}
                    className="w-4 h-4 text-brand-cyan focus:ring-brand-cyan"
                    disabled={disabled || isAdding}
                  />
                  <span className="text-sm font-medium">🎵 TikTok</span>
                </label>
              </div>

              <div className="mt-2">
                <input
                  type="text"
                  value={nfcIcons.custom}
                  onChange={(e) => setNfcIcons(prev => ({ ...prev, custom: e.target.value }))}
                  placeholder="Custom icon name (e.g., LinkedIn, Twitter, etc.)"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-cyan focus:outline-none"
                  disabled={disabled || isAdding}
                />
              </div>
            </div>

            {/* NFC Links */}
            <div>
              <label className="block text-sm font-semibold text-brand-navy mb-2">
                NFC Links/Social Media <span className="text-brand-pink">*</span>
              </label>
              <textarea
                value={nfcLinks}
                onChange={(e) => setNfcLinks(e.target.value)}
                placeholder="Enter your links (one per line):&#10;https://instagram.com/yourprofile&#10;https://venmo.com/yourname&#10;https://cashapp.com/$yourhandle&#10;https://yourwebsite.com"
                rows={6}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-brand-cyan focus:outline-none resize-none"
                disabled={disabled || isAdding}
                required
              />
              <p className="text-xs text-gray-600 mt-1">
                💡 Enter one link per line (in same order as icons above). These will be programmed into your NFC stand.
              </p>
            </div>

            {!isPaymentStandComplete && (
              <div className="text-sm text-brand-orange bg-brand-yellow/10 p-3 rounded-lg border border-brand-yellow/30">
                ⚠️ Please complete all customization options above
              </div>
            )}
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
            !isValidVariant ||
            !isPaymentStandComplete
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
            : !isPaymentStandComplete
            ? "Complete customization"
            : "Add to cart"}
        </Button>
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
