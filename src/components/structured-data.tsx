import Script from 'next/script'

export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://muriel-artigala.fr/#LocalBusiness",
    "name": "Muriel Artigala - Sophrologue",
    "description": "Cabinet de sophrologie à Martignas-sur-Jalle. Muriel Artigala, sophrologue diplômée ISEBA Bordeaux, propose des séances individuelles et collectives pour la gestion du stress, l'amélioration du sommeil et la confiance en soi.",
    "image": "https://muriel-artigala.fr/images/cabinet-sophrologie.jpg",
    "telephone": "+33689155021",
    "email": "contact@muriel-artigala.fr",
    "url": "https://muriel-artigala.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "120 avenue de Saint-Emilion",
      "addressLocality": "Martignas-sur-Jalle",
      "postalCode": "33127",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.8437",
      "longitude": "-0.7737"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "14:00",
        "closes": "19:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": "Cash, Card, Check",
    "currenciesAccepted": "EUR",
    "areaServed": [
      "Martignas-sur-Jalle",
      "Bordeaux",
      "Pessac",
      "Mérignac", 
      "Talence",
      "Gradignan",
      "Villenave-d'Ornon",
      "Gironde",
      "Nouvelle-Aquitaine"
    ],
    "serviceType": "Sophrologie",
    "sameAs": [
      "https://g.co/kgs/sXFf524"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "38",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Sophrologie",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Séance individuelle de sophrologie",
            "description": "Accompagnement personnalisé d'1 heure pour la gestion du stress, amélioration du sommeil, confiance en soi"
          },
          "price": "40",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Atelier de groupe sophrologie",
            "description": "Séance collective de 1h30 en petit groupe (max 8 personnes)"
          },
          "price": "30",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation en ligne",
            "description": "Séance de sophrologie à distance via plateforme sécurisée"
          },
          "price": "40", 
          "priceCurrency": "EUR"
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Muriel Artigala",
      "jobTitle": "Sophrologue",
      "alumniOf": {
        "@type": "Organization",
        "name": "ISEBA Bordeaux"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Diplôme de Sophrologue ISEBA Bordeaux"
        },
        {
          "@type": "EducationalOccupationalCredential", 
          "name": "Spécialisation techniques de respiration - CHU Bordeaux"
        }
      ]
    },
    "identifier": {
      "@type": "PropertyValue",
      "name": "SIRET",
      "value": "94823934800014"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muriel Artigala", 
    "jobTitle": "Sophrologue",
    "description": "Sophrologue diplômée ISEBA Bordeaux, spécialisée en techniques de respiration. Cabinet à Martignas-sur-Jalle près de Bordeaux.",
    "url": "https://muriel-artigala.fr",
    "image": "https://muriel-artigala.fr/images/muriel-artigala-sophrologue.jpg",
    "telephone": "+33689155021",
    "email": "contact@muriel-artigala.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "120 avenue de Saint-Emilion",
      "addressLocality": "Martignas-sur-Jalle", 
      "postalCode": "33127",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Cabinet Muriel Artigala",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "120 avenue de Saint-Emilion",
        "addressLocality": "Martignas-sur-Jalle",
        "postalCode": "33127",
        "addressCountry": "FR"
      }
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "ISEBA Bordeaux"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Diplôme de Sophrologue"
      }
    ],
    "knowsAbout": [
      "Sophrologie",
      "Gestion du stress", 
      "Techniques de respiration",
      "Relaxation",
      "Développement personnel",
      "Bien-être",
      "Méditation"
    ],
    "serviceArea": [
      "Martignas-sur-Jalle",
      "Bordeaux",
      "Gironde",
      "Nouvelle-Aquitaine"
    ]
  }

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
      <Script
        id="person-schema"
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personData)
        }}
      />
    </>
  )
}
