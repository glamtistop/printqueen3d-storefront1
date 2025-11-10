"use client"

import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
        <p className="text-gray-400">No image available</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image */}
      <Container className="relative aspect-square w-full overflow-hidden bg-ui-bg-subtle rounded-xl">
        {images[activeIndex]?.url && (
          <Image
            src={images[activeIndex].url}
            priority={true}
            className="absolute inset-0"
            alt={`Product image ${activeIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
            }}
          />
        )}
      </Container>

      {/* Thumbnail Gallery - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setActiveIndex(index)}
              className={`
                relative aspect-square overflow-hidden rounded-lg border-2 transition-all
                ${index === activeIndex 
                  ? 'border-brand-cyan ring-2 ring-brand-cyan shadow-md' 
                  : 'border-gray-300 hover:border-brand-cyan'
                }
              `}
            >
              {image.url && (
                <Image
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 20vw, 10vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
