"use client"

import Script from "next/script"

export default function PartnershipPage() {
  return (
    <div className="w-full h-screen bg-white">
      {/* JotForm iFrame - Full Page */}
      <iframe
        id="JotFormIFrame-253091307365051"
        title="Partnership and Collaboration Request Form"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/253091307365051"
        style={{
          width: '100%',
          height: '100%',
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
