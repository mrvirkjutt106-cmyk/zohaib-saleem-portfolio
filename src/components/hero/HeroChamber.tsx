import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '../../data/siteData'
import './HeroChamber.css'

export default function HeroChamber() {
  const reduced = useReducedMotion()

  const transitionFade = (delay = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  })

  return (
    <section className="hero-experience" id="hero" aria-label="Zohaib Saleem — Accounting, Data, AI">
      {/* Background ambient lighting for depth */}
      <div className="hero-experience__glow hero-experience__glow--top" aria-hidden="true" />
      <div className="hero-experience__glow hero-experience__glow--right" aria-hidden="true" />

      <div className="container hero-experience__container">
        {/* Top Professional Status Bar */}
        <motion.div className="hero-experience__status-bar" {...transitionFade(0.05)}>
          <div className="hero-status-pill">
            <span className="hero-status-dot" aria-hidden="true" />
            <span className="hero-status-text">Chartered Accountancy Candidate (CAF) • ICAP</span>
          </div>
          <span className="hero-location-text">Lahore, Pakistan</span>
        </motion.div>

        {/* Central Asymmetric Stage */}
        <div className="hero-experience__stage">
          {/* Left: Expressive Typography & Positioning */}
          <div className="hero-experience__content">
            <motion.div className="hero-name-block" {...transitionFade(0.12)}>
              <h1 className="hero-name">
                <span className="hero-name__first">ZOHAIB</span>
                <span className="hero-name__last">SALEEM</span>
              </h1>
            </motion.div>

            <motion.div className="hero-discipline-strip" {...transitionFade(0.2)}>
              <span className="discipline-tag">ACCOUNTING</span>
              <span className="discipline-operator">×</span>
              <span className="discipline-tag">DATA</span>
              <span className="discipline-operator">×</span>
              <span className="discipline-tag">AI</span>
            </motion.div>

            <motion.h2 className="hero-headline" {...transitionFade(0.28)}>
              Accounting professional who builds with technology.
            </motion.h2>

            <motion.p className="hero-description" {...transitionFade(0.34)}>
              Developing applied financial reporting systems, relational Power BI pipelines, and autonomous document automation workflows with a future trajectory toward technology-driven audit and assurance.
            </motion.p>

            <motion.div className="hero-cta-group" {...transitionFade(0.4)}>
              <a href="#projects" className="hero-btn hero-btn--primary">
                <span>Explore Projects</span>
                <span className="hero-btn__arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#about" className="hero-btn hero-btn--secondary">
                <span>About &amp; Methodology</span>
                <span className="hero-btn__arrow" aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Integrated Cutout Portrait (Clean, Frame-Free, Sized Prominently) */}
          <div className="hero-experience__visual">
            {/* Luminous soft aura behind transparent portrait */}
            <div className="hero-portrait-aura" aria-hidden="true" />

            {/* Cutout Portrait Container — Visually Contained & Aligned */}
            <motion.div
              className="hero-portrait-wrap"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            >
              <img
                src={IMAGES.heroCutout}
                alt="Zohaib Saleem — Accounting, Data, AI"
                className="hero-portrait-img"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Credibility Strip */}
        <motion.div className="hero-experience__metrics" {...transitionFade(0.48)}>
          <div className="hero-metric-item">
            <span className="hero-metric-label">CAF Progress</span>
            <span className="hero-metric-value">5 of 8 Passed</span>
            <span className="hero-metric-sub">FAR-1 • CMA • BLAW • TAX • Companies Law</span>
          </div>

          <div className="hero-metric-divider" aria-hidden="true" />

          <div className="hero-metric-item">
            <span className="hero-metric-label">Foundation</span>
            <span className="hero-metric-value">First Attempt Merit</span>
            <span className="hero-metric-sub">ICAP Pre-Requisite Competencies (PRC)</span>
          </div>

          <div className="hero-metric-divider" aria-hidden="true" />

          <div className="hero-metric-item">
            <span className="hero-metric-label">Cloud Systems</span>
            <span className="hero-metric-value">Certified ProAdvisor</span>
            <span className="hero-metric-sub">QuickBooks Online &amp; Xero</span>
          </div>

          <div className="hero-metric-divider" aria-hidden="true" />

          <div className="hero-metric-item">
            <span className="hero-metric-label">Future Practice</span>
            <span className="hero-metric-value">Audit &amp; Assurance</span>
            <span className="hero-metric-sub">Tech-Driven Articleship Trajectory</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
