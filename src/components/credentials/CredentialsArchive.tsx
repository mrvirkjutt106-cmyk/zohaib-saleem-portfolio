import { motion, useReducedMotion } from 'framer-motion'
import { CREDENTIALS } from '../../data/certifications'
import './CredentialsArchive.css'

export default function CredentialsArchive() {
  const reduced = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  })

  return (
    <section
      className="section credentials-section"
      id="certifications"
      aria-label="Technical Credentials and Applied Training"
    >
      <div className="container credentials-container">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="credentials-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>CREDENTIALS</span>
          </div>

          <h2 className="credentials-title">
            Technical Certifications &amp; Training.
          </h2>

          <p className="credentials-intro">
            Applied study across cloud accounting platforms, business intelligence, and practical computerized accounting systems.
          </p>
        </div>

        {/* ── Editorial Credentials Archive Ledger ───────────── */}
        <div className="credentials-ledger" role="region" aria-label="Credentials Archive List">
          {CREDENTIALS.map((cred, idx) => (
            <motion.article
              key={cred.code}
              className={`credential-row credential-row--${cred.code.toLowerCase()}`}
              {...fadeUp(idx * 0.08)}
            >
              {/* Left Column: Number & Provider */}
              <div className="cred-col-meta">
                <span className="cred-num">{cred.num}</span>
                <div className="cred-provider-group">
                  <span className="cred-provider-label">Provider</span>
                  <span className="cred-provider-name">{cred.provider}</span>
                </div>
              </div>

              {/* Center Column: Credential Title & Descriptor */}
              <div className="cred-col-main">
                <div className="cred-title-row">
                  <h3 className="cred-title">{cred.title}</h3>
                  <span className="cred-domain-badge">{cred.domainBadge}</span>
                </div>
                <p className="cred-summary">{cred.summary}</p>
              </div>

              {/* Right Column: Key Focus Topics & Sectors */}
              <div className="cred-col-tags">
                <div className="cred-tags-wrap">
                  {cred.topics.map((topic) => (
                    <span key={topic} className="cred-topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>

                {cred.sectors && (
                  <div className="cred-sectors-row">
                    <span className="cred-sectors-label">Exposure:</span>
                    <span className="cred-sectors-text">
                      {cred.sectors.join(' · ')}
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
