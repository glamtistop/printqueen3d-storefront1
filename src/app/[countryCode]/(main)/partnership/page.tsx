"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function PartnershipPage() {
  useEffect(() => {
    // Hide nav and footer elements
    const nav = document.querySelector('nav')
    const footer = document.querySelector('footer')
    
    if (nav) nav.style.display = 'none'
    if (footer) footer.style.display = 'none'
    
    // Cleanup on unmount
    return () => {
      if (nav) nav.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full bg-white z-50 overflow-auto">
      {/* JotForm iFrame - Full Page */}
      <iframe
        id="JotFormIFrame-253091307365051"
        title="Partnership and Collaboration Request Form"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/253091307365051"
        style={{
          width: '100%',
          minHeight: '100%',
          border: 'none'
        }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).jotformEmbedHandler) {
            (window as any).jotformEmbedHandler("iframe[id='JotFormIFrame-253091307365051']", "https://form.jotform.com/")
          }
        }}
      />
    </div>
  )
}
