import type { Metadata } from 'next'
import { siteUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Primesoc',
  description:
    'Terms and Conditions governing the use of Primesoc cybersecurity services. Compliant with Kenyan law including the Data Protection Act 2019 and Computer Misuse and Cybercrimes Act 2018.',
  alternates: { canonical: `${siteUrl}/terms` },
}

export default function TermsPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <div className="page-header">
        <div className="ph-bg ph-bg-5" aria-hidden="true" />
        <div className="ph-fade" aria-hidden="true" />
        <div className="ph-orb-1" aria-hidden="true" />
        <div className="ph-orb-2" aria-hidden="true" />
        <div className="ph-inner">
          <span className="ph-badge">Legal</span>
          <h1 className="ph-title">
            Terms &amp; <span className="grad-text">Conditions</span>
          </h1>
          <p className="ph-sub">
            Last updated: May 2025. These Terms govern your use of Primesoc&apos;s
            services and website.
          </p>
        </div>
      </div>

      {/* ── CONTENT ──────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container">
          <div className="legal-body">

            <h2>1. Introduction</h2>
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of
              the website located at <strong>primesoc.africa</strong> and the managed cybersecurity
              services (&ldquo;Services&rdquo;) provided by <strong>Primesoc Limited</strong>
              (&ldquo;Primesoc&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
              a company incorporated under the laws of Kenya.
            </p>
            <p>
              By accessing our website, requesting a consultation, or engaging our Services, you
              (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) agree to be bound by these Terms. If you
              do not agree, please do not use our website or Services.
            </p>
            <p>
              These Terms are governed by and construed in accordance with the laws of Kenya,
              including but not limited to:
            </p>
            <ul>
              <li>The <strong>Data Protection Act, 2019</strong> (Cap. 411C)</li>
              <li>The <strong>Computer Misuse and Cybercrimes Act, 2018</strong> (No. 5 of 2018)</li>
              <li>The <strong>Kenya Information and Communications Act</strong> (Cap. 411A)</li>
              <li>The <strong>Consumer Protection Act, 2012</strong></li>
              <li>The <strong>Law of Contract Act</strong> (Cap. 23)</li>
            </ul>

            <h2>2. Services</h2>
            <p>
              Primesoc provides managed cybersecurity services including, but not limited to:
              Security Operations Centre (SOC) monitoring, Vulnerability Assessment and
              Penetration Testing (VAPT), Cyber Threat Intelligence (CTI), Governance Risk
              and Compliance (GRC), and Security Engineering.
            </p>
            <p>
              The specific scope, deliverables, timelines, and commercial terms for any engagement
              are defined in a separate Service Level Agreement (SLA) or Statement of Work (SOW)
              executed by both parties. In the event of a conflict between these Terms and an SLA
              or SOW, the SLA or SOW shall prevail.
            </p>

            <h2>3. Authorisation and Lawful Use</h2>
            <p>
              All penetration testing, vulnerability assessments, and active security testing
              activities are conducted only under explicit written authorisation from the Client.
              Unauthorised access to computer systems is a criminal offence under <strong>Section 16
              of the Computer Misuse and Cybercrimes Act, 2018</strong>. Primesoc strictly adheres
              to ethical and legal boundaries in all engagements.
            </p>
            <p>
              You warrant that you have the legal authority and all necessary permissions to engage
              Primesoc to test or monitor the systems, networks, and data covered under your
              engagement. Primesoc accepts no liability for engagements conducted on systems for
              which the Client lacked proper authorisation.
            </p>

            <h2>4. Data Protection and Privacy</h2>
            <p>
              Primesoc is committed to full compliance with the <strong>Data Protection Act, 2019</strong>
              and the regulations issued thereunder by the <strong>Office of the Data Protection
              Commissioner (ODPC)</strong>.
            </p>
            <p>In our capacity as a data processor (where applicable), Primesoc will:</p>
            <ul>
              <li>Process personal data only on documented instructions from the Client (data controller).</li>
              <li>Ensure that persons authorised to process personal data are bound by confidentiality obligations.</li>
              <li>Implement appropriate technical and organisational security measures as required under <strong>Section 41</strong> of the Data Protection Act.</li>
              <li>Assist the Client in fulfilling its obligations regarding data subject rights (access, rectification, erasure, objection).</li>
              <li>Delete or return all personal data upon termination of the engagement, at the Client&apos;s election.</li>
              <li>Make available all information necessary to demonstrate compliance with data protection obligations.</li>
            </ul>
            <p>
              For full details on how we handle personal data collected through our website (contact
              forms, cookies, analytics), please refer to our{' '}
              <strong>Privacy Policy</strong>.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              Both parties agree to treat as confidential all non-public information received from
              the other party in connection with the Services (&ldquo;Confidential Information&rdquo;).
              This includes, but is not limited to, security findings, vulnerability reports,
              network architecture details, credentials, and business information.
            </p>
            <p>
              Confidentiality obligations survive termination of the engagement for a period of
              <strong> five (5) years</strong>, except where disclosure is required by law or
              regulatory authority. Primesoc will not disclose Client security findings to any
              third party without prior written consent.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All proprietary tools, methodologies, processes, frameworks, and software developed
              or used by Primesoc in delivering Services remain the exclusive intellectual property
              of Primesoc. Deliverables (reports, documentation) produced specifically for the
              Client are licensed to the Client for internal use only.
            </p>
            <p>
              The Primesoc name, logo, and brand assets are registered trademarks. You may not
              reproduce or use them without prior written permission.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable Kenyan law:
            </p>
            <ul>
              <li>
                Primesoc&apos;s total aggregate liability arising out of or in connection with
                any engagement shall not exceed the total fees paid by the Client under the
                relevant SOW in the twelve (12) months preceding the claim.
              </li>
              <li>
                Primesoc shall not be liable for any indirect, incidental, consequential, special,
                or punitive damages, including but not limited to loss of data, loss of revenue,
                or business interruption.
              </li>
              <li>
                Primesoc does not guarantee that security testing will identify every vulnerability
                or that security measures will prevent all incidents. Cybersecurity services reduce
                risk but cannot eliminate it entirely.
              </li>
            </ul>

            <h2>8. Indemnification</h2>
            <p>
              The Client agrees to indemnify, defend, and hold harmless Primesoc, its officers,
              employees, and subcontractors from and against any claims, damages, or expenses
              (including reasonable legal fees) arising from: (a) the Client&apos;s breach of these
              Terms; (b) the Client&apos;s lack of proper authorisation for systems tested; or (c)
              the Client&apos;s violation of any applicable law.
            </p>

            <h2>9. Payment Terms</h2>
            <p>
              Payment terms for Services are set out in the applicable SOW or SLA. Unless otherwise
              agreed, invoices are due within <strong>thirty (30) days</strong> of the invoice date.
              Late payments may attract interest at the rate prescribed under the{' '}
              <strong>Central Bank of Kenya Act</strong> or as specified in the SOW. Primesoc
              reserves the right to suspend Services for overdue accounts after providing seven (7)
              days written notice.
            </p>

            <h2>10. Termination</h2>
            <p>
              Either party may terminate an engagement by providing written notice as specified in
              the applicable SOW. Upon termination, the Client remains liable for fees for Services
              rendered up to the termination date. Primesoc may immediately terminate or suspend
              Services if the Client breaches these Terms or engages in unlawful conduct.
            </p>

            <h2>11. Website Use</h2>
            <p>
              Access to <strong>primesoc.africa</strong> is provided on an &ldquo;as is&rdquo; basis.
              You agree not to:
            </p>
            <ul>
              <li>Use the website for any unlawful purpose or in contravention of the Computer Misuse and Cybercrimes Act, 2018.</li>
              <li>Attempt to gain unauthorised access to any part of our website, servers, or infrastructure.</li>
              <li>Transmit any malicious code, spam, or unsolicited communications through our contact forms.</li>
              <li>Scrape, harvest, or reproduce website content without express written permission.</li>
            </ul>

            <h2>12. Incident Reporting</h2>
            <p>
              In the event of a personal data breach discovered during the course of our Services,
              Primesoc will notify the Client without undue delay (and in any event within{' '}
              <strong>72 hours</strong> of becoming aware), consistent with obligations under the
              Data Protection Act, 2019. The Client remains responsible for notifying the Office of
              the Data Protection Commissioner where required by law.
            </p>

            <h2>13. Dispute Resolution</h2>
            <p>
              Any dispute arising out of or in connection with these Terms shall first be referred
              to good-faith negotiation between the parties. If unresolved within thirty (30) days,
              disputes shall be referred to mediation administered by the{' '}
              <strong>Nairobi Centre for International Arbitration (NCIA)</strong>. If mediation
              fails, disputes shall be finally resolved by arbitration under the NCIA Rules, with
              the seat of arbitration in Nairobi, Kenya.
            </p>
            <p>
              Nothing in this clause prevents either party from seeking urgent injunctive or
              declaratory relief from the Kenyan courts.
            </p>

            <h2>14. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of the Republic of Kenya. Subject to the dispute
              resolution clause above, both parties submit to the non-exclusive jurisdiction of the
              courts of Kenya.
            </p>

            <h2>15. Amendments</h2>
            <p>
              Primesoc reserves the right to amend these Terms at any time. Material changes will
              be communicated via our website and/or email. Continued use of our Services after
              the effective date of any change constitutes acceptance of the revised Terms.
            </p>

            <h2>16. Contact</h2>
            <p>
              For questions regarding these Terms or to report a compliance concern, contact us at:
            </p>
            <address>
              <strong>Primesoc Limited</strong><br />
              Nairobi, Kenya<br />
              Email: <a href="mailto:info@primesoc.africa">info@primesoc.africa</a><br />
              Phone: <a href="tel:+254714873020">+254 716 157 495</a>
            </address>

          </div>
        </div>
      </section>
    </>
  )
}
