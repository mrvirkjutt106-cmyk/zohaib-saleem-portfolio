import { useRef, useId, useState } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import { IMAGES } from '../../data/siteData'
import './PhilosophySpread.css'

/* ── Five Core Methodology Domains ─────────────────────── */
interface DomainNode {
  id: string
  num: string
  title: string
  label: string
  accent: 'blue' | 'indigo' | 'cyan' | 'violet' | 'navy'
  badge?: string
  /** Fractional coordinates on the 1000x660 canvas (0–1) */
  fx: number
  fy: number
  /** Bezier control points for incoming connector */
  cpx: number
  cpy: number
}

const DOMAINS: DomainNode[] = [
  {
    id: 'accounting',
    num: '01',
    title: 'ACCOUNTING',
    label: 'Financial reporting / Double-entry thinking',
    accent: 'blue',
    fx: 0.50,
    fy: 0.08,
    cpx: 0.50,
    cpy: 0.16,
  },
  {
    id: 'data',
    num: '02',
    title: 'DATA',
    label: 'Financial information / Decision analytics',
    accent: 'indigo',
    fx: 0.15,
    fy: 0.32,
    cpx: 0.29,
    cpy: 0.32,
  },
  {
    id: 'digital',
    num: '03',
    title: 'DIGITAL SYSTEMS',
    label: 'Accounting workflows / Structured systems',
    accent: 'cyan',
    fx: 0.15,
    fy: 0.74,
    cpx: 0.27,
    cpy: 0.74,
  },
  {
    id: 'ai',
    num: '04',
    title: 'AI & AUTOMATION',
    label: 'Document processing / Workflow automation',
    accent: 'violet',
    fx: 0.85,
    fy: 0.32,
    cpx: 0.71,
    cpy: 0.32,
  },
  {
    id: 'audit',
    num: '05',
    title: 'AUDIT & ASSURANCE',
    label: 'Controls / Reconciliation / Future direction',
    accent: 'navy',
    badge: 'Future Direction',
    fx: 0.85,
    fy: 0.74,
    cpx: 0.73,
    cpy: 0.74,
  },
]

/* Logical SVG Canvas Dimensions */
const CANVAS_W = 1000
const CANVAS_H = 660

/* Central Portrait Anchor Center */
const ANCHOR_X = CANVAS_W * 0.50
const ANCHOR_Y = CANVAS_H * 0.48

/* Accent color mapping */
const ACCENT_COLORS: Record<string, string> = {
  blue:   '#2563EB',
  indigo: '#4F46E5',
  cyan:   '#0284C7',
  violet: '#7C3AED',
  navy:   '#1E3A8A',
}

export default function PhilosophySpread() {
  const reduced = useReducedMotion()
  const uid = useId()
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 16 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  })

  const drawConnector = (delay = 0) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: {
      pathLength: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
      opacity:    { duration: 0.25, delay },
    },
  })

  /* Target connection endpoints at or just before the visible edge of the portrait */
  const getConnectorEndpoint = (node: DomainNode): { x: number; y: number } => {
    if (node.id === 'accounting') {
      return { x: 500, y: 228 }
    } else if (node.id === 'data') {
      return { x: 432, y: 265 }
    } else if (node.id === 'digital') {
      return { x: 390, y: 430 }
    } else if (node.id === 'ai') {
      return { x: 568, y: 265 }
    } else if (node.id === 'audit') {
      return { x: 610, y: 430 }
    }
    return { x: ANCHOR_X, y: ANCHOR_Y }
  }

  /* Generate smooth curved paths from node directly to portrait */
  const getConnectorPath = (node: DomainNode): string => {
    const startX = node.fx * CANVAS_W
    const startY = node.fy * CANVAS_H
    const cX = node.cpx * CANVAS_W
    const cY = node.cpy * CANVAS_H
    const { x: targetX, y: targetY } = getConnectorEndpoint(node)

    return `M ${startX} ${startY} Q ${cX} ${cY} ${targetX} ${targetY}`
  }

  return (
    <section
      className="section identity-section"
      id="about"
      aria-label="Identity & Methodology"
      ref={sectionRef}
    >
      <div className="container identity-container">

        {/* ── Section Header ─────────────────────────────────── */}
        <motion.div className="identity-header" {...fadeUp(0)}>
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>IDENTITY &amp; METHODOLOGY</span>
          </div>

          <h2 className="identity-title">
            How I build around accounting.
          </h2>

          <p className="identity-intro">
            Accounting is my foundation — providing statutory discipline, double-entry rigor, and financial truth. Around it, I construct data workflows, modern digital systems, and intelligent automation, directing my capabilities toward future audit and assurance.
          </p>

          {/* Sequential visual pathway ribbon */}
          <div className="identity-flow-strip" aria-label="Methodology Progression Flow">
            {DOMAINS.map((domain, idx) => (
              <div key={domain.id} className="flow-step-wrap">
                <button
                  type="button"
                  className={`flow-step-pill flow-step-pill--${domain.accent} ${activeNode === domain.id ? 'is-active' : ''}`}
                  onMouseEnter={() => setActiveNode(domain.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  onClick={() => setActiveNode(activeNode === domain.id ? null : domain.id)}
                  aria-label={`Domain ${domain.num}: ${domain.title}`}
                >
                  <span className="flow-step-num">{domain.num}</span>
                  <span className="flow-step-name">{domain.title}</span>
                </button>
                {idx < DOMAINS.length - 1 && (
                  <span className="flow-step-arrow" aria-hidden="true">→</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Radial Visual Ecosystem (Desktop & Tablet) ─────── */}
        <div className="identity-radial-stage" aria-hidden="false">

          {/* SVG Connector & Orbit Hairline Layer */}
          <svg
            className="identity-radial-svg"
            viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Precision Arrow Markers pointing directly toward the portrait */}
              {DOMAINS.map((node) => (
                <marker
                  key={`arrow-${uid}-${node.id}`}
                  id={`arrow-${uid}-${node.id}`}
                  viewBox="0 0 10 10"
                  refX="7.5"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path
                    d="M 1 2 L 7.5 5 L 1 8 z"
                    fill={ACCENT_COLORS[node.accent]}
                  />
                </marker>
              ))}

              {/* Gradients for thin connector lines leading to portrait */}
              {DOMAINS.map((node) => {
                const target = getConnectorEndpoint(node)
                return (
                  <linearGradient
                    key={`grad-${uid}-${node.id}`}
                    id={`grad-${uid}-${node.id}`}
                    gradientUnits="userSpaceOnUse"
                    x1={node.fx * CANVAS_W}
                    y1={node.fy * CANVAS_H}
                    x2={target.x}
                    y2={target.y}
                  >
                    <stop offset="0%" stopColor={ACCENT_COLORS[node.accent]} stopOpacity="0.85" />
                    <stop offset="65%" stopColor={ACCENT_COLORS[node.accent]} stopOpacity="0.65" />
                    <stop offset="100%" stopColor={ACCENT_COLORS[node.accent]} stopOpacity="0.95" />
                  </linearGradient>
                )
              })}

              {/* Central glow filter */}
              <filter id={`glow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Architectural Radial Orbit Rings */}
            <circle
              cx={ANCHOR_X}
              cy={ANCHOR_Y}
              r="290"
              className="radial-orbit-ring radial-orbit-ring--outer"
            />
            <circle
              cx={ANCHOR_X}
              cy={ANCHOR_Y}
              r="190"
              className="radial-orbit-ring radial-orbit-ring--mid"
            />
            <circle
              cx={ANCHOR_X}
              cy={ANCHOR_Y}
              r="115"
              className="radial-orbit-ring radial-orbit-ring--inner"
            />

            {/* Subtle Crosshair Axis Hairlines */}
            <line
              x1={ANCHOR_X - 320}
              y1={ANCHOR_Y}
              x2={ANCHOR_X + 320}
              y2={ANCHOR_Y}
              className="radial-axis-hairline"
            />
            <line
              x1={ANCHOR_X}
              y1={ANCHOR_Y - 260}
              x2={ANCHOR_X}
              y2={ANCHOR_Y + 260}
              className="radial-axis-hairline"
            />

            {/* Thin Animated Curved Connector Lines */}
            {DOMAINS.map((node, i) => {
              const isActive = activeNode === node.id
              return (
                <g key={`conn-${node.id}`}>
                  {/* Subtle wider glow trace on active */}
                  {isActive && (
                    <path
                      d={getConnectorPath(node)}
                      stroke={ACCENT_COLORS[node.accent]}
                      strokeWidth="3.5"
                      strokeOpacity="0.25"
                      fill="none"
                      strokeLinecap="round"
                    />
                  )}
                  <motion.path
                    d={getConnectorPath(node)}
                    stroke={`url(#grad-${uid}-${node.id})`}
                    strokeWidth={isActive ? '2.0' : '1.25'}
                    strokeDasharray={node.id === 'audit' ? '4 4' : 'none'}
                    markerEnd={`url(#arrow-${uid}-${node.id})`}
                    fill="none"
                    strokeLinecap="round"
                    {...drawConnector(0.3 + i * 0.1)}
                  />
                  {/* Anchor terminal dots */}
                  <circle
                    cx={node.fx * CANVAS_W}
                    cy={node.fy * CANVAS_H}
                    r={isActive ? 4 : 2.5}
                    fill={ACCENT_COLORS[node.accent]}
                    className="radial-anchor-dot"
                  />
                </g>
              )
            })}
          </svg>

          {/* Central Anchor: Transparent Full-Body Portrait (100% Uncropped) */}
          <motion.div
            className="identity-portrait-anchor"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Architectural aura back-glows */}
            <div className="identity-portrait-halo identity-portrait-halo--blue" aria-hidden="true" />
            <div className="identity-portrait-halo identity-portrait-halo--indigo" aria-hidden="true" />

            {/* Grounding pedestal shadow for natural architectural presence */}
            <div className="identity-portrait-pedestal" aria-hidden="true" />

            {/* Full-Body Portrait Image — Complete figure preserved from head to shoes */}
            <div className="identity-portrait-figure">
              <img
                src={IMAGES.fullBody}
                alt="Zohaib Saleem — Full-body portrait standing in professional business attire"
                className="identity-portrait-img"
                loading="lazy"
                draggable="false"
              />
            </div>
          </motion.div>

          {/* Five Radial Domain Cards */}
          {DOMAINS.map((domain, i) => {
            const isLeft = domain.fx < 0.5
            const isCenter = domain.fx === 0.5
            const isActive = activeNode === domain.id

            return (
              <motion.div
                key={domain.id}
                className={`domain-card domain-card--${domain.accent} ${
                  isCenter ? 'domain-card--top-center' : isLeft ? 'domain-card--left' : 'domain-card--right'
                } ${isActive ? 'is-active' : ''}`}
                style={{
                  left: `${domain.fx * 100}%`,
                  top: `${domain.fy * 100}%`,
                }}
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.45 + i * 0.08 }}
                onMouseEnter={() => setActiveNode(domain.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="domain-card__top">
                  <span className="domain-card__num">{domain.num}</span>
                  {domain.badge && (
                    <span className="domain-card__badge">{domain.badge}</span>
                  )}
                </div>

                <div className="domain-card__title-row">
                  <h3 className="domain-card__title">{domain.title}</h3>
                </div>

                <p className="domain-card__label">{domain.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* ── Mobile Vertical Methodology Pathway (< 768px) ─── */}
        <div className="identity-mobile-pathway" aria-label="Methodology Visual Pathway">

          {/* Mobile Full-Body Portrait Card */}
          <motion.div className="mobile-portrait-card" {...fadeUp(0.1)}>
            <div className="mobile-portrait-halo" aria-hidden="true" />
            <div className="mobile-portrait-pedestal" aria-hidden="true" />
            <div className="mobile-portrait-figure">
              <img
                src={IMAGES.fullBody}
                alt="Zohaib Saleem — Full-body portrait"
                className="mobile-portrait-img"
                loading="lazy"
                draggable="false"
              />
            </div>
            <div className="mobile-portrait-caption">
              <span className="mobile-caption-tag">CORE ANCHOR</span>
              <span className="mobile-caption-text">Five interconnected domains built around accounting</span>
            </div>
          </motion.div>

          {/* Vertical Visual Timeline Spine with 5 Domains */}
          <div className="mobile-timeline-spine">
            <div className="mobile-spine-track" aria-hidden="true" />

            {DOMAINS.map((domain, i) => (
              <motion.div
                key={domain.id}
                className={`mobile-domain-item mobile-domain-item--${domain.accent}`}
                {...fadeUp(0.18 + i * 0.08)}
              >
                {/* Node indicator with connection anchor */}
                <div className="mobile-item-pip">
                  <span className="mobile-pip-num">{domain.num}</span>
                </div>

                {/* Content Card */}
                <div className="mobile-item-card">
                  <div className="mobile-item-header">
                    <h3 className="mobile-item-title">{domain.title}</h3>
                    {domain.badge && (
                      <span className="mobile-item-badge">{domain.badge}</span>
                    )}
                  </div>
                  <p className="mobile-item-label">{domain.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

