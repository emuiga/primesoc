import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'
export const alt = 'Primesoc — East Africa\'s Premier Managed Security Services Provider'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const globeBuffer = await readFile(path.join(process.cwd(), 'public/images/hero-globe.jpg'))
  const globeBase64 = `data:image/jpeg;base64,${globeBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          background: '#05060f',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Globe image — right side */}
        <img
          src={globeBase64}
          style={{
            position: 'absolute',
            right: -40,
            top: -40,
            width: 720,
            height: 720,
            objectFit: 'cover',
            opacity: 0.6,
          }}
        />

        {/* Gradient fade over globe — left to right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, #05060f 30%, rgba(5,6,15,0.85) 55%, rgba(5,6,15,0.2) 100%)',
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(5,6,15,0.7) 0%, transparent 50%)',
          }}
        />

        {/* Blue glow — top left */}
        <div
          style={{
            position: 'absolute',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(8,145,178,0.28) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: -120,
            left: -80,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 0,
            position: 'relative',
            zIndex: 2,
            padding: '60px 72px',
            maxWidth: 680,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'monospace',
              fontSize: 13,
              letterSpacing: 3,
              color: '#0891b2',
              textTransform: 'uppercase',
              background: 'rgba(8,145,178,0.08)',
              border: '1px solid rgba(8,145,178,0.35)',
              padding: '6px 16px',
              borderRadius: 4,
              alignSelf: 'flex-start',
              marginBottom: 28,
            }}
          >
            // East Africa&apos;s #1 MSSP
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 0.95,
              letterSpacing: -3,
              marginBottom: 8,
            }}
          >
            PRIMESOC
          </div>

          {/* Sub brand */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: '#0891b2',
              letterSpacing: 1,
              marginBottom: 24,
            }}
          >
            AFRICA
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 20,
              color: '#c7d3ea',
              lineHeight: 1.55,
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            Intelligence-driven cyber defence — SOC monitoring, penetration testing, threat intelligence &amp; GRC compliance for East African businesses.
          </div>

          {/* Service tags */}
          <div style={{ display: 'flex', gap: 10 }}>
            {['SOC', 'VAPT', 'CTI', 'GRC', 'Engineering'].map((tag) => (
              <div
                key={tag}
                style={{
                  fontFamily: 'monospace',
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: '#0891b2',
                  background: 'rgba(8,145,178,0.1)',
                  border: '1px solid rgba(8,145,178,0.25)',
                  padding: '4px 12px',
                  borderRadius: 3,
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: 72,
            fontFamily: 'monospace',
            fontSize: 13,
            letterSpacing: 2.5,
            color: 'rgba(199,211,234,0.35)',
            textTransform: 'uppercase',
          }}
        >
          primesoc.africa
        </div>
      </div>
    ),
    { ...size }
  )
}
