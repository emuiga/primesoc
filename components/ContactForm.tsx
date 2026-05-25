'use client'

import { useState, useRef } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        formRef.current?.reset()
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'An error occurred — please email us directly.'
      )
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      {/* Web3Forms — replace YOUR_ACCESS_KEY_HERE with your key from web3forms.com */}
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
      <input type="hidden" name="subject" value="New Primesoc Website Enquiry" />
      <input type="hidden" name="from_name" value="Primesoc Website" />

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          required
          autoComplete="name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@company.com"
          required
          autoComplete="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          placeholder="Your Organisation"
          autoComplete="organization"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">Service Interest</label>
        <select id="service" name="service">
          <option>Security Operations (SOC)</option>
          <option>Vulnerability Assessment &amp; PT</option>
          <option>Cyber Threat Intelligence</option>
          <option>GRC &amp; Compliance</option>
          <option>Security Engineering</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your security needs..."
          required
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={status === 'loading'}
      >
        {status === 'loading'
          ? 'Sending…'
          : status === 'success'
          ? 'Message Sent'
          : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="form-status success">
          // We&#39;ll respond within 2 business hours.
        </p>
      )}
      {status === 'error' && (
        <p className="form-status error">// Error: {errorMsg}</p>
      )}
    </form>
  )
}
