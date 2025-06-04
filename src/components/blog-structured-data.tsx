import React from 'react'

interface BlogStructuredDataProps {
  title: string
  description: string
  author?: string
  datePublished: string
  dateModified?: string
  url: string
  imageUrl?: string
  keywords?: string[]
  category?: string
}

const BlogStructuredData: React.FC<BlogStructuredDataProps> = ({
  title,
  description,
  author = "Muriel Artigala",
  datePublished,
  dateModified,
  url,
  imageUrl = "https://muriel-artigala.fr/images/muriel-artigala-sophrologue.jpg",
  keywords = [],
  category = "Sophrologie"
}) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://muriel-artigala.fr/a-propos",
      "jobTitle": "Sophrologue",
      "worksFor": {
        "@type": "Organization",
        "name": "Cabinet de Sophrologie Muriel Artigala",
        "url": "https://muriel-artigala.fr"
      },
      "sameAs": [
        "https://muriel-artigala.fr"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Cabinet de Sophrologie Muriel Artigala",
      "url": "https://muriel-artigala.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://muriel-artigala.fr/images/logo-muriel-artigala.png",
        "width": 300,
        "height": 100
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "url": url,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    },
    "articleSection": category,
    "keywords": keywords.join(", "),
    "inLanguage": "fr-FR",
    "isAccessibleForFree": true,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "about": {
      "@type": "Thing",
      "name": "Sophrologie",
      "description": "Méthode de relaxation dynamique combinant respiration, détente musculaire et visualisation positive"
    },
    "mentions": [
      {
        "@type": "Organization",
        "name": "ISEBA Bordeaux",
        "description": "Institut Supérieur Européen de Bioénergie et d'Acupuncture"
      },
      {
        "@type": "Organization", 
        "name": "CHU de Bordeaux",
        "description": "Centre Hospitalier Universitaire de Bordeaux"
      }
    ]
  }

  // Schema pour le breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://muriel-artigala.fr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://muriel-artigala.fr/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": url
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

export default BlogStructuredData
