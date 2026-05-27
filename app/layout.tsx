import type { Metadata } from 'next'
import { Exo_2, JetBrains_Mono, Rajdhani } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { Toaster } from 'sonner'

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-sub',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://primesoc.vercel.app')
const ogImage = {
  url: `${siteUrl}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: 'Primesoc Africa — East Africa\'s Premier Managed Security Services Provider',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Primesoc | #1 Managed Security Services Provider in Kenya & Africa',
    template: '%s | Primesoc',
  },
  description:
    "Primesoc is East Africa's leading MSSP delivering 24/7 SOC monitoring, penetration testing (VAPT), cyber threat intelligence, GRC compliance, and security engineering. Protecting businesses in Kenya, Nairobi, and across Africa.",
  keywords: [
    'cybersecurity company Kenya',
    'MSSP Africa',
    'managed security services provider Nairobi',
    'SOC as a service Kenya',
    'penetration testing Kenya',
    'VAPT Africa',
    'cyber threat intelligence East Africa',
    'GRC compliance Kenya',
    'ISO 27001 Kenya',
    'security operations center Nairobi',
    'cybersecurity Nairobi',
    'incident response Kenya',
    'ethical hacking Kenya',
    'network security Africa',
    'information security Kenya',
  ],
  authors: [{ name: 'Primesoc' }],
  creator: 'Primesoc',
  publisher: 'Primesoc',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteUrl,
    siteName: 'Primesoc',
    title: 'Primesoc | Managed Security Services Provider — Kenya & Africa',
    description:
      "24/7 SOC monitoring, VAPT, cyber threat intelligence, GRC compliance and security engineering. East Africa's premier cybersecurity MSSP.",
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@primesoc',
    creator: '@primesoc',
    title: 'Primesoc | MSSP Kenya & Africa',
    description:
      'Enterprise-grade managed cybersecurity services — SOC, VAPT, CTI, GRC — for businesses in Kenya and across Africa.',
    images: [ogImage.url],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  other: {
    'geo.region': 'KE',
    'geo.placename': 'Nairobi, Kenya',
    'geo.position': '-1.286389;36.817223',
    ICBM: '-1.286389, 36.817223',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Primesoc',
  description:
    "East Africa's leading Managed Security Services Provider (MSSP) offering 24/7 SOC monitoring, penetration testing, cyber threat intelligence, GRC compliance, and security engineering.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  telephone: '+254714873020',
  email: 'info@primesoc.africa',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: [
    { '@type': 'Country', name: 'Kenya' },
    { '@type': 'Country', name: 'Uganda' },
    { '@type': 'Country', name: 'Tanzania' },
    { '@type': 'Country', name: 'Ethiopia' },
    { '@type': 'Continent', name: 'Africa' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cybersecurity Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Security Operations Center (SOC)',
          description: '24/7 managed SOC with SIEM, threat hunting, and incident response.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Vulnerability Assessment & Penetration Testing (VAPT)',
          description: 'Network, web app, cloud, and mobile penetration testing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cyber Threat Intelligence (CTI)',
          description: 'Dark web monitoring, IOC feeds, and threat actor profiling.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'GRC & Compliance',
          description:
            'ISO 27001, Kenya Data Protection Act, PCI-DSS compliance management.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cyber Security Engineering',
          description:
            'Security architecture design, SOAR automation, and tool integration.',
        },
      },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/primesoc',
    'https://twitter.com/primesoc',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${exo2.variable} ${jetBrainsMono.variable} ${rajdhani.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="dot-grid" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Toaster
          position="top-right"
          offset={{ top: 76 }}
          theme="dark"
          toastOptions={{
            style: {
              background: '#09091a',
              border: '1px solid rgba(186,214,247,0.1)',
              color: '#e8edf7',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.3px',
            },
          }}
        />
      </body>
    </html>
  )
}
