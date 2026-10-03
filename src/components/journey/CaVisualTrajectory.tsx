import { motion, useReducedMotion } from 'framer-motion'
import { ACADEMIC_STAGES, PASSED_PAPERS, PREPARING_PAPERS } from '../../data/caJourney'
import './CaVisualTrajectory.css'

export default function CaVisualTrajectory() {
  const reduced = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  })

  return (
    <section
      className="section journey-section"
      id="journey"
      aria-label="Chartered Accountancy Journey"
    >
      <div className="container journey-container">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="journey-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>CA JOURNEY</span>
          </div>

          <h2 className="journey-title">
            The Chartered Accountancy Path.
          </h2>

          <p className="journey-intro">
            A deliberate transition from empirical pre-medical sciences to financial reporting, commercial statutes, and active CA-Intermediate progression.
          </p>
        </div>

        {/* ── 1. Academic Progression Conduit (4 Stages) ─────── */}
        <div className="academic-timeline" role="region" aria-label="Academic Progression Stages">
          {/* Subtle connecting rail */}
          <div className="timeline-track-rail" aria-hidden="true" />

          <div className="timeline-stages-grid">
            {ACADEMIC_STAGES.map((stage, idx) => (
              <motion.div
                key={stage.num}
                className={`timeline-stage-card ${stage.isCurrent ? 'timeline-stage-card--current' : ''}`}
                {...fadeUp(idx * 0.08)}
              >
                <div className="stage-top">
                  <span className="stage-badge">{stage.institution}</span>
                </div>
                <h3 className="stage-title">{stage.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 2. Primary Visual Anchor: 5 / 8 Papers Passed ───── */}
        <motion.div
          className="anchor-58-chamber"
          role="region"
          aria-label="CAF Intermediate Standing: 5 of 8 Papers Passed"
          {...fadeUp(0.15)}
        >
          {/* Atmospheric background halos */}
          <div className="anchor-glow anchor-glow--blue" aria-hidden="true" />
          <div className="anchor-glow anchor-glow--emerald" aria-hidden="true" />

          {/* Monumental Figures Display */}
          <div className="anchor-figures-wrap">
            <div className="anchor-big-score">
              <span className="score-num score-num--passed">5</span>
              <span className="score-divider">/</span>
              <span className="score-num score-num--total">8</span>
            </div>

            <div className="anchor-headline-group">
              <h3 className="anchor-main-label">PAPERS PASSED</h3>
              <p className="anchor-sub-label">
                CAF / CA-Intermediate Level
              </p>
            </div>
          </div>

          {/* 8-Segment Progress Visualization Track */}
          <div className="anchor-segment-meter" aria-hidden="true">
            <div className="segment-track">
              {Array.from({ length: 8 }).map((_, i) => {
                const isPassed = i < 5
                return (
                  <div
                    key={i}
                    className={`segment-bar ${isPassed ? 'segment-bar--passed' : 'segment-bar--preparing'}`}
                  >
                    <span className="segment-index">{`0${i + 1}`}</span>
                    <span className="segment-status">{isPassed ? 'Passed' : 'Prep'}</span>
                  </div>
                )
              })}
            </div>

            {/* Quick Metrics Bar */}
            <div className="anchor-metrics-row">
              <div className="metric-chip metric-chip--passed">
                <span className="metric-dot" />
                <span><strong>5 Passed</strong></span>
              </div>
              <div className="metric-chip metric-chip--prep">
                <span className="metric-dot" />
                <span><strong>3 Preparing</strong></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3. Papers Breakdown: Passed (5) vs Preparing (3) ─ */}
        <div className="papers-breakdown-grid" role="region" aria-label="CAF Modular Papers List">

          {/* Column A: Passed Papers (5) */}
          <motion.div className="papers-wing papers-wing--passed" {...fadeUp(0.2)}>
            <div className="wing-header">
              <div className="wing-badge-group">
                <span className="wing-status-dot wing-status-dot--passed" />
                <h4 className="wing-title">PASSED — 5</h4>
              </div>
              <span className="wing-count-tag">5 Passed</span>
            </div>

            <div className="wing-papers-list">
              {PASSED_PAPERS.map((paper) => (
                <div key={paper.code} className="paper-card paper-card--passed">
                  <div className="paper-card__top">
                    <span className="paper-code-tag paper-code-tag--passed">{paper.code}</span>
                    <span className="paper-status-label paper-status-label--passed">
                      <span className="check-icon" aria-hidden="true">✔</span> Passed
                    </span>
                  </div>

                  <h5 className="paper-name">{paper.name}</h5>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column B: Preparing Papers (3) */}
          <motion.div className="papers-wing papers-wing--preparing" {...fadeUp(0.26)}>
            <div className="wing-header">
              <div className="wing-badge-group">
                <span className="wing-status-dot wing-status-dot--preparing" />
                <h4 className="wing-title">CURRENTLY PREPARING — 3</h4>
              </div>
              <span className="wing-count-tag wing-count-tag--prep">3 Preparing</span>
            </div>

            <div className="wing-papers-list">
              {PREPARING_PAPERS.map((paper) => (
                <div key={paper.code} className="paper-card paper-card--preparing">
                  <div className="paper-card__top">
                    <span className="paper-code-tag paper-code-tag--preparing">{paper.code}</span>
                    <span className="paper-status-label paper-status-label--preparing">
                      <span className="prep-pulse-dot" aria-hidden="true" /> Preparing
                    </span>
                  </div>

                  <h5 className="paper-name">{paper.name}</h5>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
