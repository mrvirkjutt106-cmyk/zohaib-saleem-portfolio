import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES, CONTACT } from '../../data/siteData'
import './HeroChamber.css'

export default function HeroChamber() {
  const reduced = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  })

  return (
    <section className="hero-experience" id="hero" aria-label="Zohaib Saleem — Accounting, Data, AI">
      {/* Restrained luminous ambient background */}
      <div className="hero-experience__ambient" aria-hidden="true">
        <div className="hero-ambient-glow hero-ambient-glow--blue" />
        <div className="hero-ambient-glow hero-ambient-glow--violet" />
      </div>

      <div className="container hero-experience__container">
        {/* Main Editorial Composition */}
        <div className="hero-stage">
          {/* Left Column: Primary Typography & Direction */}
          <div className="hero-content">
            {/* 1. Zohaib Saleem — Bold, large, editorial typography */}
            <motion.div className="hero-title-group" {...fadeUp(0.08)}>
              <h1 className="hero-name">
                <span className="hero-name__first">ZOHAIB</span>
                <span className="hero-name__last">SALEEM</span>
              </h1>
            </motion.div>

            {/* 2. ACCOUNTING × DATA × AI */}
            <motion.div className="hero-discipline-strip" {...fadeUp(0.22)}>
              <span className="discipline-tag">ACCOUNTING</span>
              <span className="discipline-sep" aria-hidden="true">×</span>
              <span className="discipline-tag">DATA</span>
              <span className="discipline-sep" aria-hidden="true">×</span>
              <span className="discipline-tag">AI</span>
            </motion.div>

            {/* 3. Short positioning statement (Exact approved line) */}
            <motion.p className="hero-positioning" {...fadeUp(0.3)}>
              CA student exploring the intersection of accounting, financial data, digital systems, and AI.
            </motion.p>

            {/* 5, 6, 7. Action CTAs */}
            <motion.div className="hero-actions" {...fadeUp(0.38)}>
              <a href="#projects" className="hero-btn hero-btn--primary">
                <span>Explore My Work</span>
                <span className="hero-btn__arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#journey" className="hero-btn hero-btn--secondary">
                <span>CA Journey</span>
                <span className="hero-btn__arrow" aria-hidden="true">→</span>
              </a>
              {CONTACT.cvPath && (
                <a
                  href={CONTACT.cvPath}
                  download="Zohaib-Saleem-CV.pdf"
                  className="hero-btn hero-btn--cv"
                  title="Download Curriculum Vitae (PDF)"
                >
                  <span className="cv-icon" aria-hidden="true">📄</span>
                  <span>CV</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Column: Visual Anchor & Integrated Portrait */}
          <motion.div
            className="hero-visual"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          >
            {/* Architectural radial framing backdrop */}
            <div className="hero-portrait-frame" aria-hidden="true">
              <div className="hero-frame-ring hero-frame-ring--outer" />
              <div className="hero-frame-ring hero-frame-ring--inner" />
              <div className="hero-frame-hairline hero-frame-hairline--h" />
              <div className="hero-frame-hairline hero-frame-hairline--v" />
            </div>

            {/* Real Transparent Portrait */}
            <div className="hero-portrait-wrapper">
              <img
                src={IMAGES.heroCutout}
                alt="Zohaib Saleem — Accounting, Data, AI"
                className="hero-portrait-image"
                loading="eager"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>

        {/* Supporting Micro-Status Strip: Compact, Factual & Grounded */}
        <motion.div className="hero-credibility-ribbon" {...fadeUp(0.46)}>
          <div className="ribbon-item">
            <span className="ribbon-label">ACADEMIC FOUNDATION</span>
            <span className="ribbon-val">CAF Intermediate · 5/8 Passed</span>
          </div>
          <span className="ribbon-divider" aria-hidden="true" />
          <div className="ribbon-item">
            <span className="ribbon-label">APPLIED PROTOTYPES</span>
            <span className="ribbon-val">Personal ERP &amp; Automation Lab</span>
          </div>
          <span className="ribbon-divider" aria-hidden="true" />
          <div className="ribbon-item">
            <span className="ribbon-label">DIGITAL ACCOUNTING</span>
            <span className="ribbon-val">QuickBooks Online &amp; Xero</span>
          </div>
          <span className="ribbon-divider" aria-hidden="true" />
          <div className="ribbon-item">
            <span className="ribbon-label">FUTURE DIRECTION</span>
            <span className="ribbon-val">Audit &amp; Assurance Trajectory</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
