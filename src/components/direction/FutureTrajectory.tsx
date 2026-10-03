import { motion, useReducedMotion } from 'framer-motion'
import './FutureTrajectory.css'

interface TrajectoryNode {
  step: string
  title: string
  pillar: string
  desc: string
  tag: string
  ideas?: string[]
  isDestination?: boolean
}

const TRAJECTORY_STAGES: TrajectoryNode[] = [
  {
    step: '01',
    title: 'ACCOUNTING',
    pillar: 'ACCOUNTING TECHNOLOGY',
    desc: 'Digital accounting workflows and accounting systems.',
    tag: 'Foundation',
  },
  {
    step: '02',
    title: 'DATA',
    pillar: 'FINANCIAL DATA & BI',
    desc: 'Financial data analysis, dashboards, and decision support.',
    tag: 'Analytics',
  },
  {
    step: '03',
    title: 'SYSTEMS',
    pillar: 'STRUCTURED PLATFORMS',
    desc: 'Computerized ledgers, structured workflows, and digital accounting environments.',
    tag: 'Workflows',
  },
  {
    step: '04',
    title: 'AI',
    pillar: 'AI-ASSISTED ACCOUNTING',
    desc: 'Document processing, automation, AI agents, and accounting workflows.',
    tag: 'Automation',
  },
  {
    step: '05',
    title: 'AUDIT & ASSURANCE',
    pillar: 'AUDIT & ASSURANCE',
    desc: 'Developing toward controls, verification, reconciliation, and assurance.',
    tag: 'Future Direction · Developing',
    ideas: ['Controls', 'Verification', 'Reconciliation', 'Assurance'],
    isDestination: true,
  },
]

export default function FutureTrajectory() {
  const reduced = useReducedMotion()

  const nodeFade = (index: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 },
  })

  return (
    <section
      className="section trajectory-section dark-section"
      id="direction"
      aria-label="Future Direction and Trajectory"
    >
      <div className="container trajectory-container">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="trajectory-header">
          <div className="section-eyebrow section-eyebrow--dark">
            <span className="section-eyebrow__pip section-eyebrow__pip--dark" />
            <span>FUTURE DIRECTION</span>
          </div>

          <h2 className="trajectory-title">
            Where Accounting Meets Modern Systems.
          </h2>

          <p className="trajectory-intro">
            A deliberate progression connecting foundational financial discipline with data analytics, automated workflows, and assurance principles.
          </p>
        </div>

        {/* ── Connected Directional Trajectory Stream ────────── */}
        <div
          className="trajectory-stream-wrap"
          role="region"
          aria-label="Progression: Accounting to Data, Systems, AI, and Audit"
        >
          {/* Background Vector Conduit Beam (Desktop) */}
          <div className="trajectory-vector-conduit" aria-hidden="true">
            <div className="vector-conduit-line" />
            <div className="vector-conduit-glow" />
          </div>

          <div className="trajectory-stages-track">
            {TRAJECTORY_STAGES.map((stage, idx) => (
              <motion.article
                key={stage.step}
                className={`trajectory-node ${stage.isDestination ? 'trajectory-node--destination' : ''}`}
                {...nodeFade(idx)}
              >
                {/* Node Connector Anchor Pip */}
                <div className="node-anchor-pip" aria-hidden="true">
                  <span className="pip-outer">
                    <span className="pip-core" />
                  </span>
                </div>

                {/* Node Header: Step & Domain Tag */}
                <div className="node-head">
                  <span className="node-num">{stage.step}</span>
                  <span className={`node-tag ${stage.isDestination ? 'node-tag--destination' : ''}`}>
                    {stage.tag}
                  </span>
                </div>

                {/* Node Identity */}
                <h3 className="node-title">{stage.title}</h3>
                <span className="node-pillar-label">{stage.pillar}</span>

                {/* Node Description */}
                <p className="node-desc">{stage.desc}</p>

                {/* Destination Supporting Ideas (Audit & Assurance) */}
                {stage.ideas && (
                  <div className="node-ideas-row">
                    {stage.ideas.map((idea) => (
                      <span key={idea} className="idea-pill">
                        {idea}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* ── Concluding Statement ───────────────────────────── */}
        <motion.div
          className="trajectory-statement-card"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="statement-line" aria-hidden="true" />
          <p className="statement-text">
            &ldquo;Building toward technology-driven accounting, analytics and audit.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  )
}
