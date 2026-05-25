import Image from 'next/image'

export function ShieldVisual() {
  return (
    <div className="shield-visual">
      <div className="shield-rings">
        <div className="ring ring-1" aria-hidden="true" />
        <div className="ring ring-2" aria-hidden="true" />
        <div className="ring ring-3" aria-hidden="true" />
        <div className="shield-core">
          <Image
            src="/logo.png"
            alt="Primesoc"
            width={68}
            height={68}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}
