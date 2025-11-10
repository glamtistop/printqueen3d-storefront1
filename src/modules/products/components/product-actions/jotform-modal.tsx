"use client"

import { HttpTypes } from "@medusajs/types"
import { useEffect, useState } from "react"
import { X } from "@medusajs/icons"

type JotFormModalProps = {
  isOpen: boolean
  onClose: () => void
  onSubmit: (formData: any) => void
  product: HttpTypes.StoreProduct
  selectedVariant?: HttpTypes.StoreProductVariant
}

export default function JotFormModal({
  isOpen,
  onClose,
  onSubmit,
  product,
  selectedVariant,
}: JotFormModalProps) {
  const [isFormLoaded, setIsFormLoaded] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setIsFormLoaded(false)
      return
    }

    // Listen for JotForm submission
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from JotForm
      if (event.origin !== "https://form.jotform.com") return

      // Ignore non-JSON messages (JotForm sends various string messages)
      if (typeof event.data === "string" && !event.data.startsWith("{")) {
        return
      }

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data

        // Debug: Log all JotForm events (remove this later)
        console.log("JotForm Event:", data)

        // JotForm sends different events - check for submission
        if (
          data.action === "submission-completed" || 
          data.event === "formSubmit" ||
          data.type === "form-submit" ||
          (data.action === "thank-you-page")
        ) {
          console.log("Form submitted! Processing...")
          
          // Extract form data
          const formData = data.submission || data.data || data
          
          // Add product info to form data
          const enrichedData = {
            ...formData,
            product_title: product.title,
            product_id: product.id,
            variant_id: selectedVariant?.id,
            variant_title: selectedVariant?.title,
            submission_timestamp: new Date().toISOString(),
          }

          // Call the onSubmit handler with form data
          onSubmit(enrichedData)
        }
      } catch (error) {
        // Silently ignore parse errors from JotForm's non-JSON messages
        return
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [isOpen, onSubmit, product, selectedVariant])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b-2 border-gray-200 bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🎨</div>
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Customize Your Payment Stand
              </h2>
              <p className="text-sm text-white/90">
                {product.title} - {selectedVariant?.title || ""}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Loading Indicator */}
        {!isFormLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-brand-cyan border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-brand-navy font-semibold">Loading customization form...</p>
            </div>
          </div>
        )}

        {/* iFrame Container */}
        <div className="flex-1 overflow-hidden bg-gray-50">
          <iframe
            src="https://form.jotform.com/253135826978066?noRedirect=true"
            className="w-full h-full border-0"
            title="Payment Stand Customization Form"
            onLoad={() => setIsFormLoaded(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
          />
        </div>

        {/* Footer with Instructions */}
        <div className="p-6 bg-gradient-to-br from-brand-cream/50 to-white border-t-2 border-gray-200">
          <div className="flex flex-col gap-4">
            {/* Instructions */}
            <div className="flex items-start gap-3 text-sm">
              <div className="flex-shrink-0 text-2xl">💡</div>
              <div className="flex-1">
                <p className="font-bold text-brand-navy text-base">Complete the form above to finalize your customization.</p>
                <p className="text-gray-600 text-sm mt-1">
                  After submitting the form, click the button below to add to cart.
                </p>
              </div>
            </div>
            
            {/* Big Button */}
            <button
              onClick={() => setFormSubmitted(true)}
              className="w-full py-5 bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow text-white font-black text-xl rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 animate-pulse shadow-lg"
            >
              ✓ I'VE SUBMITTED THE FORM
            </button>
          </div>
        </div>

        {/* Success Overlay - Appears After Form Submission */}
        {formSubmitted && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md mx-4 animate-scale-in border-4 border-brand-cyan">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-brand-cyan to-brand-navy rounded-full flex items-center justify-center animate-bounce-once">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Success Message */}
              <h3 className="text-3xl font-display font-black text-center text-brand-navy mb-3">
                Form Submitted! 🎉
              </h3>
              <p className="text-center text-gray-600 mb-8 text-base">
                Your customization details have been received. Click below to add your personalized payment stand to your cart!
              </p>

              {/* Product Info */}
              <div className="bg-gradient-to-br from-brand-cream/30 to-brand-yellow/10 rounded-xl p-4 mb-6 border-2 border-brand-cyan/20">
                <p className="text-sm font-semibold text-brand-navy">{product.title}</p>
                <p className="text-sm text-gray-600">{selectedVariant?.title || ""}</p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  onSubmit({
                    product_title: product.title,
                    product_id: product.id,
                    variant_id: selectedVariant?.id,
                    variant_title: selectedVariant?.title,
                    submission_timestamp: new Date().toISOString(),
                    jotform_url: "https://form.jotform.com/253135826978066",
                    note: "Customer submitted JotForm customization form"
                  })
                }}
                className="w-full py-5 bg-gradient-to-r from-brand-pink via-brand-orange to-brand-yellow text-white font-black text-xl rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                🛒 ADD TO CART NOW
              </button>

              {/* Cancel Option */}
              <button
                onClick={() => setFormSubmitted(false)}
                className="w-full mt-3 py-2 text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
