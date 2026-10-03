import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PERSON, CONTACT, IMAGES } from '../../data/siteData'
import './ContactConsole.css'

export default function ContactConsole() {
  const reduced = useReducedMotion()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(CONTACT.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const contactLinks = [
    {
      id: 'email',
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      isExternal: false,
      isEmail: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: CONTACT.linkedinDisplay,
      href: CONTACT.linkedin,
      isExternal: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: CONTACT.phone,
      href: CONTACT.whatsapp,
      isExternal: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 'cv',
      label: 'Curriculum Vitae',
      value: 'Zohaib-Saleem-CV.pdf',
      href: '/cv/Zohaib-Saleem-CV.pdf',
      isExternal: false,
      isDownload: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      ),
    },
  ]

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-30px' },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  })

  return (
    <section
      className="section contact-signature-section"
      id="contact"
      aria-label="Contact Zohaib Saleem"
    >
      <div className="container contact-signature-container">

        {/* ── Closing Signature Composition ─────────────────── */}
        <motion.div className="contact-signature-card" {...fadeUp(0.05)}>

          {/* 1. Integrated Circular Portrait */}
          <div className="contact-portrait-aura">
            <div className="portrait-ring">
              <img
                src={IMAGES.profileCircle}
                alt="Zohaib Saleem"
                className="portrait-img"
                loading="lazy"
                width={128}
                height={128}
              />
            </div>
          </div>

          {/* 2. Header & Closing Eyebrow */}
          <div className="contact-identity-block">
            <div className="contact-eyebrow">
              <span className="contact-eyebrow-pip" />
              <span>LET&apos;S CONNECT</span>
            </div>

            <h2 className="contact-name">{PERSON.name}</h2>
            <p className="contact-candidate-tag">CAF Candidate</p>
            <p className="contact-disciplines">Accounting × Data × AI</p>
          </div>

          {/* 3. Four Direct Functional Contact Links */}
          <div className="contact-actions-grid" role="group" aria-label="Direct contact links">
            {contactLinks.map((item) => (
              <div key={item.id} className="contact-action-item">
                <a
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  download={item.isDownload ? 'Zohaib-Saleem-CV.pdf' : undefined}
                  className="contact-action-link"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="action-icon-box" aria-hidden="true">
                    {item.icon}
                  </div>

                  <div className="action-info">
                    <span className="action-label">{item.label}</span>
                    <span className="action-val">{item.value}</span>
                  </div>

                  <span className="action-arrow" aria-hidden="true">
                    {item.isDownload ? '↓' : '→'}
                  </span>
                </a>

                {/* Email Copy Helper */}
                {item.isEmail && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="action-copy-btn"
                    aria-label="Copy email address to clipboard"
                    title="Copy email to clipboard"
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                )}
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}
