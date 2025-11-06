"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function PartnershipPage() {
  useEffect(() => {
    // Hide footer element only (keep nav visible)
    const footer = document.querySelector('footer')
    
    if (footer) footer.style.display = 'none'
    
    // Cleanup on unmount
    return () => {
      if (footer) footer.style.display = ''
    }
  }, [])

  return (
    <div 
      className="w-full min-h-screen bg-white"
      style={{
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* JotForm iFrame - Full Page */}
      <iframe
        id="JotFormIFrame-253091307365051"
        title="Partnership and Collaboration Request Form"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/253091307365051"
        style={{
          width: '100%',
          minHeight: 'calc(100vh - 80px)',
          border: 'none',
          display: 'block'
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
