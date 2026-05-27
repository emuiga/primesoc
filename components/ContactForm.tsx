'use client'

import { useState, useRef } from 'react'
import { toast } from 'sonner'

const SERVICE_OPTIONS = [
  'Security Operations (SOC)',
  'Vulnerability Assessment & PT',
  'Cyber Threat Intelligence',
  'GRC & Compliance',
  'Security Engineering',
  'Partnership / Collaboration',
  'General Inquiry',
]

const COLLAB_TYPES = [
  'Individual Contributor',
  'Agency / Consultancy',
  'Technology Partner',
  'Reseller / Channel Partner',
  'Academic / Research',
  'Other',
]

export function ContactForm() {
  const [loading, setLoading]   = useState(false)
  const [service, setService]   = useState(SERVICE_OPTIONS[0])
  const formRef = useRef<HTMLFormElement>(null)

  const isCollab = service === 'Partnership / Collaboration'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        formRef.current?.reset()
        setService(SERVICE_OPTIONS[0])
        toast.success("Message sent — we'll respond within 2 business hours.", {
          duration: 6000,
        })
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : 'Something went wrong — email us directly at info@primesoc.africa',
        { duration: 8000 }
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''} />
      <input type="hidden" name="subject" value="New Primesoc Website Enquiry" />
      <input type="hidden" name="from_name" value="Primesoc Website" />

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name" type="text" name="name"
          placeholder="John Doe" required autoComplete="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email" type="email" name="email"
          placeholder="john@company.com" required autoComplete="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">{isCollab ? 'Organisation / Company' : 'Company'}</label>
        <input
          id="company" type="text" name="company"
          placeholder={isCollab ? 'Your organisation or N/A' : 'Your Organisation'}
          autoComplete="organization"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">How Can We Help?</label>
        <select
          id="service" name="service"
          value={service}
          onChange={e => setService(e.target.value)}
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
              <select id="collab_type" name="collab_type">
                {COLLAB_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="collab_detail">What would you like to explore?</label>
              <input
                id="collab_detail" type="text" name="collab_detail"
                placeholder="e.g. joint GTM, referral programme, integration..."
              />
            </div>
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message" name="message"
          placeholder={
            isCollab
              ? 'Tell us about yourself and what you have in mind...'
              : 'Tell us about your security needs...'
          }
          required
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
