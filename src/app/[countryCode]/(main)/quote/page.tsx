"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function QuotePage() {
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
    <div className="fixed inset-0 w-full h-full bg-white z-50">
      {/* JotForm iFrame - Full Page */}
      <iframe
        id="JotFormIFrame-253092245297057"
        title="Request a Custom Quote from Print Queen 3D"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/253092245297057"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).jotformEmbedHandler) {
            (window as any).jotformEmbedHandler("iframe[id='JotFormIFrame-253092245297057']", "https://form.jotform.com/")
          }
        }}
      />
    </div>
  )
}
