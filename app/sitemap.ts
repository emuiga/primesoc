import type { MetadataRoute } from 'next'
import { servicesList } from '@/lib/services'

const baseUrl = 'https://primesoc.africa'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2025-05-27'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = servicesList.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: new Date('2025-05-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...servicePages]
}
