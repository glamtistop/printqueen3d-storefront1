import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Print Queen 3D",
  description: "Learn about Print Queen 3D - Los Angeles-based custom 3D printing experts specializing in NFC solutions and branded business products.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1e] to-[#16213e] text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,180,180,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(100,30,150,0.06),transparent_50%)]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            About Print Queen 3D
          </h1>
          
          {/* Banner tagline */}
          <div className="relative inline-block bg-black/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-[#00b4b4]/40">
            <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Precision engineering meets stylish design
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl text-[#00d4d4]">in the heart of Los Angeles</span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Print Queen 3D, we turn imagination into reality. Based in Los Angeles, our team blends creativity, precision, and technology to produce high-quality 3D prints that look as good as they perform.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We specialize in custom products—from NFC payment stands and keychains to personalized decor and functional designs—all made with care, accuracy, and expert finishing. Whether you're building your brand or creating something personal, we're here to make your vision come to life.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-semibold text-brand-navy">
              Your idea. Our craft. Printed perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-brand-navy text-center mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">
                Most orders are completed within 72 hours so you can bring your ideas to life quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                From glossy finishes to sturdy builds, our materials define quality. Every product is crafted to deliver expression and long-lasting performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Customization</h3>
              <p className="text-gray-600">
                Every product is personalized to match your unique vision.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Customer First</h3>
              <p className="text-gray-600">
                We make sure every order meets your expectations—down to the smallest detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-brand-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                Designed and printed in Los Angeles with detail and pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-brand-navy text-center mb-12">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏪</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Retail Stores</h3>
              <p className="text-sm text-gray-600">NFC payment solutions and branded displays</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Restaurants & Cafes</h3>
              <p className="text-sm text-gray-600">Table stands and QR menu displays</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Events & Pop-Ups</h3>
              <p className="text-sm text-gray-600">Portable payment and information displays</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">Corporate Offices</h3>
              <p className="text-sm text-gray-600">Branded keychains and access solutions</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-display font-bold text-brand-navy mb-2">General Public</h3>
              <p className="text-sm text-gray-600">Custom gifts and personalized designs</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
