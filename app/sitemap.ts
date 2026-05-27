import type { MetadataRoute } from 'next'
import { servicesList } from '@/lib/services'
import { siteUrl } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/careers`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = servicesList.map((s) => ({
    url: `${siteUrl}/solutions/${s.slug}`,
    lastModified: new Date('2025-05-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...servicePages]
}
