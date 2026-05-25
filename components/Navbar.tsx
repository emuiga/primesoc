'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  IconShield,
  IconSearch,
  IconGlobe,
  IconClipboard,
  IconGear,
  IconChevronDown,
  IconLinkedin,
  IconTwitterX,
} from './icons'

const solutions = [
  { href: '/solutions/soc', label: 'Security Operations (SOC)', icon: <IconShield /> },
  { href: '/solutions/vapt', label: 'Vulnerability Assessment & PT', icon: <IconSearch /> },
  { href: '/solutions/cti', label: 'Cyber Threat Intelligence', icon: <IconGlobe /> },
  { href: '/solutions/grc', label: 'GRC & Compliance', icon: <IconClipboard /> },
  { href: '/solutions/eng', label: 'Security Engineering', icon: <IconGear /> },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const pathname = usePathname()
  const mobileNavRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Lock body scroll when mobile nav is open
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    // Close mobile nav on route change
    setMobileOpen(false)
    setMobileSolutionsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        mobileOpen &&
        mobileNavRef.current &&
        !mobileNavRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="Primesoc home">
          <Image
            src="/logo.png"
            alt="Primesoc"
            width={42}
            height={42}
            priority
            style={{ width: 'auto', height: '42px' }}
          />
          <span className="nav-logo-text">PRIMESOC</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" role="list">
          <li>
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
          </li>

          <li className="dropdown">
            <button aria-haspopup="true" aria-expanded="false">
              Solutions <IconChevronDown size={12} style={{ display: 'inline', marginLeft: 4 }} />
            </button>
            <div className="dropdown-menu" role="menu">
              {solutions.map((s) => (
                <Link key={s.href} href={s.href} className="dropdown-item" role="menuitem">
                  <span className="dropdown-icon" aria-hidden="true">
                    {s.icon}
                  </span>
                  {s.label}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link href="/careers" className={isActive('/careers') ? 'active' : ''}>
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-cta">
              Get Started
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          ref={hamburgerRef}
          className={`hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        ref={mobileNavRef}
        className={`mobile-nav${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <Link href="/" className={isActive('/') ? 'active' : ''}>
          Home
        </Link>
        <div className="mobile-divider" />

        <span className="mobile-solutions-label">Solutions</span>

        {solutions.map((s) => (
          <Link key={s.href} href={s.href} className="mobile-sub">
            {s.label}
          </Link>
        ))}

        <div className="mobile-divider" />
        <Link href="/about" className={isActive('/about') ? 'active' : ''}>
          About
        </Link>
        <Link href="/careers" className={isActive('/careers') ? 'active' : ''}>
          Careers
        </Link>
        <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
          Contact
        </Link>
        <Link href="/contact" className="mobile-nav-cta">
          Get Started
        </Link>
      </div>
    </>
  )
}
