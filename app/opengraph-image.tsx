import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Primesoc — Managed Security Services Provider'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050C18',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(30,100,180,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(30,100,180,0.07) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Blue orb left */}
        <div
          style={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26,95,168,0.35) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: -100,
            left: -100,
          }}
        />

        {/* Teal orb right */}
        <div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,173,181,0.22) 0%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: -50,
            right: -50,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          {/* Badge */}
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: 14,
              letterSpacing: 3,
              color: '#1EADB5',
              textTransform: 'uppercase',
              background: 'rgba(30,173,181,0.08)',
              border: '1px solid rgba(30,173,181,0.3)',
              padding: '6px 18px',
              borderRadius: 4,
            }}
          >
            // Managed Security Services Provider
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: '#F0F6FF',
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            PRIMESOC
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: '#7A9BBE',
              maxWidth: 680,
              lineHeight: 1.5,
            }}
          >
            Intelligence-Driven Cyber Defence for East Africa & Beyond
          </div>

          {/* Services row */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 12,
            }}
          >
            {['SOC', 'VAPT', 'CTI', 'GRC', 'Engineering'].map((tag) => (
              <div
                key={tag}
                style={{
                  fontFamily: 'monospace',
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: '#2ECAD3',
                  background: 'rgba(30,173,181,0.1)',
                  border: '1px solid rgba(30,173,181,0.2)',
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
            fontFamily: 'monospace',
            fontSize: 14,
            letterSpacing: 2,
            color: '#3A567A',
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
