import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://docs.vihaya.app'
  
  const routes = [
    '',
    '/docs',
    '/docs/installation',
    '/docs/quick-start',
    '/docs/event-overview',
    '/docs/event-management/organizer-profile',
    '/docs/event-management/creating-events',
    '/docs/event-management/event-settings',
    '/docs/event-management/payment-pricing',
    '/docs/event-management/form-builder',
    '/docs/event-management/guests-management',
    '/docs/event-management/child-events',
    '/docs/event-management/qr-scanning',
    '/docs/event-management/in-event',
    '/docs/event-management/event-analytics',
    '/docs/event-management/post-event',
    '/docs/event-management/ai-event-creation',
    '/docs/api',
    '/docs/api/authentication',
    '/docs/api/payments',
    '/docs/api/endpoints',
    '/docs/api/sdks',
    '/docs/api/webhooks',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/docs') ? 0.8 : 0.6,
  }))
}







