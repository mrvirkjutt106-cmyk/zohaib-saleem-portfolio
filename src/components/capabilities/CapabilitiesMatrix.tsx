import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './CapabilitiesMatrix.css'

interface CapabilityNode {
  id: string
  title: string
  subtitle: string
  summary: string
  connectedProject?: string
  connectedSkills: string[]
  icon: string
  theme: 'blue' | 'emerald' | 'amber' | 'purple' | 'navy' | 'cyan'
}

const CAPABILITY_ECOSYSTEM: CapabilityNode[] = [
  {
    id: 'accounting',
    title: 'ACCOUNTING',
    subtitle: 'Statutory Standards & Double-Entry Integrity',
    summary:
      'Rigorous execution of double-entry mechanics, multi-period general ledger reconciliations, and statutory financial statement preparation compliant with IAS/IFRS.',
    connectedProject: 'Personal ERP System',
    connectedSkills: ['Financial Reporting (IAS/IFRS)', 'Bookkeeping & General Ledger', 'Bank & Ledger Reconciliations', 'Suspense Account Clearing'],
    icon: '⚖️',
    theme: 'blue',
  },
  {
    id: 'audit',
    title: 'AUDIT & ASSURANCE',
    subtitle: 'Internal Controls & Substantive Testing',
    summary:
      'Applying International Standards on Auditing (ISAs), testing internal control mechanisms, risk assessment models, and verifiable audit trails for CA articleship.',
    connectedProject: 'Audit Direction',
    connectedSkills: ['Audit Methodology (ISAs)', 'Internal Control Evaluation', 'Audit Risk Assessment', 'Substantive Analytical Review'],
    icon: '🔍',
    theme: 'navy',
  },
  {
    id: 'taxation',
    title: 'TAXATION',
    subtitle: 'Pakistan Tax Statutes & Secretarial Rules',
    summary:
      'Practical preparation of income tax adjustments, sales tax schedules, withholding tax computations, and compliance with the Companies Act 2017.',
    connectedProject: 'Personal ERP Tax Engine',
    connectedSkills: ['Income Tax Ordinance', 'Sales Tax Schedules', 'Withholding Tax Computations', 'Companies Act 2017 Compliance'],
    icon: '📑',
    theme: 'amber',
  },
  {
    id: 'data-bi',
    title: 'DATA & BUSINESS INTELLIGENCE',
    subtitle: 'Dimensional Modeling & Real-Time Analytics',
    summary:
      'Transforming flat accounting ledgers into relational star schemas and dynamic Power BI dashboards that isolate margin shifts, cash cycles, and budget variances.',
    connectedProject: 'Power BI Executive Model',
    connectedSkills: ['Power BI & DAX Formulas', 'Dimensional Star-Schemas', 'Power Query Automated ETL', 'Budget Variance Decomposition'],
    icon: '📊',
    theme: 'cyan',
  },
  {
    id: 'ai-automation',
    title: 'AI & AUTOMATION',
    subtitle: 'Document Parsing & Autonomous Verification',
    summary:
      'Designing experimental agent workflows, prompt systems, and rule engines to eliminate manual entry, parse receipts/invoices, and validate ledger schemas.',
    connectedProject: 'AI Agent & Automation Lab',
    connectedSkills: ['Document Extraction (OCR/LLM)', 'JSON Schema Validation', 'Rule-Based Bank Feed Matching', 'Anomaly Detection Screening'],
    icon: '⚡',
    theme: 'purple',
  },
  {
    id: 'digital-systems',
    title: 'DIGITAL ACCOUNTING SYSTEMS',
    subtitle: 'Cloud Platforms & Computerized Practice',
    summary:
      'Certified setup and management of computerized accounting environments across Service, Trading, and Manufacturing organizations using cloud platforms.',
    connectedProject: 'Certified Practice',
    connectedSkills: ['QuickBooks Online ProAdvisor', 'Xero Associate Accounting', 'Sage Computerized Systems', 'Advanced Excel Financial Modeling'],
    icon: '☁️',
    theme: 'emerald',
  },
]

export default function CapabilitiesMatrix() {
  const reduced = useReducedMotion()
  const [activeCapId, setActiveCapId] = useState<string>('accounting')

  const activeNode = CAPABILITY_ECOSYSTEM.find((c) => c.id === activeCapId) || CAPABILITY_ECOSYSTEM[0]

  return (
    <section className="section capabilities-ecosystem-section" id="capabilities" aria-label="Capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>INTERACTIVE CAPABILITY ECOSYSTEM</span>
          </div>
          <h2 className="capabilities-title">Core capabilities &amp; connections.</h2>
          <p className="capabilities-subtitle">
            An interconnected discipline matrix uniting statutory accounting rigor, data modeling, automated intelligence, and modern audit methodology.
          </p>
        </div>

        {/* Interactive Capability Ecosystem Grid */}
        <div className="capabilities-grid">
          {CAPABILITY_ECOSYSTEM.map((node, index) => {
            const isActive = activeCapId === node.id

            return (
              <motion.div
                key={node.id}
                className={`capability-card capability-card--${node.theme} ${
                  isActive ? 'capability-card--active' : ''
                }`}
                onMouseEnter={() => setActiveCapId(node.id)}
                onClick={() => setActiveCapId(node.id)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="cap-card-top">
                  <span className="cap-icon" aria-hidden="true">{node.icon}</span>
                  <span className="cap-indicator-pill">Interactive</span>
                </div>

                <h3 className="cap-card-title">{node.title}</h3>
                <h4 className="cap-card-subtitle">{node.subtitle}</h4>
                <p className="cap-card-summary">{node.summary}</p>

                {/* Connection preview chips */}
                <div className="cap-connected-strip">
                  <span className="cap-connected-label">Connected Focus:</span>
                  <div className="cap-mini-tags">
                    {node.connectedSkills.slice(0, 2).map((skill) => (
                      <span key={skill} className="cap-mini-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Live Active Ecosystem Inspector Panel */}
        <motion.div
          className={`capability-inspector capability-inspector--${activeNode.theme}`}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inspector-left">
            <div className="inspector-badge">
              <span className="inspector-badge-dot" />
              <span>ACTIVE CAPABILITY EXPLORATION</span>
            </div>
            <h4 className="inspector-title">{activeNode.title}</h4>
            <p className="inspector-summary">{activeNode.summary}</p>
            {activeNode.connectedProject && (
              <div className="inspector-project-link">
                <span className="link-label">Direct Portfolio Connection:</span>
                <span className="link-value">{activeNode.connectedProject}</span>
              </div>
            )}
          </div>

          <div className="inspector-right">
            <span className="inspector-skills-header">APPLIED SKILLS &amp; METHODOLOGY:</span>
            <div className="inspector-skills-grid">
              {activeNode.connectedSkills.map((skill) => (
                <div key={skill} className="inspector-skill-pill">
                  <span className="skill-check">✔</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
