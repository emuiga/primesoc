import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/CTASection'
import { siteUrl, ogImage } from '@/lib/config'

export const metadata: Metadata = {
  title: "Careers | Join Primesoc's Cybersecurity Team",
  description:
    "Join East Africa's leading cybersecurity MSSP. We're hiring SOC analysts, penetration testers, threat intelligence analysts, GRC consultants, and security engineers.",
  alternates: { canonical: `${siteUrl}/careers` },
  openGraph: {
    title: "Careers | Join Primesoc's Cybersecurity Team",
    description:
      'Work alongside elite security professionals. Build your career defending organisations across Africa.',
    url: `${siteUrl}/careers`,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImage.url],
  },
}

const perks = [
  {
    icon: '/images/mission.png',
    title: 'Growth & Learning',
    desc: 'Continuous training, certifications (CISSP, CEH, OSCP), and real-world experience on complex security challenges.',
  },
  {
    icon: '/images/planet-earth.png',
    title: 'Meaningful Impact',
    desc: 'Protect critical infrastructure and organisations that matter — your work directly defends people and businesses.',
  },
  {
    icon: '/images/cultural-diversity.png',
    title: 'Collaborative Culture',
    desc: 'Work alongside some of the best security minds in East Africa in an environment built on trust and collaboration.',
  },
  {
    icon: '/images/project-management.png',
    title: 'Cutting-Edge Tech',
    desc: 'Access to the latest tools, platforms, and technologies in threat detection, response, and security engineering.',
  },
]

export default function CareersPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
        <div className="ph-bg ph-bg-4" aria-hidden="true" />
        <div className="ph-fade" aria-hidden="true" />
        <div className="ph-circuit" aria-hidden="true" />
        <div className="ph-orb-1" aria-hidden="true" />
        <div className="ph-orb-2" aria-hidden="true" />
        <div className="ph-inner">
          <span className="ph-badge">Join the Team</span>
          <h1 className="ph-title">
            Defend the Future.<br />
            <span className="grad-text">Build Your Career.</span>
          </h1>
          <p className="ph-sub">
            Join a team of elite cybersecurity professionals committed to making
            cyberspace safer. We&#39;re always looking for passionate, talented
            people.
          </p>
          <Link href="#open-roles" className="btn-primary">
            View Open Roles
          </Link>
        </div>
      </div>

      {/* ── PERKS ────────────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="perks-heading">
        <div className="container">
          <span className="label-mono">Why Primesoc</span>
          <h2 className="section-heading" id="perks-heading" style={{ marginTop: 12 }}>
            Why Work <span className="grad-text">With Us?</span>
          </h2>

          <div className="perks-grid">
            {perks.map((p) => (
              <div key={p.title} className="perk-card">
                <Image src={p.icon} alt="" width={76} height={76} className="perk-card-img" aria-hidden="true" />
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ── OPEN ROLES ────────────────────────────────────────── */}
          <div id="open-roles" style={{ marginTop: 80 }}>
            <h2 className="section-heading">
              Current <span className="grad-text">Opportunities</span>
            </h2>
            <div style={{ marginTop: 32, padding: '40px 32px', background: 'var(--surface-1)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: '#ffffff', fontSize: '0.95rem', lineHeight: 1.7 }}>
                No open positions right now — but we&apos;re always growing.<br />
                Send an open application below and we&apos;ll be in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        tag="Open Application"
        title="Don't See the Right Role?"
        body="We're always open to talented people. Send us your profile and we'll reach out when the right opportunity opens."
        btnLabel="Send Open Application"
      />
    </>
  )
}
