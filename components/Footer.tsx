import Link from 'next/link'
import Image from 'next/image'
import { IconLinkedin, IconTwitterX, IconYoutube } from './icons'

const solutions = [
  { href: '/solutions/soc', label: 'Security Operations' },
  { href: '/solutions/vapt', label: 'VAPT' },
  { href: '/solutions/cti', label: 'Threat Intelligence' },
  { href: '/solutions/grc', label: 'GRC & Compliance' },
  { href: '/solutions/eng', label: 'Security Engineering' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms & Conditions' },
]

export function Footer() {
  return (
    <footer className="footer-root">
      {/* Background image */}
      <div className="footer-bg" aria-hidden="true" />
      <div className="footer-overlay" aria-hidden="true" />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Image
              src="/logo.png"
              alt="Primesoc"
              width={160}
              height={44}
              className="footer-logo"
            />
            <p>
              Next-generation Managed Security Services Provider delivering
              intelligence-driven cyber defence for modern enterprises across
              East Africa and beyond.
            </p>
            <div className="social-row" style={{ marginTop: 24 }}>
              <a
                href="https://www.linkedin.com/company/primesoc"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Primesoc on LinkedIn"
              >
                <IconLinkedin />
              </a>
              <a
                href="https://twitter.com/primesoc"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Primesoc on X (Twitter)"
              >
                <IconTwitterX />
              </a>
              <a
                href="https://youtube.com/@primesoc"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Primesoc on YouTube"
              >
                <IconYoutube />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-col">
            <h5>Solutions</h5>
            <ul>
              {solutions.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><span className="footer-contact-line">Nairobi, Kenya</span></li>
              <li><a href="mailto:info@primesoc.africa">info@primesoc.africa</a></li>
              <li><a href="tel:+254714873020">+254 714 873 020</a></li>
            </ul>
            <div className="footer-cert" style={{ marginTop: 28 }}>
              <span>24/7 Security Operations</span>
              <span>ISO 27001 Aligned</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Primesoc Limited. All rights reserved.
          </span>
          <span className="footer-copy" style={{ opacity: 0.5 }}>
            Registered in Kenya &mdash; Nairobi
          </span>
        </div>
      </div>
    </footer>
  )
}
