'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const solutions = [
  { href: '/solutions/soc',  title: 'Security Operations (SOC)' },
  { href: '/solutions/vapt', title: 'Vulnerability Assessment & PT' },
  { href: '/solutions/cti',  title: 'Cyber Threat Intelligence' },
  { href: '/solutions/grc',  title: 'GRC & Compliance' },
  { href: '/solutions/eng',  title: 'Security Engineering' },
]

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [mobileSolOpen, setMobileSolOpen] = useState(false)
  const pathname  = usePathname()
  const mobileRef = useRef<HTMLDivElement>(null)
  const hambRef   = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    setMobileSolOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        mobileOpen &&
        mobileRef.current && !mobileRef.current.contains(e.target as Node) &&
        hambRef.current  && !hambRef.current.contains(e.target as Node)
      ) setMobileOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

  const router = useRouter()
  const isHome = pathname === '/'

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const isSolutionsActive = solutions.some(s => pathname.startsWith(s.href))

  return (
    <>
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="Primesoc home">
          <Image src="/logo.png" alt="Primesoc logo" width={34} height={34} priority style={{ width: 'auto', height: '34px' }} />
          <span className="nav-logo-text">PRIMESOC</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          <li>
            <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          </li>

          {/* Solutions simple dropdown */}
          <li className="dropdown">
            <button
              className={`dropdown-trigger${isSolutionsActive ? ' nav-solutions-active' : ''}`}
              aria-haspopup="menu"
            >
              Solutions
              <svg className="dropdown-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>
            <div className="dropdown-menu sol-dropdown" role="menu">
              {solutions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`sol-item${isActive(s.href) ? ' active' : ''}`}
                  role="menuitem"
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link href="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </li>
        </ul>

        {/* Right: CTA + hamburger */}
        <div className="nav-right" style={{ justifySelf: 'end' }}>
          <Link href="/contact" className="nav-cta">Get Started</Link>
          {!isHome && (
            <button
              className="nav-back"
              onClick={() => router.back()}
              aria-label="Go back"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
          )}
          <button
            ref={hambRef}
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        ref={mobileRef}
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <div className="mobile-divider" />
        <button
          className="mobile-solutions-label"
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.58rem' }}
          onClick={() => setMobileSolOpen(v => !v)}
        >
          Solutions {mobileSolOpen ? '▲' : '▼'}
        </button>
        {mobileSolOpen && solutions.map(s => (
          <Link key={s.href} href={s.href} className="mobile-sub">{s.title}</Link>
        ))}
        <div className="mobile-divider" />
        <Link href="/about"    className={isActive('/about')    ? 'active' : ''}>About</Link>
        <Link href="/careers"  className={isActive('/careers')  ? 'active' : ''}>Careers</Link>
        <Link href="/contact"  className={isActive('/contact')  ? 'active' : ''}>Contact</Link>
        <Link href="/contact" className="mobile-nav-cta">Get Started</Link>
      </div>
    </>
  )
}
