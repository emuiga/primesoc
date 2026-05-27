import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, servicesList } from '@/lib/services'
import { CTASection } from '@/components/CTASection'
import { siteUrl, ogImage } from '@/lib/config'

const photoBg: Record<string, string> = {
  soc:  'ph-bg-soc',
  vapt: 'ph-bg-2',
  cti:  'ph-bg-cti',
  grc:  'ph-bg-grc',
  eng:  'ph-bg-5',
}

const bgVariant: Record<string, string> = {
  soc: 'ph-circuit',
  vapt: 'ph-hex',
  cti: 'ph-hex',
  grc: '',
  eng: 'ph-circuit',
}

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${siteUrl}/solutions/${params.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}/solutions/${params.slug}`,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image' as const,
      images: [ogImage.url],
    },
  }
}

export function generateStaticParams() {
  return servicesList.map((s) => ({ slug: s.slug }))
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()

  const bgCls = bgVariant[params.slug] ?? ''
  const photoCls = photoBg[params.slug] ?? 'ph-bg-1'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.metaTitle,
    description: service.metaDescription,
    url: `${siteUrl}/solutions/${params.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Primesoc',
      url: siteUrl,
    },
    areaServed: { '@type': 'Continent', name: 'Africa' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
        <div className={`ph-bg ${photoCls}`} aria-hidden="true" />
        <div className="ph-fade" aria-hidden="true" />
        {bgCls && <div className={bgCls} aria-hidden="true" />}
        <div className="ph-orb-1" aria-hidden="true" />
        <div className="ph-orb-2" aria-hidden="true" />
        <div className="ph-inner">
          <span className="ph-badge">{service.badge}</span>
          <h1 className="ph-title">
            {service.title}<br />
            <span className="grad-text">{service.subtitle}</span>
          </h1>
          <p className="ph-sub">{service.description}</p>
          <Link href="/contact" className="btn-primary" style={{ marginTop: 8 }}>
            Talk to an Expert
          </Link>
        </div>
      </div>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="features-heading">
        <div className="container">
          <span className="label-mono">Core Capabilities</span>
          <h2 className="section-heading" id="features-heading" style={{ marginTop: 12 }}>
            What We <span className="grad-text">Deliver</span>
          </h2>

          <div className="features-grid">
            {service.features.map((feat, i) => (
              <div key={feat.title} className="feat-card">
                <div className="feat-card-body">
                  <div className="feat-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="feat-title">{feat.title}</div>
                  <p className="feat-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        tag="Get Started"
        title="Ready to Get Started?"
        body="Speak to one of our security specialists about your specific needs."
        btnLabel="Request a Consultation"
      />
    </>
  )
}
