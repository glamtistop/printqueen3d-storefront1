"use client"

import { useEffect } from "react"
import Script from "next/script"

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl text-gray-300">
            Creators, event organizers, and brands—let's build together
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-4 text-center">Let's Collaborate</h2>
            <p className="text-gray-600 mb-8 text-center">
              Pitch product ideas, event activations, or content collabs. Fill out the form below and we'll get back to you within 48 hours.
            </p>

            {/* JotForm Embed */}
            <div className="jotform-container">
              <Script
                type="text/javascript"
                src="https://form.jotform.com/jsform/253091307365051"
                strategy="afterInteractive"
              />
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Prefer to reach out directly?{" "}
                <a href="mailto:Printqueen3d@gmail.com" className="text-brand-cyan hover:underline font-medium">
                  Printqueen3d@gmail.com
                </a>
                {" "}or call{" "}
                <a href="tel:800-495-6227" className="text-brand-cyan hover:underline font-medium">
                  800-495-6227
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
