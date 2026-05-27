import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, company, service, collab_type, collab_detail, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const collabSection =
      service === 'Partnership / Collaboration'
        ? `\nCollaboration Type: ${collab_type ?? '—'}\nCollaboration Detail: ${collab_detail ?? '—'}`
        : ''

    await resend.emails.send({
      from: 'Primesoc Website <onboarding@resend.dev>',
      to: ['peterwambua025@gmail.com'],
      replyTo: email,
      subject: `New Enquiry: ${service ?? 'General Inquiry'} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company ?? '—'}`,
        `Service: ${service ?? '—'}`,
        collabSection,
        `\nMessage:\n${message}`,
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] resend error', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
