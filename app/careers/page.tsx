import type { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/CTASection'
import { IconRocket, IconGlobe, IconUsers, IconZap } from '@/components/icons'

export const metadata: Metadata = {
  title: "Careers | Join Primesoc's Cybersecurity Team",
  description:
    "Join East Africa's leading cybersecurity MSSP. We're hiring SOC analysts, penetration testers, threat intelligence analysts, GRC consultants, and security engineers.",
  alternates: { canonical: 'https://primesoc.africa/careers' },
  openGraph: {
    title: "Careers | Join Primesoc's Cybersecurity Team",
    description:
      'Work alongside elite security professionals. Build your career defending organisations across Africa.',
    url: 'https://primesoc.africa/careers',
  },
}

const perks = [
  {
    icon: <IconRocket />,
    title: 'Growth & Learning',
    desc: 'Continuous training, certifications (CISSP, CEH, OSCP), and real-world experience on complex security challenges.',
  },
  {
    icon: <IconGlobe />,
    title: 'Meaningful Impact',
    desc: 'Protect critical infrastructure and organisations that matter — your work directly defends people and businesses.',
  },
  {
    icon: <IconUsers />,
    title: 'Collaborative Culture',
    desc: 'Work alongside some of the best security minds in East Africa in an environment built on trust and collaboration.',
  },
  {
    icon: <IconZap />,
    title: 'Cutting-Edge Tech',
    desc: 'Access to the latest tools, platforms, and technologies in threat detection, response, and security engineering.',
  },
]

const jobs = [
  { title: 'SOC Analyst (Tier 2)', dept: 'Security Operations', type: 'Full-Time', location: 'Nairobi, Kenya' },
  { title: 'Penetration Tester', dept: 'VAPT', type: 'Full-Time', location: 'Nairobi, Kenya' },
  { title: 'Threat Intelligence Analyst', dept: 'CTI', type: 'Full-Time', location: 'Nairobi, Kenya' },
  { title: 'GRC Consultant', dept: 'Governance & Compliance', type: 'Full-Time', location: 'Nairobi, Kenya' },
  { title: 'Security Engineer', dept: 'Engineering', type: 'Full-Time', location: 'Nairobi, Kenya' },
]

export default function CareersPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
        <div className="ph-circuit" aria-hidden="true" />
        <div className="ph-orb-1" aria-hidden="true" />
        <div className="ph-orb-2" aria-hidden="true" />
        <div className="ph-inner">
          <span className="ph-badge">// Join the Team</span>
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
          <span className="label-mono">// Why Primesoc</span>
          <h2 className="section-heading" id="perks-heading" style={{ marginTop: 12 }}>
            Why Work <span className="grad-text">With Us?</span>
          </h2>

          <div className="perks-grid">
            {perks.map((p) => (
              <div key={p.title} className="perk-card">
                <div className="perk-icon" aria-hidden="true">
                  {p.icon}
                </div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* ── JOBS ─────────────────────────────────────────────── */}
          <div id="open-roles" style={{ marginTop: 80 }}>
            <span className="label-mono">// Open Positions</span>
            <h2 className="section-heading" style={{ marginTop: 12 }}>
              Current <span className="grad-text">Opportunities</span>
            </h2>

            <div className="jobs-list" role="list">
              {jobs.map((job) => (
                <div key={job.title} className="job-card" role="listitem">
                  <div className="job-info">
                    <h4>{job.title}</h4>
                    <div className="job-tags">
                      <span className="job-tag tag-dept">{job.dept}</span>
                      <span className="job-tag tag-type">{job.type}</span>
                      <span className="job-tag tag-loc">{job.location}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-sm">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        tag="// Open Application"
        title="Don't See the Right Role?"
        body="We're always open to talented people. Send us your profile and we'll reach out when the right opportunity opens."
        btnLabel="Send Open Application"
      />
    </>
  )
}
