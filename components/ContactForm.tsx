'use client'

import { useState } from 'react'
import { z } from 'zod'
import { toast } from 'sonner'

const SERVICE_OPTIONS = [
  'Security Operations (SOC)',
  'Vulnerability Assessment & PT',
  'Cyber Threat Intelligence',
  'GRC & Compliance',
  'Security Engineering',
  'Partnership / Collaboration',
  'General Inquiry',
] as const

const COLLAB_TYPES = [
  'Individual Contributor',
  'Agency / Consultancy',
  'Technology Partner',
  'Reseller / Channel Partner',
  'Academic / Research',
  'Other',
] as const

const baseSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  service: z.enum(SERVICE_OPTIONS),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const collabSchema = baseSchema.extend({
  service: z.literal('Partnership / Collaboration'),
  collab_type: z.enum(COLLAB_TYPES),
  collab_detail: z.string().optional(),
})

type FieldErrors = Partial<Record<string, string>>

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [service, setService] = useState<string>(SERVICE_OPTIONS[0])
  const [errors, setErrors] = useState<FieldErrors>({})
  const [fields, setFields] = useState({
    name: '', email: '', company: '', message: '', collab_type: COLLAB_TYPES[0], collab_detail: '',
  })

  const isCollab = service === 'Partnership / Collaboration'

  const set = (key: keyof typeof fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields(f => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors(err => ({ ...err, [key]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const raw = { ...fields, service, ...(isCollab ? {} : { collab_type: undefined, collab_detail: undefined }) }
    const schema = isCollab ? collabSchema : baseSchema
    const result = schema.safeParse(raw)

    if (!result.success) {
      const flat = result.error.flatten().fieldErrors
      setErrors(Object.fromEntries(Object.entries(flat).map(([k, v]) => [k, v?.[0]])))
      return
    }

    setLoading(true)
    setErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setFields({ name: '', email: '', company: '', message: '', collab_type: COLLAB_TYPES[0], collab_detail: '' })
        setService(SERVICE_OPTIONS[0])
        toast.success("Message sent — we'll respond within 2 business hours.", { duration: 6000 })
      } else {
        throw new Error(data.error || 'Submission failed')
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : 'Something went wrong — email us directly at info@primesoc.africa',
        { duration: 8000 }
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name" type="text" name="name" placeholder="John Doe"
          autoComplete="name" value={fields.name} onChange={set('name')}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined}
        />
        {errors.name && <p className="form-field-error" id="err-name">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email" type="email" name="email" placeholder="john@company.com"
          autoComplete="email" value={fields.email} onChange={set('email')}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined}
        />
        {errors.email && <p className="form-field-error" id="err-email">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="company">{isCollab ? 'Organisation / Company' : 'Company'}</label>
        <input
          id="company" type="text" name="company"
          placeholder={isCollab ? 'Your organisation or N/A' : 'Your Organisation'}
          autoComplete="organization" value={fields.company} onChange={set('company')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">How Can We Help?</label>
        <select
          id="service" name="service" value={service}
          onChange={e => { setService(e.target.value); setErrors({}) }}
        >
          {SERVICE_OPTIONS.map(o => <option key={o}>{o}</option>)}
        </select>
      </div>

      {isCollab && (
        <div className="form-nested">
          <div className="form-nested-line" aria-hidden="true" />
          <div className="form-nested-fields">
            <div className="form-group">
              <label htmlFor="collab_type">Type of Collaboration</label>
              <select id="collab_type" name="collab_type" value={fields.collab_type} onChange={set('collab_type')}>
                {COLLAB_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="collab_detail">What would you like to explore?</label>
              <input
                id="collab_detail" type="text" name="collab_detail"
                placeholder="e.g. joint GTM, referral programme, integration..."
                value={fields.collab_detail} onChange={set('collab_detail')}
              />
            </div>
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message" name="message"
          placeholder={isCollab ? 'Tell us about yourself and what you have in mind...' : 'Tell us about your security needs...'}
          value={fields.message} onChange={set('message')}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && <p className="form-field-error" id="err-message">{errors.message}</p>}
      </div>

      <button
        type="submit" className="btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
