import Link from 'next/link'

interface CTASectionProps {
  tag?: string
  title: string
  body: string
  btnLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function CTASection({
  tag = '// Get Protected',
  title,
  body,
  btnLabel = 'Request a Consultation',
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <div className="cta-wrap">
      {tag && <span className="label-mono" style={{ marginBottom: 18, display: 'inline-block' }}>{tag}</span>}
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="cta-buttons">
        <Link href="/contact" className="btn-primary">
          {btnLabel}
        </Link>
        {secondaryHref && secondaryLabel && (
          <Link href={secondaryHref} className="btn-ghost">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  )
}
