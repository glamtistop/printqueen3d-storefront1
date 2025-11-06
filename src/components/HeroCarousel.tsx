'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/paymentstands.PNG',
    alt: 'Print Queen 3D - NFC Payment Stands',
  },
  {
    src: '/custom3dprints.PNG',
    alt: 'Print Queen 3D - Custom 3D Prints',
  },
  {
    src: '/nfckeychain.png',
    alt: 'Print Queen 3D - NFC Keychain',
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full h-[600px]">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={600}
              className="w-full h-full object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
