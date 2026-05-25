import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, servicesList } from '@/lib/services'
import { CTASection } from '@/components/CTASection'
import {
  IconDatabase, IconSearch, IconAlert, IconRadar, IconActivity, IconFileText,
  IconNetwork, IconGlobe, IconCloud, IconSmartphone, IconUserCheck,
  IconEye, IconTarget, IconBarChart,
  IconClipboard, IconBook, IconAward, IconUsers,
  IconGear, IconLink, IconKey, IconTrendingUp,
  IconShield, IconCpu, IconCheckCircle, IconBriefcase,
} from '@/components/icons'
import type { JSX } from 'react'

const iconMap: Record<string, JSX.Element> = {
  siem: <IconDatabase />,
  hunt: <IconSearch />,
  incident: <IconAlert />,
  edr: <IconRadar />,
  alert: <IconActivity />,
  report: <IconFileText />,
  network: <IconNetwork />,
  web: <IconGlobe />,
  cloud: <IconCloud />,
  mobile: <IconSmartphone />,
  social: <IconUserCheck />,
  darkweb: <IconEye />,
  actor: <IconTarget />,
  ioc: <IconDatabase />,
  strategic: <IconBarChart />,
  industry: <IconBriefcase />,
  breach: <IconAlert />,
  iso: <IconClipboard />,
  regulatory: <IconCheckCircle />,
  risk: <IconAward />,
  policy: <IconBook />,
  training: <IconUsers />,
  vendor: <IconLink />,
  architecture: <IconShield />,
  integration: <IconLink />,
  soar: <IconCpu />,
  iam: <IconKey />,
  dashboard: <IconTrendingUp />,
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
    alternates: { canonical: `https://primesoc.africa/solutions/${params.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://primesoc.africa/solutions/${params.slug}`,
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

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
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
          <span className="label-mono">// Core Capabilities</span>
          <h2 className="section-heading" id="features-heading" style={{ marginTop: 12 }}>
            What We <span className="grad-text">Deliver</span>
          </h2>

          <div className="features-grid">
            {service.features.map((feat) => (
              <div key={feat.title} className="feat-card">
                <div className="feat-icon" aria-hidden="true">
                  {iconMap[feat.iconKey] ?? <IconShield />}
                </div>
                <div className="feat-title">{feat.title}</div>
                <p className="feat-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        tag="// Get Started"
        title="Ready to Get Started?"
        body="Speak to one of our security specialists about your specific needs."
        btnLabel="Request a Consultation"
      />
    </>
  )
}
