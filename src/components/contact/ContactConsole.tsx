import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PERSON, CONTACT, IMAGES } from '../../data/siteData'
import './ContactConsole.css'

export default function ContactConsole() {
  const reduced = useReducedMotion()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const contactChannels = [
    {
      id: 'email',
      label: 'EMAIL',
      val: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      actionText: 'Send Email',
      isExternal: false,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      val: CONTACT.linkedinDisplay,
      href: CONTACT.linkedin,
      actionText: 'Connect on LinkedIn',
      isExternal: true,
    },
    {
      id: 'whatsapp',
      label: 'WHATSAPP',
      val: CONTACT.phone,
      href: CONTACT.whatsapp,
      actionText: 'Direct Message',
      isExternal: true,
    },
    {
      id: 'resume',
      label: 'CURRICULUM VITAE',
      val: 'Comprehensive Academic & Credentials PDF',
      href: '/resume.pdf',
      actionText: 'Download CV',
      isExternal: false,
      isDownload: true,
    },
  ]

  return (
    <section className="section contact-final-scene" id="contact" aria-label="Contact">
      <div className="container">
        {/* Massive Closing Statement */}
        <div className="contact-final-header">
          <motion.div
            className="contact-eyebrow"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="contact-eyebrow-pip" />
            <span>LET&apos;S CONNECT</span>
          </motion.div>

          <motion.h2
            className="contact-huge-headline"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            LET&apos;S BUILD SOMETHING USEFUL.
          </motion.h2>

          <motion.p
            className="contact-lead-subtext"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            Open to professional discussions, CA articleship and training opportunities, financial data projects, and technology-driven accounting collaborations.
          </motion.p>
        </div>

        {/* Spacious 2-Column Final Layout */}
        <div className="contact-final-spread">
          {/* Left Column: Personal Identity & Availability */}
          <motion.div
            className="contact-identity-card"
            initial={reduced ? { opacity: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="contact-avatar-cluster">
              <div className="contact-avatar-ring">
                <img
                  src={IMAGES.profileCircle}
                  alt="Zohaib Saleem"
                  className="contact-avatar-img"
                  loading="lazy"
                />
              </div>
              <div className="contact-live-availability">
                <span className="availability-pulse-dot" />
                <span className="availability-text">Available for CA Articleship &amp; Projects</span>
              </div>
            </div>

            <div className="contact-bio-details">
              <h3 className="contact-name">{PERSON.name}</h3>
              <p className="contact-role">Chartered Accountancy Candidate (CAF) • ICAP</p>
              <p className="contact-location">Lahore, Pakistan • PKT (UTC+5)</p>
            </div>

            <div className="contact-core-pillars-mini">
              <span className="mini-pillar">ACCOUNTING</span>
              <span className="mini-cross">×</span>
              <span className="mini-pillar">DATA</span>
              <span className="mini-cross">×</span>
              <span className="mini-pillar">AI</span>
            </div>
          </motion.div>

          {/* Right Column: Tactile & Interactive Channels */}
          <div className="contact-channels-list">
            {contactChannels.map((item, index) => (
              <motion.div
                key={item.id}
                className="contact-channel-row"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              >
                <div className="channel-meta">
                  <span className="channel-label">{item.label}</span>
                  {item.id === 'email' ? (
                    <div className="channel-email-group">
                      <a href={item.href} className="channel-value">
                        {item.val}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="channel-copy-btn"
                        aria-label="Copy email address"
                      >
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      download={item.isDownload ? 'Zohaib_Saleem_CV.pdf' : undefined}
                      className="channel-value"
                    >
                      {item.val}
                    </a>
                  )}
                </div>

                <a
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  download={item.isDownload ? 'Zohaib_Saleem_CV.pdf' : undefined}
                  className="channel-action-btn"
                  aria-label={`${item.actionText} for ${item.label}`}
                >
                  <span className="action-label">{item.actionText}</span>
                  <span className="action-arrow" aria-hidden="true">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
