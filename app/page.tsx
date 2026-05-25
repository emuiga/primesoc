import type { Metadata } from 'next'
import Link from 'next/link'
import { SocConsole } from '@/components/SocConsole'
import { ShieldVisual } from '@/components/ShieldVisual'
import {
  IconShield,
  IconSearch,
  IconGlobe,
  IconClipboard,
  IconGear,
  IconTarget,
  IconEye,
  IconLayers,
  IconCpu,
  IconScan,
  IconLock,
  IconRadar,
  IconTrendingUp,
  IconArrowRight,
} from '@/components/icons'

export const metadata: Metadata = {
  title: 'Primesoc | #1 Managed Security Services Provider in Kenya & Africa',
  description:
    "Primesoc is East Africa's leading MSSP delivering 24/7 SOC monitoring, penetration testing (VAPT), cyber threat intelligence, GRC compliance, and security engineering.",
  alternates: { canonical: 'https://primesoc.africa' },
}

const tickerItems = [
  '24/7 SOC Monitoring',
  'Advanced Threat Detection',
  'Zero Trust Architecture',
  'Incident Response',
  'Vulnerability Management',
  'Compliance & GRC',
  'Threat Intelligence',
  'Penetration Testing',
]

const bentoCards = [
  {
    href: '/solutions/soc',
    cls: 'bento-soc',
    icon: <IconShield />,
    title: 'Security Operations',
    desc: '24/7 SOC with real-time threat monitoring, SIEM management, incident response, and threat hunting — your dedicated security nerve centre.',
    featured: true,
  },
  {
    href: '/solutions/vapt',
    cls: 'bento-vapt',
    icon: <IconSearch />,
    title: 'VAPT',
    desc: 'Comprehensive vulnerability assessments and penetration testing across your entire attack surface.',
  },
  {
    href: '/solutions/cti',
    cls: 'bento-cti',
    icon: <IconGlobe />,
    title: 'Cyber Threat Intel',
    desc: 'Proactive threat intelligence to stay ahead of adversaries with actionable, contextualised data.',
  },
  {
    href: '/solutions/grc',
    cls: 'bento-grc',
    icon: <IconClipboard />,
    title: 'GRC & Compliance',
    desc: 'Governance, Risk & Compliance aligned to ISO 27001, SOC 2, NIST, and Kenya Data Protection Act.',
  },
  {
    href: '/solutions/eng',
    cls: 'bento-eng',
    icon: <IconGear />,
    title: 'Security Engineering',
    desc: 'Security architecture design, SOAR automation, and tool integration for robust, resilient infrastructure.',
  },
]

const whyFeatures = [
  {
    icon: <IconTarget />,
    title: 'Proactive Defence',
    desc: 'We hunt threats before they reach you — not after the breach.',
  },
  {
    icon: <IconEye />,
    title: 'Expert-Led SOC',
    desc: 'Certified analysts with deep expertise across frameworks and industries.',
  },
  {
    icon: <IconLayers />,
    title: 'Custom Integrations',
    desc: 'Seamless integration with your existing security stack and tools.',
  },
  {
    icon: <IconCpu />,
    title: 'Intelligence-Driven',
    desc: 'Every decision backed by real-time threat intelligence and analytics.',
  },
]

const processSteps = [
  {
    num: '01',
    icon: <IconScan />,
    title: 'Assess',
    desc: 'Deep-dive security assessment of your environment — mapping risks, vulnerabilities, and gaps across your entire attack surface.',
  },
  {
    num: '02',
    icon: <IconLock />,
    title: 'Secure',
    desc: 'Implement layered defences, access controls, and hardened security architecture tailored to your threat profile.',
  },
  {
    num: '03',
    icon: <IconRadar />,
    title: 'Monitor',
    desc: 'Continuous 24/7 monitoring across your environment with SIEM, EDR, and behavioural analytics.',
  },
  {
    num: '04',
    icon: <IconTrendingUp />,
    title: 'Improve',
    desc: 'Ongoing optimisation based on threat intelligence, post-incident reviews, and performance benchmarks.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── TICKER ─────────────────────────────────────────────────── */}
      <div style={{ paddingTop: 72 }}>
        <div className="ticker-bar">
          <div className="ticker-track" aria-hidden="true">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="ticker-item">
                <span className="ticker-sep" aria-hidden="true">///</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">
        <div className="hero-orb-1" aria-hidden="true" />
        <div className="hero-orb-2" aria-hidden="true" />
        <div className="hero-orb-3" aria-hidden="true" />

        <div className="hero-inner">
          {/* Left column */}
          <div>
            <div className="hero-label">
              <span className="label-pill">
                <span className="label-pill-dot" aria-hidden="true" />
                Intelligence-Driven Security
              </span>
            </div>

            <h1 className="hero-title">
              Advanced Cyber<br />
              Defence for a{' '}
              <span className="grad-text">Digital World</span>
            </h1>

            <p className="hero-sub">
              Primesoc delivers enterprise-grade managed security services —
              monitoring, detecting, and responding to threats before they impact
              your business.
            </p>

            <div className="hero-actions">
              <Link href="/solutions/soc" className="btn-primary">
                Explore Solutions
                <IconArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Talk to an Expert
              </Link>
            </div>

            <div className="hero-proof" aria-label="Key metrics">
              <div className="hero-proof-stat">
                <span className="hero-proof-num">24/7</span>
                <span className="hero-proof-label">Monitoring</span>
              </div>
              <div className="hero-proof-divider" aria-hidden="true" />
              <div className="hero-proof-stat">
                <span className="hero-proof-num">&lt;5 min</span>
                <span className="hero-proof-label">Response</span>
              </div>
              <div className="hero-proof-divider" aria-hidden="true" />
              <div className="hero-proof-stat">
                <span className="hero-proof-num">99.9%</span>
                <span className="hero-proof-label">Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Right column — SOC console */}
          <SocConsole />
        </div>
      </section>

      {/* ── STATS GRID ─────────────────────────────────────────────── */}
      <div className="stats-grid" role="list" aria-label="Key statistics">
        {[
          { num: '500+', label: 'Threats Neutralised' },
          { num: '<5 min', label: 'Mean Response Time' },
          { num: '50+', label: 'Clients Protected' },
          { num: '99.9%', label: 'Uptime Guaranteed' },
        ].map((s) => (
          <div key={s.label} className="stat-item" role="listitem">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── SOLUTIONS BENTO ────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="solutions-heading">
        <div className="container">
          <span className="label-mono">// Our Solutions</span>
          <h2 className="section-heading" id="solutions-heading" style={{ marginTop: 12 }}>
            Comprehensive{' '}
            <span className="grad-text">Security Services</span>
          </h2>
          <p className="section-sub">
            End-to-end managed security tailored to protect your organisation
            from the evolving threat landscape.
          </p>

          <div className="bento-grid">
            {bentoCards.map((card) => (
              <Link key={card.href} href={card.href} className={`bento-card ${card.cls}`}>
                <div className="bento-card-icon" aria-hidden="true">
                  {card.icon}
                </div>
                <div className="bento-card-title">{card.title}</div>
                <p className="bento-card-desc">{card.desc}</p>

                {card.featured && (
                  <div className="bento-soc-visual" aria-hidden="true">
                    <div className="bento-grid-lines" />
                    <div className="bento-scan-line" />
                    <div className="bento-data-point" style={{ top: '28%', left: '58%' }} />
                    <div className="bento-data-point" style={{ top: '60%', left: '25%', animationDelay: '0.9s' }} />
                    <div className="bento-data-point" style={{ top: '42%', left: '80%', animationDelay: '1.6s' }} />
                    <div className="bento-data-point" style={{ top: '74%', left: '65%', animationDelay: '0.4s' }} />
                  </div>
                )}

                <div className="bento-card-link">
                  Learn More <IconArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PRIMESOC ───────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(26,95,168,0.05), transparent)' }}
        aria-labelledby="why-heading"
      >
        <div className="container">
          <div className="why-layout">
            <div>
              <span className="label-mono">// Why Choose Us</span>
              <h2 className="section-heading" id="why-heading" style={{ marginTop: 12 }}>
                Why <span className="grad-text">Primesoc?</span>
              </h2>
              <p className="section-sub">
                We combine intelligence, expertise, and cutting-edge technology
                to deliver security that adapts to your organisation.
              </p>
              <ul className="why-features" style={{ marginTop: 32 }}>
                {whyFeatures.map((f) => (
                  <li key={f.title} className="why-feature-card">
                    <div className="why-feature-icon" aria-hidden="true">
                      {f.icon}
                    </div>
                    <div className="why-feature-content">
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <ShieldVisual />
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="process-heading">
        <div className="container">
          <span className="label-mono">// How We Work</span>
          <h2 className="section-heading" id="process-heading" style={{ marginTop: 12 }}>
            Our <span className="grad-text">Security Process</span>
          </h2>
          <p className="section-sub">
            A proven four-phase methodology that takes you from risk to resilience.
          </p>

          <div className="process-timeline">
            {processSteps.map((step) => (
              <div key={step.num} className="timeline-step">
                <div className="timeline-node" aria-hidden="true">
                  {step.icon}
                  <span className="timeline-num">{step.num}</span>
                </div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <div className="cta-wrap">
        <span className="label-mono" style={{ marginBottom: 18, display: 'inline-block' }}>
          // Get Protected
        </span>
        <h2>Ready to Secure Your Organisation?</h2>
        <p>
          Join organisations across East Africa and beyond who trust Primesoc
          to protect their critical assets 24/7.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="btn-primary">
            Request a Consultation
            <IconArrowRight size={16} />
          </Link>
          <Link href="/solutions/soc" className="btn-ghost">
            Explore Solutions
          </Link>
        </div>
      </div>
    </>
  )
}
