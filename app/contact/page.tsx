import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { siteUrl, ogImage } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact Primesoc | Get a Security Consultation',
  description:
    'Contact Primesoc for a cybersecurity consultation. SOC monitoring, VAPT, CTI, GRC — our experts are available 24/7. Nairobi, Kenya.',
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: 'Contact Primesoc | Get a Security Consultation',
    description: 'Speak to our security experts today. We respond within 2 business hours.',
    url: `${siteUrl}/contact`,
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogImage.url],
  },
}

const contactStrip = [
  {
    label: 'Location',
    value: 'Nairobi, Kenya',
    sub: 'East Africa',
  },
  {
    label: 'Email',
    value: 'info [at] primesoc.africa',
    sub: 'pwambua [at] primesoc.africa',
  },
  {
    label: 'Phone',
    value: '+254 714 873 020',
    sub: 'Available 24/7 for emergencies',
  },
  {
    label: 'Response Time',
    value: '< 2 business hours',
    sub: 'Critical incidents: under 5 min',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
        <div className="ph-bg ph-bg-3" aria-hidden="true" />
        <div className="ph-fade" aria-hidden="true" />
        <div className="ph-orb-1" aria-hidden="true" />
        <div className="ph-orb-2" aria-hidden="true" />
        <div className="ph-inner">
          <span className="ph-badge">Get In Touch</span>
          <h1 className="ph-title">
            Let&#39;s Build Your<br />
            <span className="grad-text">Security Strategy</span>
          </h1>
          <p className="ph-sub">
            Talk to our security experts today. Whether you need a full SOC, a
            VAPT assessment, or just want to understand your risk exposure —
            we&#39;re here.
          </p>
        </div>
      </div>

      {/* ── CALENDLY ─────────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="schedule-heading">
        <div className="container">
          <span className="label-mono">Book a Meeting</span>
          <h2 className="section-heading" id="schedule-heading" style={{ marginTop: 10, marginBottom: 28 }}>
            Schedule a <span className="grad-text">Consultation</span>
          </h2>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <iframe
              src="https://calendly.com/peterwambua025/30min?hide_gdpr_banner=1&background_color=05060f&text_color=c7d3ea&primary_color=0891b2"
              width="100%"
              height="700"
              loading="lazy"
              title="Schedule a consultation with Primesoc"
              style={{ display: 'block', border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: 0 }} aria-labelledby="form-heading">
        <div className="container">
          <div className="contact-form-wrap">
            <span className="label-mono">Send a Message</span>
            <h2 className="section-heading" id="form-heading" style={{ marginTop: 10, marginBottom: 32 }}>
              Start the <span className="grad-text">Conversation</span>
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FIND US ───────────────────────────────────────────────── */}
      <section className="section-pad" style={{ paddingTop: 0 }} aria-labelledby="find-us-heading">
        <div className="container">
          <span className="label-mono">Find Us</span>
          <h2 className="section-heading" id="find-us-heading" style={{ marginTop: 10, marginBottom: 0 }}>
            Reach <span className="grad-text">Us Here</span>
          </h2>
        </div>
        <div className="contact-strip" role="list" aria-label="Contact information">
          {contactStrip.map((item) => (
            <div key={item.label} className="contact-strip-item" role="listitem">
              <span className="contact-strip-label">{item.label}</span>
              <span className="contact-strip-value">{item.value}</span>
              <span className="contact-strip-sub">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
