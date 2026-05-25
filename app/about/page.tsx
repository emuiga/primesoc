import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldVisual } from '@/components/ShieldVisual'
import { CTASection } from '@/components/CTASection'
import { IconTarget, IconGlobe, IconAward } from '@/components/icons'

export const metadata: Metadata = {
  title: "About Primesoc | East Africa's Premier Cybersecurity MSSP",
  description:
    "Primesoc is East Africa's premier Managed Security Services Provider, founded by security experts to deliver enterprise-grade cyber defence for organisations in Kenya and beyond.",
  alternates: { canonical: 'https://primesoc.africa/about' },
  openGraph: {
    title: "About Primesoc | East Africa's Premier Cybersecurity MSSP",
    description:
      'Built by security experts. Delivering intelligence-driven cyber defence from Nairobi, Kenya.',
    url: 'https://primesoc.africa/about',
  },
}

const mvv = [
  {
    icon: <IconTarget />,
    title: 'Mission',
    desc: 'To empower organisations with proactive, intelligence-led cybersecurity services that protect critical assets, ensure operational continuity, and build lasting digital resilience.',
  },
  {
    icon: <IconGlobe />,
    title: 'Vision',
    desc: 'To be the most trusted cybersecurity partner in Africa — setting the standard for managed security services through innovation, expertise, and relentless vigilance.',
  },
  {
    icon: <IconAward />,
    title: 'Values',
    desc: 'Integrity in every engagement. Excellence in every solution. Transparency with every client. We operate with the highest ethical standards in everything we do.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
        <div className="ph-hex" aria-hidden="true" />
        <div className="ph-orb-1" aria-hidden="true" />
        <div className="ph-orb-2" aria-hidden="true" />
        <div className="ph-inner">
          <span className="ph-badge">// Who We Are</span>
          <h1 className="ph-title">
            Defending the Digital Frontier<br />
            with <span className="grad-text">Intelligence &amp; Precision</span>
          </h1>
          <p className="ph-sub">
            Primesoc is East Africa&#39;s premier Managed Security Services
            Provider, built by security experts who understand that cyber
            threats don&#39;t sleep — and neither do we.
          </p>
        </div>
      </div>

      {/* ── OUR STORY ────────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-layout">
            <div className="about-copy">
              <span className="label-mono">// Our Story</span>
              <h2 className="section-heading" id="story-heading" style={{ marginTop: 12 }}>
                Built by <span className="grad-text">Security Experts</span>
              </h2>
              <p>
                Primesoc was founded on a simple conviction: organisations
                deserve enterprise-grade security without the enterprise-grade
                complexity. Our team of certified analysts, ethical hackers, and
                compliance specialists brings decades of combined experience from
                leading global security firms.
              </p>
              <p>
                Headquartered in Nairobi, Kenya, we serve clients across East
                Africa and beyond — providing intelligence-driven security that
                scales with your business.
              </p>

              <div className="about-stats" style={{ marginTop: 32 }}>
                <div className="about-stat">
                  <span className="about-stat-num">50+</span>
                  <span className="about-stat-lbl">Clients Protected</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">10+</span>
                  <span className="about-stat-lbl">Security Experts</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-num">5+</span>
                  <span className="about-stat-lbl">Years Experience</span>
                </div>
              </div>
            </div>
            <ShieldVisual />
          </div>

          {/* ── MVV ──────────────────────────────────────────────── */}
          <div style={{ marginTop: 80 }}>
            <span className="label-mono">// Our Foundation</span>
            <h2 className="section-heading" style={{ marginTop: 12, marginBottom: 0 }}>
              Mission, Vision &amp; <span className="grad-text">Values</span>
            </h2>

            <div className="mvv-grid">
              {mvv.map((card) => (
                <div key={card.title} className="mvv-card">
                  <div className="mvv-icon" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        tag="// Work With Us"
        title="Want to Work With Us?"
        body="Let's build a more secure digital future together. Partner with East Africa's premier MSSP."
        btnLabel="Get In Touch"
        secondaryHref="/careers"
        secondaryLabel="View Careers"
      />
    </>
  )
}
