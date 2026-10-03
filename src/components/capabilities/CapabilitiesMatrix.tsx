import { useState, useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './CapabilitiesMatrix.css'

/* ── Five Approved Domains Contract ─────────────────────── */
interface CapabilityDomain {
  id: string
  num: string
  title: string
  statusTag: string
  desc: string
  items: string[]
  accent: 'blue' | 'indigo' | 'cyan' | 'violet' | 'navy'
  isDeveloping?: boolean
}

const CAPABILITY_DOMAINS: CapabilityDomain[] = [
  {
    id: 'accounting',
    num: '01',
    title: 'ACCOUNTING',
    statusTag: 'CORE FOUNDATION',
    desc: 'Double-entry bookkeeping, financial reporting fundamentals, and ledger balance reconciliation.',
    items: ['Financial Reporting', 'Bookkeeping', 'Reconciliation'],
    accent: 'blue',
  },
  {
    id: 'data-bi',
    num: '02',
    title: 'DATA & BI',
    statusTag: 'ANALYTICAL MODELING',
    desc: 'Transforming ledger transactions into structured relational analytics, variance tracking, and decision models.',
    items: ['Microsoft Excel', 'Power BI', 'Data Analytics'],
    accent: 'indigo',
  },
  {
    id: 'digital-accounting',
    num: '03',
    title: 'DIGITAL ACCOUNTING',
    statusTag: 'COMPUTERIZED PRACTICE',
    desc: 'Practical use of computerized accounting environments and bookkeeping workflows.',
    items: ['QuickBooks Online', 'Xero', 'Sage'],
    accent: 'cyan',
  },
  {
    id: 'ai-automation',
    num: '04',
    title: 'AI & AUTOMATION',
    statusTag: 'EXPERIMENTAL RESEARCH',
    desc: 'Prototyping document processing routines, automated validation logic, and agent-assisted accounting tasks.',
    items: ['Document Workflows', 'Workflow Automation', 'AI Agents'],
    accent: 'violet',
  },
  {
    id: 'audit-foundation',
    num: '05',
    title: 'AUDIT FOUNDATION',
    statusTag: 'FOUNDATION / DEVELOPING',
    desc: 'Foundational study of controls, verification procedures, and reconciliation.',
    items: ['Controls', 'Verification', 'Reconciliation'],
    accent: 'navy',
    isDeveloping: true,
  },
]

export default function CapabilitiesMatrix() {
  const reduced = useReducedMotion()
  const uid = useId()
  const [activeDomain, setActiveDomain] = useState<string | null>(null)

  return (
    <section
      className="section capabilities-section"
      id="capabilities"
      aria-label="Capabilities Matrix"
    >
      <div className="container capabilities-container">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="capabilities-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>CAPABILITIES</span>
          </div>

          <h2 className="capabilities-title">
            An integrated professional system.
          </h2>

          <p className="capabilities-intro">
            Accounting discipline forms the core. Around it, data modeling, computerized platforms, and workflow automation develop systematically toward future audit and assurance controls.
          </p>

          {/* Quick Flow Breadcrumb */}
          <div className="capabilities-flow-bar" aria-hidden="true">
            {CAPABILITY_DOMAINS.map((domain, i) => (
              <div key={domain.id} className="flow-bar-step">
                <span className={`flow-bar-tag ${domain.isDeveloping ? 'flow-bar-tag--developing' : ''}`}>
                  {domain.num} {domain.title}
                </span>
                {i < CAPABILITY_DOMAINS.length - 1 && (
                  <span className="flow-bar-sep">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Visual Ecosystem: Connected Stepped Pathway ──── */}
        <div className="capability-ecosystem" role="region" aria-label="Capability Progression Map">

          {/* Desktop Flowing SVG Vector Spine */}
          <svg
            className="ecosystem-svg-track"
            viewBox="0 0 1000 780"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`grad-spine-${uid}`} x1="500" y1="0" x2="500" y2="780" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.45" />
                <stop offset="30%" stopColor="#4F46E5" stopOpacity="0.40" />
                <stop offset="60%" stopColor="#0284C7" stopOpacity="0.40" />
                <stop offset="85%" stopColor="#7C3AED" stopOpacity="0.40" />
                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.30" />
              </linearGradient>

              {/* Faint crosshair grid pattern */}
              <pattern id={`pattern-grid-${uid}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="rgba(37, 99, 235, 0.08)" />
              </pattern>
            </defs>

            <rect width="1000" height="780" fill={`url(#pattern-grid-${uid})`} opacity="0.6" />

            {/* Continuous Flowing S-Curve Spine linking 01 -> 02 -> 03 -> 04 -> 05 */}
            <motion.path
              d="M 280 90 C 280 180, 720 120, 720 230 C 720 340, 280 290, 280 400 C 280 510, 720 460, 720 570 C 720 660, 500 640, 500 710"
              stroke={`url(#grad-spine-${uid})`}
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Strategic Confluence Node Points */}
            <circle cx="280" cy="90" r="6" fill="#2563EB" fillOpacity="0.8" />
            <circle cx="720" cy="230" r="6" fill="#4F46E5" fillOpacity="0.8" />
            <circle cx="280" cy="400" r="6" fill="#0284C7" fillOpacity="0.8" />
            <circle cx="720" cy="570" r="6" fill="#7C3AED" fillOpacity="0.8" />
            <circle cx="500" cy="710" r="7" fill="#1E3A8A" fillOpacity="0.9" stroke="#FFFFFF" strokeWidth="2" />
          </svg>

          {/* Stepped Capability Stations */}
          <div className="ecosystem-nodes-layer">
            {CAPABILITY_DOMAINS.map((domain, index) => {
              const isLeft = index % 2 === 0 && index !== 4
              const isDestination = index === 4
              const isActive = activeDomain === domain.id

              return (
                <motion.div
                  key={domain.id}
                  className={`capability-station capability-station--${domain.accent} ${
                    isDestination
                      ? 'capability-station--destination'
                      : isLeft
                      ? 'capability-station--left'
                      : 'capability-station--right'
                  } ${isActive ? 'is-active' : ''}`}
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.09 }}
                  onMouseEnter={() => setActiveDomain(domain.id)}
                  onMouseLeave={() => setActiveDomain(null)}
                >
                  {/* Station Header */}
                  <div className="station-top">
                    <div className="station-meta">
                      <span className="station-num">{domain.num}</span>
                      <span className={`station-tag ${domain.isDeveloping ? 'station-tag--developing' : ''}`}>
                        {domain.statusTag}
                      </span>
                    </div>

                    {domain.isDeveloping && (
                      <span className="station-trajectory-label">Future Direction</span>
                    )}
                  </div>

                  {/* Title & Concise Summary */}
                  <h3 className="station-title">{domain.title}</h3>
                  <p className="station-desc">{domain.desc}</p>

                  {/* Concise Capability Chips (2-3 items) */}
                  <div className="station-chips-row">
                    <span className="chips-row-label">CAPABILITIES:</span>
                    <div className="chips-list">
                      {domain.items.map((item) => (
                        <span key={item} className="station-chip">
                          <span className="chip-bullet" aria-hidden="true">✔</span>
                          <span className="chip-text">{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Flow Direction Indicator (for desktop stepped rhythm) */}
                  {!isDestination && (
                    <div className="station-flow-indicator" aria-hidden="true">
                      <span className="flow-line" />
                      <span className="flow-arrow">↓</span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

