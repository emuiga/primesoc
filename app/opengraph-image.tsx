import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'
export const alt = 'Primesoc Africa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const globeBuffer = await readFile(path.join(process.cwd(), 'public/images/hero-globe.jpg'))
  const globeBase64 = `data:image/jpeg;base64,${globeBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: '#05060f',
        }}
      >
        {/* Globe — full bleed, centred */}
        <img
          src={globeBase64}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.55,
          }}
        />

        {/* Dark overlay so text pops */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(5,6,15,0.45)',
          }}
        />

        {/* Text */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0,
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: -4,
              fontFamily: 'sans-serif',
            }}
          >
            PRIMESOC
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 500,
              color: '#ffffff',
              letterSpacing: 8,
              fontFamily: 'sans-serif',
              marginTop: 8,
            }}
          >
            AFRICA
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
