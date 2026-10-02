import { motion, useReducedMotion } from 'framer-motion'
import './FutureTrajectory.css'

interface WorkflowNode {
  step: string
  title: string
  subtitle: string
  focus: string
  tags: string[]
  isDestination?: boolean
}

const WORKFLOW_NODES: WorkflowNode[] = [
  {
    step: '01',
    title: 'ACCOUNTING',
    subtitle: 'Statutory Core',
    focus: 'Double-entry mechanics, IAS/IFRS standards, and tax compliance.',
    tags: ['IAS/IFRS', 'Double-Entry'],
  },
  {
    step: '02',
    title: 'DATA',
    subtitle: 'Relational Intelligence',
    focus: 'Transforming trial balances into Power BI star-schemas and DAX measures.',
    tags: ['Power BI & DAX', 'Star-Schemas'],
  },
  {
    step: '03',
    title: 'AUTOMATION',
    subtitle: 'Workflow Engineering',
    focus: 'Rule-based bank matching, period controls, and zero-variance suspense clearing.',
    tags: ['Rule Engines', 'Bank Feeds'],
  },
  {
    step: '04',
    title: 'AI-ASSISTED ACCOUNTING',
    subtitle: 'Autonomous Verification',
    focus: 'Document extraction agents, arithmetic JSON validation, and duplicate flags.',
    tags: ['Document Agents', 'JSON Schema'],
  },
  {
    step: '05',
    title: 'AUDIT & ASSURANCE',
    subtitle: 'Technology-Driven Practice',
    focus: 'Applying ISAs, substantive testing, and automated audit trails for CA articleship.',
    tags: ['ISA Standards', 'Digital Audit Trails'],
    isDestination: true,
  },
]

export default function FutureTrajectory() {
  const reduced = useReducedMotion()

  const nodeFade = (index: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-30px' },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 },
  })

  return (
    <section className="section direction-diagram-section" id="direction" aria-label="Future Direction">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>PROGRESSION WORKFLOW</span>
          </div>
          <h2 className="direction-diagram-title">Where accounting meets the future.</h2>
          <p className="direction-diagram-subtitle">
            A compounding progression where chartered accountancy rigor expands into data modeling, autonomous workflows, and intelligent assurance.
          </p>
        </div>

        {/* Compact Visual Workflow Diagram */}
        <div className="workflow-diagram">
          {/* Top Row: Nodes 01, 02, 03 */}
          <div className="workflow-diagram__row workflow-diagram__row--top">
            {/* Node 01 */}
            <motion.div className="workflow-node" {...nodeFade(0)}>
              <div className="workflow-node__header">
                <span className="workflow-node__num">{WORKFLOW_NODES[0].step}</span>
                <span className="workflow-node__subtitle">{WORKFLOW_NODES[0].subtitle}</span>
              </div>
              <h3 className="workflow-node__title">{WORKFLOW_NODES[0].title}</h3>
              <p className="workflow-node__focus">{WORKFLOW_NODES[0].focus}</p>
              <div className="workflow-node__tags">
                {WORKFLOW_NODES[0].tags.map((t) => (
                  <span key={t} className="workflow-tag">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Connector 01 -> 02 */}
            <div className="workflow-connector workflow-connector--horizontal" aria-hidden="true">
              <span className="connector-line" />
              <span className="connector-arrow">→</span>
            </div>

            {/* Node 02 */}
            <motion.div className="workflow-node" {...nodeFade(1)}>
              <div className="workflow-node__header">
                <span className="workflow-node__num">{WORKFLOW_NODES[1].step}</span>
                <span className="workflow-node__subtitle">{WORKFLOW_NODES[1].subtitle}</span>
              </div>
              <h3 className="workflow-node__title">{WORKFLOW_NODES[1].title}</h3>
              <p className="workflow-node__focus">{WORKFLOW_NODES[1].focus}</p>
              <div className="workflow-node__tags">
                {WORKFLOW_NODES[1].tags.map((t) => (
                  <span key={t} className="workflow-tag">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Connector 02 -> 03 */}
            <div className="workflow-connector workflow-connector--horizontal" aria-hidden="true">
              <span className="connector-line" />
              <span className="connector-arrow">→</span>
            </div>

            {/* Node 03 */}
            <motion.div className="workflow-node" {...nodeFade(2)}>
              <div className="workflow-node__header">
                <span className="workflow-node__num">{WORKFLOW_NODES[2].step}</span>
                <span className="workflow-node__subtitle">{WORKFLOW_NODES[2].subtitle}</span>
              </div>
              <h3 className="workflow-node__title">{WORKFLOW_NODES[2].title}</h3>
              <p className="workflow-node__focus">{WORKFLOW_NODES[2].focus}</p>
              <div className="workflow-node__tags">
                {WORKFLOW_NODES[2].tags.map((t) => (
                  <span key={t} className="workflow-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Vertical Bend Connector between rows (Desktop) */}
          <div className="workflow-row-transition" aria-hidden="true">
            <div className="row-transition-line" />
            <div className="row-transition-arrow">↓</div>
          </div>

          {/* Bottom Row: Nodes 04, 05 */}
          <div className="workflow-diagram__row workflow-diagram__row--bottom">
            {/* Node 04 */}
            <motion.div className="workflow-node" {...nodeFade(3)}>
              <div className="workflow-node__header">
                <span className="workflow-node__num">{WORKFLOW_NODES[3].step}</span>
                <span className="workflow-node__subtitle">{WORKFLOW_NODES[3].subtitle}</span>
              </div>
              <h3 className="workflow-node__title">{WORKFLOW_NODES[3].title}</h3>
              <p className="workflow-node__focus">{WORKFLOW_NODES[3].focus}</p>
              <div className="workflow-node__tags">
                {WORKFLOW_NODES[3].tags.map((t) => (
                  <span key={t} className="workflow-tag">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Connector 04 -> 05 */}
            <div className="workflow-connector workflow-connector--horizontal" aria-hidden="true">
              <span className="connector-line" />
              <span className="connector-arrow">→</span>
            </div>

            {/* Node 05: Destination */}
            <motion.div className="workflow-node workflow-node--destination" {...nodeFade(4)}>
              <div className="workflow-node__header">
                <span className="workflow-node__num">{WORKFLOW_NODES[4].step}</span>
                <span className="workflow-node__subtitle workflow-node__subtitle--emerald">{WORKFLOW_NODES[4].subtitle}</span>
              </div>
              <h3 className="workflow-node__title">{WORKFLOW_NODES[4].title}</h3>
              <p className="workflow-node__focus">{WORKFLOW_NODES[4].focus}</p>
              <div className="workflow-node__tags">
                {WORKFLOW_NODES[4].tags.map((t) => (
                  <span key={t} className="workflow-tag workflow-tag--emerald">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Compact Professional Commitment Callout */}
        <div className="workflow-commitment-callout">
          <div className="callout-line" />
          <p className="callout-text">
            &ldquo;My goal is to enter professional CA articleship not merely as an accountant who relies on software, but as a builder who understands how financial systems are constructed, audited, and automated.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
