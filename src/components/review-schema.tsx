import React from 'react'

interface ReviewData {
  author: string
  reviewBody: string
  ratingValue: number
  datePublished: string
  location?: string
}

interface ReviewSchemaProps {
  businessName: string
  businessUrl: string
  reviews: ReviewData[]
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  businessName,
  businessUrl,
  reviews,
  aggregateRating
}) => {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "url": businessUrl,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.ratingValue,
        "bestRating": 5
      },
      "datePublished": review.datePublished,
      ...(review.location && {
        "locationCreated": {
          "@type": "Place",
          "name": review.location
        }
      })
    })),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  )
}

export default ReviewSchema
