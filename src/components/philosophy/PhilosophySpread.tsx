import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '../../data/siteData'
import './PhilosophySpread.css'

interface CapabilityTheme {
  num: string
  title: string
  headline: string
  description: string
  tags: string[]
}

const CAPABILITY_THEMES: CapabilityTheme[] = [
  {
    num: '01',
    title: 'ACCOUNTING',
    headline: 'Statutory Rigor & Double-Entry Integrity',
    description:
      'The foundational core. Applying IAS/IFRS standards, strict double-entry mechanics, multi-currency general ledger reconciliations, and Pakistan tax statutes to ensure rock-solid financial truth.',
    tags: ['IAS / IFRS Standards', 'Double-Entry Mechanics', 'Trial Balance Controls', 'Companies Act 2017'],
  },
  {
    num: '02',
    title: 'DATA',
    headline: 'Relational Star-Schemas & Decision Intelligence',
    description:
      'Transforming flat general ledgers into dynamic relational star schemas. Engineering Power BI and DAX models that decompose revenue margins, cash velocity, and budget variances in real time.',
    tags: ['Power BI & DAX', 'Dimensional Modeling', 'Power Query ETL', 'Variance Decomposition'],
  },
  {
    num: '03',
    title: 'AI & AUTOMATION',
    headline: 'Autonomous Extraction & Continuous Verification',
    description:
      'Designing experimental document-processing agents and rule engines that parse invoices/receipts, validate ledger schemas, and automate recurring reconciliation cycles with audit trails.',
    tags: ['Document OCR / LLM', 'JSON Schema Validation', 'Rule Matchers', 'Anomaly Screening'],
  },
]

export default function PhilosophySpread() {
  const reduced = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  })

  return (
    <section className="section identity-editorial-section" id="about" aria-label="Professional Identity">
      <div className="container">
        {/* Asymmetrical Editorial Composition: Left Full-Body Portrait + Right Integrated Typography Bands */}
        <div className="identity-editorial-layout">
          {/* Left Column: Full-Body Portrait (Large, Prominent, Naturally Contained) */}
          <div className="identity-editorial-portrait-col">
            <div className="identity-portrait-ambient-glow" aria-hidden="true" />
            <motion.div
              className="identity-portrait-frame"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={IMAGES.fullBody}
                alt="Zohaib Saleem — Full body professional portrait"
                className="identity-portrait-image"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Column: Integrated Typography Bands (NO White Box Cards) */}
          <div className="identity-editorial-content-col">
            <div className="identity-editorial-header">
              <div className="section-eyebrow">
                <span className="section-eyebrow__pip" />
                <span>IDENTITY &amp; METHODOLOGY</span>
              </div>
              <h2 className="identity-editorial-title">
                What I am building around accounting.
              </h2>
              <p className="identity-editorial-intro">
                I view accounting not merely as compliance record-keeping, but as the operational operating system of business. By pairing statutory double-entry principles with relational data engineering and autonomous AI extraction, I build verifiable financial systems engineered for the modern enterprise.
              </p>
            </div>

            {/* 3 Integrated Capability Themes as Horizontal Bands */}
            <div className="identity-bands-list">
              {CAPABILITY_THEMES.map((theme, idx) => (
                <motion.div
                  key={theme.num}
                  className="identity-band-item"
                  {...fadeUp(0.12 + idx * 0.08)}
                >
                  <div className="band-header">
                    <span className="band-num">{theme.num}</span>
                    <span className="band-divider" aria-hidden="true">/</span>
                    <h3 className="band-title">{theme.title}</h3>
                  </div>

                  <h4 className="band-headline">{theme.headline}</h4>
                  <p className="band-description">{theme.description}</p>

                  <div className="band-tags-inline">
                    {theme.tags.map((tag) => (
                      <span key={tag} className="band-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compact Convergence Direction Anchor */}
            <motion.div className="identity-editorial-anchor" {...fadeUp(0.38)}>
              <span className="anchor-mark">🎯</span>
              <div className="anchor-text">
                <strong className="anchor-title">Convergence: Technology-Driven Audit &amp; Assurance</strong>
                <span className="anchor-desc">
                  Applying IFRS statutory precision and algorithmic audit trail validation for upcoming CA articleship.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
