import { CONTACT, IMAGES } from '../../data/siteData'
import './Contact.css'

const CONTACT_CHANNELS = [
  {
    label: 'EMAIL',
    val: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    actionText: 'Send Email →',
  },
  {
    label: 'LINKEDIN',
    val: 'linkedin.com/in/mrzohaibsaleem',
    href: CONTACT.linkedin,
    actionText: 'View Profile →',
  },
  {
    label: 'WHATSAPP / PHONE',
    val: CONTACT.phone,
    href: CONTACT.whatsapp,
    actionText: 'Message on WhatsApp →',
  },
]

export default function Contact() {
  return (
    <section className="section section--white contact-section" id="contact" aria-label="Contact Zohaib Saleem">
      <div className="container">

        {/* Section Header — No decorative numbering */}
        <div className="contact-header">
          <div className="contact-header__intro">
            <div className="contact-avatar-wrap">
              <div className="contact-avatar-circle">
                <img
                  src={IMAGES.profileCircle}
                  alt="Zohaib Saleem"
                  className="contact-avatar"
                />
              </div>
              <div className="contact-status-pip" title="Available for CA training & professional opportunities" />
            </div>
            <div>
              <h2 className="contact-title">LET&apos;S CONNECT</h2>
              <p className="contact-subtitle">
                Open to professional opportunities, CA training environments, accounting and audit discussions, and collaborations involving financial data and technology.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Channels Grid — Prominent and Easy to Scan */}
        <div className="contact-channels-grid">
          {CONTACT_CHANNELS.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <span className="contact-channel__label">{ch.label}</span>
              <span className="contact-channel__val">{ch.val}</span>
              <span className="contact-channel__action">{ch.actionText}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

