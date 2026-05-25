import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'
import { IconMapPin, IconMail, IconPhone, IconClock } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contact Primesoc | Get a Security Consultation',
  description:
    'Contact Primesoc for a cybersecurity consultation. SOC monitoring, VAPT, CTI, GRC — our experts are available 24/7. Nairobi, Kenya.',
  alternates: { canonical: 'https://primesoc.africa/contact' },
  openGraph: {
    title: 'Contact Primesoc | Get a Security Consultation',
    description: 'Speak to our security experts today. We respond within 2 business hours.',
    url: 'https://primesoc.africa/contact',
  },
}

const contactInfo = [
  {
    icon: <IconMapPin />,
    title: 'Location',
    lines: ['Nairobi, Kenya', 'East Africa'],
  },
  {
    icon: <IconMail />,
    title: 'Email',
    lines: ['info@primesoc.africa', 'pwambua@primesoc.africa'],
  },
  {
    icon: <IconPhone />,
    title: 'Phone',
    lines: ['+254 714 873 020', 'Available 24/7 for emergencies'],
  },
  {
    icon: <IconClock />,
    title: 'Response Time',
    lines: ['We respond within 2 business hours.', 'Critical incidents: under 5 minutes.'],
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
        <div className="ph-orb-1" aria-hidden="true" />
        <div className="ph-orb-2" aria-hidden="true" />
        <div className="ph-inner">
          <span className="ph-badge">// Get In Touch</span>
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

      {/* ── CONTACT GRID ─────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div>
              <span className="label-mono">// Send a Message</span>
              <h2 className="section-heading" style={{ marginTop: 12, fontSize: '1.8rem' }}>
                Start the <span className="grad-text">Conversation</span>
              </h2>
              <div style={{ marginTop: 28 }}>
                <ContactForm />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="label-mono">// Our Details</span>
              <h2 className="section-heading" style={{ marginTop: 12, fontSize: '1.8rem' }}>
                Find <span className="grad-text">Us Here</span>
              </h2>
              <div className="contact-info-list" style={{ marginTop: 28 }}>
                {contactInfo.map((info) => (
                  <div key={info.title} className="contact-info-item">
                    <div className="contact-info-icon" aria-hidden="true">
                      {info.icon}
                    </div>
                    <div>
                      <h4>{info.title}</h4>
                      <p>
                        {info.lines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < info.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
