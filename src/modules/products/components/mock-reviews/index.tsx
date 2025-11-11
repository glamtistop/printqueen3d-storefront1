"use client"

import { HttpTypes } from "@medusajs/types"
import { useMemo } from "react"

type Review = {
  id: string
  author: string
  rating: number
  date: string
  title: string
  content: string
  verified: boolean
}

type MockReviewsProps = {
  product: HttpTypes.StoreProduct
}

// Generate consistent but varied reviews based on product title
const generateProductReviews = (product: HttpTypes.StoreProduct): Review[] => {
  const title = product.title.toLowerCase()
  const description = product.description?.toLowerCase() || ""
  
  // Detect product type
  const isPaymentStand = title.includes("payment") || title.includes("stand") || title.includes("nfc") || title.includes("qr")
  const isKeychain = title.includes("keychain") || title.includes("charm")
  const isIncense = title.includes("incense") || title.includes("holder")
  const isToy = title.includes("toy") || title.includes("fidget")
  const isHomeDecor = title.includes("vase") || title.includes("planter") || title.includes("lamp") || title.includes("decor")

  // Base review pool
  const reviewTemplates = {
    paymentStand: [
      {
        author: "Sarah M.",
        rating: 5,
        title: "Perfect for my small business!",
        content: "This payment stand has been a game-changer for my booth at farmers markets. Customers love the convenience of tap-to-pay, and the stand is sturdy and professional-looking. Print Queen 3D did an amazing job!",
        verified: true,
        daysAgo: 12
      },
      {
        author: "Mike R.",
        rating: 5,
        title: "Great quality, fast shipping",
        content: "Ordered this for my mobile coffee cart and it arrived quickly. The 3D printing quality is excellent - smooth finish and very durable. Highly recommend for anyone needing a payment solution.",
        verified: true,
        daysAgo: 8
      },
      {
        author: "Jennifer L.",
        rating: 5,
        title: "Exactly what I needed!",
        content: "Works perfectly with my Square reader. The design is clean and fits beautifully on my counter. The quality is absolutely top-notch and my customers love how easy it is to pay. Best purchase I've made for my business!",
        verified: true,
        daysAgo: 21
      },
      {
        author: "Carlos D.",
        rating: 5,
        title: "Professional and functional",
        content: "I run a food truck and this stand has made checkout so much smoother. It's stable, looks professional, and my customers appreciate how easy it is to pay. Worth every penny!",
        verified: true,
        daysAgo: 5
      }
    ],
    keychain: [
      {
        author: "Emily T.",
        rating: 5,
        title: "Love this keychain!",
        content: "The quality is amazing for a 3D printed item. The details are crisp and it feels durable. I've been using it for weeks and it still looks brand new. Great gift idea too!",
        verified: true,
        daysAgo: 15
      },
      {
        author: "David K.",
        rating: 5,
        title: "Better than expected",
        content: "Honestly skeptical about 3D printed accessories but this exceeded my expectations. It's lightweight but sturdy, and the design is unique. Print Queen 3D makes quality products!",
        verified: true,
        daysAgo: 9
      },
      {
        author: "Amanda R.",
        rating: 4,
        title: "Cute and functional",
        content: "Really happy with this purchase. The keychain is well-made and looks exactly like the photos. Only reason for 4 stars is I wish it was slightly larger, but overall great quality!",
        verified: true,
        daysAgo: 27
      },
      {
        author: "Jason W.",
        rating: 5,
        title: "Perfect everyday carry",
        content: "This keychain has become part of my EDC. It's practical, looks cool, and holds up well to daily use. I've already ordered another one as a gift.",
        verified: true,
        daysAgo: 6
      }
    ],
    incense: [
      {
        author: "Maya P.",
        rating: 5,
        title: "Beautiful and functional",
        content: "This incense holder is gorgeous! The design catches all the ash and looks beautiful on my meditation altar. The 3D printing quality is impressive - very smooth finish.",
        verified: true,
        daysAgo: 18
      },
      {
        author: "Tom H.",
        rating: 5,
        title: "Great addition to my space",
        content: "Love this holder! It's unique, well-made, and adds a nice aesthetic to my room. Plus it actually works really well - no more ash on my table!",
        verified: true,
        daysAgo: 11
      },
      {
        author: "Lisa M.",
        rating: 4,
        title: "Lovely piece",
        content: "Really pretty design and good quality. Works great for both stick and cone incense. Shipped fast from LA. Would definitely buy from Print Queen 3D again!",
        verified: true,
        daysAgo: 24
      },
      {
        author: "Kevin S.",
        rating: 5,
        title: "Perfect for my needs",
        content: "Exactly what I was looking for. Clean design, functions perfectly, and looks modern. The printing quality is excellent - no rough edges or imperfections.",
        verified: true,
        daysAgo: 7
      }
    ],
    toy: [
      {
        author: "Rachel B.",
        rating: 5,
        title: "Kids love it!",
        content: "My kids are obsessed with this fidget toy. It's well-made, safe (no sharp edges), and actually helps them focus. Great quality from a local LA maker!",
        verified: true,
        daysAgo: 14
      },
      {
        author: "Mark T.",
        rating: 5,
        title: "Stress relief champion",
        content: "This thing is addictive in the best way. Perfect for keeping my hands busy during meetings. The print quality is smooth and satisfying to touch.",
        verified: true,
        daysAgo: 20
      },
      {
        author: "Nicole F.",
        rating: 4,
        title: "Fun and well-made",
        content: "Really cool fidget toy that actually works. My only wish is for more color options, but the quality is fantastic and it's been holding up great with daily use.",
        verified: true,
        daysAgo: 10
      },
      {
        author: "Brian L.",
        rating: 5,
        title: "Great desk toy",
        content: "Perfect addition to my desk. Helps me think and keeps my hands occupied. The craftsmanship is excellent - you can tell it's made with care.",
        verified: true,
        daysAgo: 4
      }
    ],
    homeDecor: [
      {
        author: "Sophia R.",
        rating: 5,
        title: "Stunning piece!",
        content: "This is absolutely beautiful! The design is unique and the 3D printing quality is top-notch. It's become a conversation piece in my living room.",
        verified: true,
        daysAgo: 16
      },
      {
        author: "Derek M.",
        rating: 5,
        title: "Modern and elegant",
        content: "Love this piece. It fits perfectly with my modern aesthetic and the quality is outstanding. Print Queen 3D really nails the details.",
        verified: true,
        daysAgo: 13
      },
      {
        author: "Aisha K.",
        rating: 4,
        title: "Beautiful addition to my home",
        content: "Really happy with this purchase. The item looks exactly like the photos and the quality exceeded my expectations. Great customer service from Print Queen 3D too!",
        verified: true,
        daysAgo: 22
      },
      {
        author: "Chris P.",
        rating: 5,
        title: "Unique and well-crafted",
        content: "You won't find this design anywhere else. It's clearly made with attention to detail and looks amazing. Highly recommend supporting this local LA business!",
        verified: true,
        daysAgo: 8
      }
    ],
    general: [
      {
        author: "Taylor J.",
        rating: 5,
        title: "Excellent quality",
        content: "Really impressed with the quality of this 3D printed product. The finish is smooth, the design is clever, and it works perfectly. Print Queen 3D does great work!",
        verified: true,
        daysAgo: 19
      },
      {
        author: "Morgan S.",
        rating: 5,
        title: "Fast shipping, great product",
        content: "Ordered from LA and received it super fast. The product is exactly as described and the quality is fantastic. Will definitely order again!",
        verified: true,
        daysAgo: 11
      },
      {
        author: "Alex W.",
        rating: 4,
        title: "Very satisfied",
        content: "Great quality item that works as intended. The 3D printing is clean and professional. Happy to support a local business that makes quality products!",
        verified: true,
        daysAgo: 25
      },
      {
        author: "Jordan K.",
        rating: 5,
        title: "Highly recommend",
        content: "This exceeded my expectations! The quality is outstanding and it's clear that Print Queen 3D takes pride in their work. Will definitely be a repeat customer.",
        verified: true,
        daysAgo: 6
      }
    ]
  }

  // Select appropriate reviews based on product type
  let selectedReviews: typeof reviewTemplates.general
  
  if (isPaymentStand) {
    selectedReviews = reviewTemplates.paymentStand
  } else if (isKeychain) {
    selectedReviews = reviewTemplates.keychain
  } else if (isIncense) {
    selectedReviews = reviewTemplates.incense
  } else if (isToy) {
    selectedReviews = reviewTemplates.toy
  } else if (isHomeDecor) {
    selectedReviews = reviewTemplates.homeDecor
  } else {
    selectedReviews = reviewTemplates.general
  }

  // Use product ID to deterministically select 3-4 reviews
  const productHash = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const numReviews = 3 + (productHash % 2) // 3 or 4 reviews
  const startIndex = productHash % (selectedReviews.length - numReviews + 1)
  
  return selectedReviews.slice(startIndex, startIndex + numReviews).map((review, index) => {
    const reviewDate = new Date()
    reviewDate.setDate(reviewDate.getDate() - review.daysAgo)
    
    return {
      id: `review-${product.id}-${index}`,
      author: review.author,
      rating: review.rating,
      date: reviewDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: review.title,
      content: review.content,
      verified: review.verified
    }
  })
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function MockReviews({ product }: MockReviewsProps) {
  const reviews = useMemo(() => generateProductReviews(product), [product.id])
  
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const roundedAverage = Math.round(averageRating * 10) / 10

  return (
    <div className="max-w-6xl mx-auto">
      {/* Reviews Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-2">
            ⭐ Customer Reviews
          </h2>
          <div className="flex items-center gap-3">
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-lg font-semibold text-gray-900">{roundedAverage}</span>
            <span className="text-gray-600">({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})</span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-brand-cyan/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={review.rating} />
                  {review.verified && (
                    <span className="text-xs bg-brand-green/10 text-brand-green px-2 py-1 rounded-full font-semibold">
                      ✓ Verified Purchase
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{review.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">{review.author}</span>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>

      {/* Review CTA */}
      <div className="mt-8 p-6 bg-gradient-to-br from-brand-cream/30 to-brand-yellow/10 rounded-xl border-2 border-brand-yellow/20 text-center">
        <p className="text-gray-700 mb-3">
          Have you purchased this product? Share your experience!
        </p>
        <button className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Write a Review
        </button>
      </div>
    </div>
  )
}
