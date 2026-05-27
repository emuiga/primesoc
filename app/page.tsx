import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { IconArrowRight } from '@/components/icons'

import { siteUrl } from '@/lib/config'

export const metadata: Metadata = {
  description:
    "24/7 SOC monitoring, penetration testing, threat intelligence, GRC and security engineering. Primesoc is East Africa's premier cybersecurity MSSP, protecting businesses in Kenya and across Africa.",
  alternates: { canonical: siteUrl },
}

const bentoCards = [
  {
    href: '/solutions/soc',
    cls: 'bento-soc',
    title: 'Security Operations',
    desc: '24/7 SOC with real-time threat monitoring, SIEM management, incident response, and threat hunting — your dedicated security nerve centre.',
    illustration: '/images/Security-amico.svg',
  },
  {
    href: '/solutions/vapt',
    cls: 'bento-vapt',
    title: 'Vulnerability Assessment & Pen Testing',
    desc: 'Comprehensive vulnerability assessments and penetration testing across your entire attack surface.',
    illustration: '/images/Fingerprint-bro.svg',
  },
  {
    href: '/solutions/cti',
    cls: 'bento-cti',
    title: 'Cyber Threat Intelligence',
    desc: 'Proactive threat intelligence to stay ahead of adversaries with actionable, contextualised data.',
    illustration: '/images/Security-bro.svg',
  },
  {
    href: '/solutions/grc',
    cls: 'bento-grc',
    title: 'GRC & Compliance',
    desc: 'Governance, Risk & Compliance aligned to ISO 27001, SOC 2, NIST, and Kenya Data Protection Act.',
    illustration: '/images/Secure data-amico.svg',
  },
  {
    href: '/solutions/eng',
    cls: 'bento-eng',
    title: 'Security Engineering',
    desc: 'Security architecture design, SOAR automation, and tool integration for robust, resilient infrastructure.',
    illustration: '/images/All the data-bro.svg',
  },
]

const whyFeatures = [
  { illustration: '/images/Endpoint-amico.svg',     title: 'Proactive Defence',    desc: 'We hunt threats before they reach you — not after the breach. Active threat hunting, 24/7.' },
  { illustration: '/images/Fingerprint-cuate.svg',  title: 'Expert-Led SOC',       desc: 'Certified analysts with deep expertise across frameworks and industries — human-led, always on.' },
  { illustration: '/images/Security-cuate.svg',     title: 'Custom Integrations',  desc: 'Seamless integration with your existing security stack, tools, and cloud environments.' },
  { illustration: '/images/Fingerprint-amico.svg',  title: 'Intelligence-Driven',  desc: 'Every decision backed by real-time threat intelligence, IOC feeds, and behavioural analytics.' },
]

const processSteps = [
  { num: '01', color: '#FF9505', title: 'Assess',  desc: 'Deep-dive security assessment of your environment — mapping risks, vulnerabilities, and gaps across your entire attack surface.' },
  { num: '02', color: '#1A5FA8', title: 'Secure',  desc: 'Implement layered defences, access controls, and hardened security architecture tailored to your threat profile.' },
  { num: '03', color: '#22c55e', title: 'Monitor', desc: 'Continuous 24/7 monitoring across your environment with SIEM, EDR, and behavioural analytics.' },
  { num: '04', color: '#06b6d4', title: 'Improve', desc: 'Ongoing optimisation based on threat intelligence, post-incident reviews, and performance benchmarks.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        {/* Background image */}
        <div className="hero-bg" aria-hidden="true">
          <Image src="/images/background1.jpg" alt="" fill priority fetchPriority="high" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>

        {/* Globe — right panel on desktop, full bg on mobile */}
        <div className="hero-img-panel" aria-hidden="true">
          <Image src="/images/hero-globe.jpg" alt="" fill priority className="hero-logo-mark" sizes="65vw" />
        </div>

        {/* Grain */}
        <div className="hero-grain" aria-hidden="true" />

        {/* Dark overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Copy */}
        <div className="hero-copy">
          <h1 className="hero-title">
            <span>Africa&apos;s First Line of</span>
            <em>Cyber Defense</em>
          </h1>

          <p className="hero-sub">
            Primesoc delivers enterprise-grade managed security services.
            Monitoring, detecting, and responding to threats before they
            impact your business.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Get Protected
              <IconArrowRight size={15} />
            </Link>
            <Link href="/solutions/soc" className="btn-ghost">
              Explore Solutions
            </Link>
          </div>
        </div>

      </section>

      {/* ── VALUE BANNER ───────────────────────────────────────────── */}
      <div className="value-banner-wrap">
        <div className="value-banner">
          <div className="value-banner-copy">
            <p className="value-banner-headline">Your threat landscape never sleeps. Neither do we.</p>
            <p>Enterprise-grade managed security. Proactive, intelligent, and built for African businesses.</p>
          </div>
          <Link href="/contact" className="value-banner-cta" aria-label="Contact Us">
            <span className="value-banner-btn">
              Contact Us <IconArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>

      {/* ── SOLUTIONS BENTO ────────────────────────────────────────── */}
      <section className="section-pad section-bg section-bg-1" aria-labelledby="solutions-heading">
        <div className="container">
          <span className="label-mono">Solutions</span>
          <h2 className="section-heading" id="solutions-heading" style={{ marginTop: 10 }}>
            Comprehensive{' '}
            <span className="accent-text">Security Services</span>
          </h2>
          <p className="section-sub">
            End-to-end managed security tailored to protect your organisation
            from the evolving threat landscape.
          </p>

          <div className="bento-grid">
            {bentoCards.map((card) => (
              <Link key={card.href} href={card.href} className={`bento-card ${card.cls}`}>

                {/* Text — left */}
                <div className="bento-card-body">
                  <div className="bento-card-title">{card.title}</div>
                  <p className="bento-card-desc">{card.desc}</p>
                  <div className="bento-card-link">
                    Learn More <IconArrowRight size={13} />
                  </div>
                </div>

                {/* Image — right half, vibrant, fills the panel */}
                <div className="bento-card-img" aria-hidden="true">
                  <Image
                    src={card.illustration}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                </div>

              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PRIMESOC ───────────────────────────────────────────── */}
      <section className="section-pad section-bg section-bg-3" style={{ borderTop: '1px solid var(--border)' }} aria-labelledby="why-heading">
        <div className="container">
          <span className="label-mono">Why Primesoc</span>
          <h2 className="section-heading" id="why-heading" style={{ marginTop: 10 }}>
            Why <span className="accent-text">Primesoc?</span>
          </h2>
          <p className="section-sub">
            Intelligence, expertise, and technology working together
            to deliver security that adapts to your organisation.
          </p>

          <div className="why-grid">
            {whyFeatures.map((f) => (
              <div key={f.title} className="bento-card why-card">
                <div className="bento-card-body">
                  <div className="bento-card-title">{f.title}</div>
                  <p className="bento-card-desc">{f.desc}</p>
                </div>
                <div className="bento-card-img" aria-hidden="true">
                  <Image src={f.illustration} alt="" fill loading="lazy" sizes="(max-width: 768px) 100vw, 300px" style={{ objectFit: 'contain', objectPosition: 'center' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────── */}
      <section className="section-pad section-bg section-bg-5" style={{ borderTop: '1px solid var(--border)' }} aria-labelledby="process-heading">
        <div className="container">
          <span className="label-mono">How We Work</span>
          <h2 className="section-heading" id="process-heading" style={{ marginTop: 10 }}>
            Our <span className="accent-text">Security Process</span>
          </h2>
          <p className="section-sub">
            A proven four-phase methodology that takes you from risk to resilience.
          </p>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card">
                <span className="process-num" style={{ color: step.color }}>{step.num}</span>
                <div className="process-card-accent" style={{ background: step.color }} />
                <div className="process-card-title">{step.title}</div>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <div className="cta-wrap">
        <div className="cta-content">
          <span className="label-mono" style={{ marginBottom: 16, display: 'inline-block' }}>
            Get Protected
          </span>
          <h2>Ready to Secure Your Organisation?</h2>
          <p>
            Join organisations across East Africa and beyond who trust Primesoc
            to protect their critical assets — around the clock.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn-primary">
              Request a Consultation
              <IconArrowRight size={15} />
            </Link>
            <Link href="/solutions/soc" className="btn-ghost">
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
