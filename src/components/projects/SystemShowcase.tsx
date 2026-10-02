import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './SystemShowcase.css'

interface FeaturePin {
  id: string
  label: string
  detail: string
}

interface PortfolioProject {
  id: string
  num: string
  title: string
  subtitle: string
  statement: string
  context: string
  status: string
  statusBadge: string
  whatIBuilt: string[]
  technologies: string[]
  image: string
  imageAlt: string
  pins: FeaturePin[]
  accentColor: 'blue' | 'emerald'
}

const PROJECTS_DATA: PortfolioProject[] = [
  {
    id: 'personal-erp',
    num: '01',
    title: 'PERSONAL ERP SYSTEM',
    subtitle: 'Full-Cycle Computerized General Ledger & Reporting Engine',
    statement:
      'Translating Chartered Accountancy curriculum into an active financial management system that enforces double-entry rules, period controls, and IAS 1 reporting standards.',
    context:
      'Designed to solve fragmentation in everyday financial tracking by creating a centralized, verifiable accounting architecture that tracks chart of accounts, bank reconciliations, and tax obligations.',
    status: 'Personal Prototype & Learning System (CAF Application)',
    statusBadge: 'Active Personal ERP',
    whatIBuilt: [
      'Engineered structured double-entry general ledger records mapped to a standardized chart of accounts.',
      'Designed automated bank reconciliation controls to clear suspense items and verify trial balance integrity.',
      'Built financial reporting templates compliant with IAS 1 presentation principles (Statement of Financial Position, P&L).',
      'Configured sales/income tax preparation schedules reflecting Pakistan tax rules and withholding provisions.',
    ],
    technologies: ['Advanced Excel', 'QuickBooks Online', 'Xero', 'IAS / IFRS Standards', 'Tax Schedules'],
    image: '/images/Professional ERP Accounting Dashboard Workspace.png',
    imageAlt: 'Personal ERP Accounting System Transparent Workspace Visual',
    accentColor: 'blue',
    pins: [
      { id: 'gl', label: 'General Ledger', detail: 'Automated double-entry trial balance controls' },
      { id: 'recon', label: 'Bank Reconciliation', detail: 'Zero-variance suspense clearing engine' },
      { id: 'ias', label: 'IAS 1 Reporting', detail: 'Standardized balance sheet & P&L generation' },
      { id: 'tax', label: 'Tax Schedules', detail: 'Withholding and sales tax preparation matrices' },
    ],
  },
  {
    id: 'ai-agent-lab',
    num: '02',
    title: 'AI AGENT & AUTOMATION LAB',
    subtitle: 'Autonomous Financial Document Ingestion & Verification Engine',
    statement:
      'An experimental environment testing autonomous document extraction, schema validation, and audit trail generation for accounting and pre-audit workflows.',
    context:
      'Manual bookkeeping and audit sampling suffer from tedious data entry and human oversight. This prototype uses structured AI extraction to parse receipts, validate math, and flag discrepancies.',
    status: 'Personal Exploration & Prototype Lab (Personal Research)',
    statusBadge: 'Experimental AI Lab',
    whatIBuilt: [
      'Prototyped document extraction agents to parse unstructured vendor invoices and receipt PDFs into structured data.',
      'Implemented JSON schema validation to cross-check arithmetic, tax totals, and duplicate invoice entries.',
      'Constructed automated bank transaction matchers using rule engines and fuzzy description matching.',
      'Developed interactive Power BI variance dashboards to visualize extracted trends and flagged anomalies.',
    ],
    technologies: ['AI Prompt Pipelines', 'Power BI & DAX', 'Document Parsers', 'JSON Schema Rules', 'Audit Matrices'],
    image: '/images/AI-Powered Financial Automation Workspace.png',
    imageAlt: 'AI Agent & Financial Automation Workspace Transparent Visual',
    accentColor: 'emerald',
    pins: [
      { id: 'ocr', label: 'Invoice Parser', detail: 'Unstructured PDF to structured transaction schema' },
      { id: 'schema', label: 'Schema Validator', detail: 'Arithmetic reconciliation & duplicate flags' },
      { id: 'matcher', label: 'Rule Engine', detail: 'Automated bank feed match & clearance' },
      { id: 'bi', label: 'Power BI Deck', detail: 'Visual variance decomposition & anomaly heatmaps' },
    ],
  },
]

export default function SystemShowcase() {
  const reduced = useReducedMotion()
  const [activePin, setActivePin] = useState<{ [key: string]: string | null }>({
    'personal-erp': 'gl',
    'ai-agent-lab': 'ocr',
  })

  return (
    <section className="section projects-star-section" id="projects" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="projects-star-title">What I build &amp; explore.</h2>
          <p className="projects-star-statement">
            &ldquo;I build practical systems where accounting knowledge meets data, automation and AI.&rdquo;
          </p>
        </div>

        {/* The Two Star Showcases */}
        <div className="projects-star-list">
          {PROJECTS_DATA.map((project, index) => {
            const currentPinId = activePin[project.id]
            const activePinObj = project.pins.find((p) => p.id === currentPinId) || project.pins[0]
            const isReversed = index % 2 !== 0

            return (
              <motion.article
                key={project.id}
                className={`project-star-showcase project-star-showcase--${project.accentColor} ${
                  isReversed ? 'project-star-showcase--reversed' : ''
                }`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Visual Canvas: Large Floating Transparent Artwork with Environmental Depth */}
                <div className="project-star-canvas">
                  {/* Environmental Ambient Halo */}
                  <div
                    className={`project-star-aura project-star-aura--${project.accentColor}`}
                    aria-hidden="true"
                  />

                  {/* Faint Architectural Grid & Fine Lines behind image */}
                  <div className="project-star-backdrop-grid" aria-hidden="true">
                    <div className="grid-cross grid-cross--tl">+</div>
                    <div className="grid-cross grid-cross--tr">+</div>
                    <div className="grid-cross grid-cross--bl">+</div>
                    <div className="grid-cross grid-cross--br">+</div>
                  </div>

                  {/* Floating Transparent Project Image (NO CARD, NO BORDER) */}
                  <div className="project-star-artwork-wrap">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-star-img"
                      loading="lazy"
                    />
                  </div>

                  {/* Interactive Feature Pins / Badges directly hovering over visual space */}
                  <div className="project-star-pins-bar">
                    {project.pins.map((pin) => (
                      <button
                        key={pin.id}
                        type="button"
                        className={`pin-button ${currentPinId === pin.id ? 'pin-button--active' : ''}`}
                        onClick={() => setActivePin({ ...activePin, [project.id]: pin.id })}
                      >
                        <span className="pin-dot" />
                        <span className="pin-text">{pin.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Live Detail Tooltip for Active Pin */}
                  {activePinObj && (
                    <div className="project-star-pin-tooltip">
                      <span className="tooltip-tag">FEATURE SPOTLIGHT</span>
                      <strong className="tooltip-title">{activePinObj.label}</strong>
                      <span className="tooltip-desc">{activePinObj.detail}</span>
                    </div>
                  )}
                </div>

                {/* Narrative & Engineering Details */}
                <div className="project-star-narrative">
                  <div className="project-star-meta-top">
                    <span className="project-star-num">{project.num}</span>
                    <span className="project-star-status-pill">{project.statusBadge}</span>
                  </div>

                  <h3 className="project-star-name">{project.title}</h3>
                  <h4 className="project-star-subtitle">{project.subtitle}</h4>

                  <p className="project-star-statement-text">{project.statement}</p>

                  <div className="project-star-context-block">
                    <span className="context-label">PROBLEM &amp; CONTEXT</span>
                    <p className="context-body">{project.context}</p>
                  </div>

                  <div className="project-star-built-block">
                    <span className="built-label">WHAT I BUILT &amp; EXPLORED:</span>
                    <ul className="built-list">
                      {project.whatIBuilt.map((item, idx) => (
                        <li key={idx} className="built-item">
                          <span className="built-bullet" aria-hidden="true">✔</span>
                          <span className="built-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-star-tools-row">
                    <span className="tools-label">APPLIED TOOLS &amp; STANDARDS:</span>
                    <div className="tools-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-star-scope-tag">
                    <span className="scope-indicator-dot" />
                    <span>{project.status}</span>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
