/**
 * ICON SYSTEM
 * These are inline SVG placeholder icons.
 * See FLATICON_ICONS.md at the project root for the full list of
 * recommended Flaticon replacements and how to integrate them.
 */

import type { CSSProperties } from 'react'

interface IconProps {
  className?: string
  size?: number
  stroke?: string
  style?: CSSProperties
}

const defaults = (props: IconProps) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: props.size ?? 20,
  height: props.size ?? 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: props.stroke ?? 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  style: props.style,
  strokeLinejoin: 'round' as const,
  className: props.className,
})

// ── NAV / BRAND ──────────────────────────────────────────────────────────────
export function IconShield(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

export function IconSearch(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export function IconGlobe(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function IconClipboard(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  )
}

export function IconGear(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

// ── WHY PRIMESOC ─────────────────────────────────────────────────────────────
export function IconTarget(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

export function IconEye(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function IconLayers(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

export function IconCpu(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 9V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4M9 15v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4M15 9h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4M9 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4" />
    </svg>
  )
}

// ── PROCESS ──────────────────────────────────────────────────────────────────
export function IconScan(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect x="7" y="7" width="10" height="10" rx="1" />
    </svg>
  )
}

export function IconLock(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export function IconRadar(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 6a6 6 0 0 0-6 6" />
      <path d="M12 10a2 2 0 0 0-2 2" />
      <path d="m22 2-10 10" />
    </svg>
  )
}

export function IconTrendingUp(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function IconChevronDown(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

// ── CONTACT ──────────────────────────────────────────────────────────────────
export function IconMapPin(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconMail(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.88a16 16 0 0 0 6.29 6.29l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function IconClock(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

// ── CAREERS PERKS ────────────────────────────────────────────────────────────
export function IconRocket(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export function IconUsers(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function IconZap(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

// ── SOCIAL ───────────────────────────────────────────────────────────────────
export function IconLinkedin(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function IconTwitterX(p: IconProps) {
  // X (Twitter) logo shape
  return (
    <svg {...defaults(p)} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        stroke="none"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.06 2.25h6.977l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
      />
    </svg>
  )
}

export function IconYoutube(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95 29 29 0 0 0 .46-5.28 29 29 0 0 0-.46-5.45z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  )
}

// ── SERVICE FEATURES ─────────────────────────────────────────────────────────
export function IconActivity(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

export function IconAlert(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="m10.29 3.86-8.28 14.18A1 1 0 0 0 2.87 20h16.26a1 1 0 0 0 .87-1.5L11.71 4.29a1 1 0 0 0-1.42-.43z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

export function IconFileText(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

export function IconCloud(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

export function IconSmartphone(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

export function IconUserCheck(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  )
}

export function IconNetwork(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <rect x="1" y="16" width="6" height="6" rx="1" />
      <rect x="17" y="16" width="6" height="6" rx="1" />
      <path d="M12 8v4M6 16v-4h12v4" />
    </svg>
  )
}

export function IconKey(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  )
}

export function IconDatabase(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

export function IconBook(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

export function IconBarChart(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

export function IconLink(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

export function IconAward(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

export function IconCheckCircle(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

export function IconBriefcase(p: IconProps) {
  return (
    <svg {...defaults(p)}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}
