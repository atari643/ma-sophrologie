import React from 'react'

interface OpeningHours {
  dayOfWeek: string[]
  opens: string
  closes: string
}

interface LocalBusinessSchemaProps {
  name: string
  description: string
  url: string
  telephone: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  openingHours?: OpeningHours[]
  priceRange?: string
  serviceArea?: string[]
  specialties?: string[]
  googleBusinessUrl?: string
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
  sameAs?: string[]
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  priceRange = "€€",
  serviceArea = [],
  specialties = [],
  googleBusinessUrl,
  aggregateRating,
  sameAs = []
}) => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "email": email,
    "priceRange": priceRange,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "areaServed": serviceArea.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "knowsAbout": specialties,
    "serviceType": [
      "Sophrologie",
      "Relaxation",
      "Gestion du stress",
      "Préparation mentale",
      "Développement personnel"
    ],
    "paymentAccepted": [
      "Cash",
      "Check",
      "Credit Card"
    ],
    "currenciesAccepted": "EUR",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Diplôme Sophrologue",
        "educationalLevel": "Master",
        "recognizedBy": {
          "@type": "Organization",
          "name": "ISEBA Bordeaux"
        }
      }
    ],
    ...(googleBusinessUrl && {
      "sameAs": [googleBusinessUrl, ...sameAs]
    }),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      }
    }),
    ...(openingHours && openingHours.length > 0 && {
      "openingHoursSpecification": openingHours.map(schedule => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": schedule.dayOfWeek,
        "opens": schedule.opens,
        "closes": schedule.closes
      }))
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  )
}

export default LocalBusinessSchema
