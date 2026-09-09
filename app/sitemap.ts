import { MetadataRoute } from 'next'
import { DOC_PAGES } from '@/lib/docs-registry'

/**
 * ⚠️ THE DOC ROUTES COME FROM `lib/docs-registry.ts`. This file used to keep its
 * own list, so a new page was invisible to search engines until someone
 * remembered to add it here as well — which is exactly what happened to
 * /docs/build-with-ai on the day it shipped.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.vihaya.app'

  const routes = ['', '/privacy', ...DOC_PAGES.map(p => p.href)]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : ('monthly' as const),
    priority: route === '' ? 1.0 : route.startsWith('/docs') ? 0.8 : 0.6,
  }))
}
