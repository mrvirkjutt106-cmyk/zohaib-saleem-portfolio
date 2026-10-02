import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES, HERO_STATEMENT, CONTACT } from '../../data/siteData'
import './Hero.css'

/* ── Animation Config ─────────────────────────────────────────────── */

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

function createFadeUp(delay: number, reduced: boolean | null) {
  return {
    initial:    reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: EASE_OUT, delay },
  }
}

export default function Hero() {
  const reduced = useReducedMotion()

  const fu1 = createFadeUp(0.08, reduced)
  const fu2 = createFadeUp(0.14, reduced)
  const fu3 = createFadeUp(0.20, reduced)
  const fu4 = createFadeUp(0.26, reduced)
  const fiStrip = createFadeUp(0.34, reduced)

  const handleDownloadCv = (e: React.MouseEvent) => {
    if (!CONTACT.cvAvailable) {
      e.preventDefault()
      alert('CV file is not currently hosted in the repository. Please place your CV PDF into public/cv/Zohaib-Saleem-CV.pdf to enable direct download.')
    }
  }

  return (
    <section className="hero-modern" id="hero" aria-label="Zohaib Saleem — Chartered Accountancy, Accounting, Data">
      <div className="container hero-modern__container">

        {/* ── Main Composition: Left Narrative + Right Substantial Portrait ── */}
        <div className="hero-modern__main">

          {/* ── Left Content Column ── */}
          <div className="hero-modern__content">
            <motion.h1 className="hero-modern__name" {...fu1}>
              ZOHAIB<br />SALEEM
            </motion.h1>

            <motion.div className="hero-modern__discipline" {...fu2}>
              <span>ACCOUNTING</span>
              <span className="hero-modern__discipline-mark">×</span>
              <span>DATA</span>
              <span className="hero-modern__discipline-mark">×</span>
              <span>AI</span>
            </motion.div>

            <motion.p className="hero-modern__statement" {...fu3}>
              {HERO_STATEMENT}
            </motion.p>

            <motion.div className="hero-modern__actions" {...fu4}>
              <a href="#projects" className="btn-hero btn-hero--primary">
                <span>VIEW PROJECTS</span>
                <span className="btn-hero__icon" aria-hidden="true">→</span>
              </a>

              {CONTACT.cvAvailable ? (
                <a
                  href="/cv/Zohaib-Saleem-CV.pdf"
                  download="Zohaib-Saleem-CV.pdf"
                  className="btn-hero btn-hero--secondary"
                >
                  <span>DOWNLOAD CV</span>
                  <span className="btn-hero__icon" aria-hidden="true">↓</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleDownloadCv}
                  className="btn-hero btn-hero--secondary"
                  aria-label="Download CV — file pending upload"
                >
                  <span>DOWNLOAD CV</span>
                  <span className="btn-hero__icon" aria-hidden="true">↓</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* ── Right Column: Substantial Integrated Portrait ── */}
          <div className="hero-modern__visual">
            {/* Subtle atmospheric backdrop without frames */}
            <div className="hero-modern__backdrop" aria-hidden="true">
              <div className="hero-modern__arch-panel" />
            </div>

            {/* Substantial portrait extending toward the baseline */}
            <motion.div
              className="hero-modern__portrait-stage"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_OUT, delay: 0.12 }}
            >
              <img
                src={IMAGES.heroPortrait}
                alt="Zohaib Saleem — Chartered Accountancy Student"
                className="hero-modern__portrait-img"
                draggable="false"
              />
            </motion.div>
          </div>

        </div>

        {/* ── Compact Factual Achievement Strip ── */}
        <motion.div className="achievement-strip" {...fiStrip}>
          <div className="achievement-strip__item">
            <span className="achievement-strip__label">CA / CAF</span>
            <span className="achievement-strip__value">5 / 8 Papers Passed</span>
          </div>

          <div className="achievement-strip__divider" aria-hidden="true" />

          <div className="achievement-strip__item">
            <span className="achievement-strip__label">FOUNDATION</span>
            <span className="achievement-strip__value">Cleared First Attempt</span>
          </div>

          <div className="achievement-strip__divider" aria-hidden="true" />

          <div className="achievement-strip__item">
            <span className="achievement-strip__label">ACCOUNTING SYSTEMS</span>
            <span className="achievement-strip__value">QuickBooks + Xero</span>
          </div>

          <div className="achievement-strip__divider" aria-hidden="true" />

          <div className="achievement-strip__item">
            <span className="achievement-strip__label">DIRECTION</span>
            <span className="achievement-strip__value">Accounting × Data × AI</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
