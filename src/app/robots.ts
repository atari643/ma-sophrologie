import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/espace-client/',
    },
    sitemap: 'https://muriel-artigala.fr/sitemap.xml',
  }
}
