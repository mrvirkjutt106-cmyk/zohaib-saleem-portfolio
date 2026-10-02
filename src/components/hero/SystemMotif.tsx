import { useState } from 'react'
import './SystemMotif.css'

interface NodeData {
  id: string
  code: string
  label: string
  sub: string
  desc: string
  x: number
  y: number
}

const NODES: NodeData[] = [
  {
    id: 'acc',
    code: 'AX-01',
    label: 'ACCOUNTING',
    sub: 'Statutory Ledger Rigor',
    desc: 'IFRS reporting standards, double-entry integrity, and Chart of Accounts architecture.',
    x: 18,
    y: 20,
  },
  {
    id: 'data',
    code: 'AX-02',
    label: 'DATA & BI',
    sub: 'Dimensional Analytics',
    desc: 'Relational modeling, Power BI telemetry, and financial variance tracking.',
    x: 82,
    y: 20,
  },
  {
    id: 'ai',
    code: 'AX-03',
    label: 'AI & AUTOMATION',
    sub: 'Agentic Workflows',
    desc: 'Automated invoice document extraction, anomaly screening, and process bots.',
    x: 18,
    y: 80,
  },
  {
    id: 'audit',
    code: 'AX-04',
    label: 'AUDIT & ASSURANCE',
    sub: 'Evidence & Control',
    desc: 'Internal control evaluations, risk-based thinking, and verifiable audit trails.',
    x: 82,
    y: 80,
  },
]

export default function SystemMotif() {
  const [activeNode, setActiveNode] = useState<string>('acc')

  const activeInfo = NODES.find((n) => n.id === activeNode) || NODES[0]

  return (
    <div className="system-motif" aria-label="Interactive Quad-Discipline Convergence System">
      {/* Precision Blueprint Lines */}
      <svg className="system-motif__svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vectorGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="vectorGradGold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Circular Boundary */}
        <circle cx="200" cy="200" r="170" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="110" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1" />
        <circle cx="200" cy="200" r="50" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1" strokeDasharray="2 4" />

        {/* Diagonal Conduits Connecting Axes */}
        <line x1="72" y1="80" x2="328" y2="320" stroke="url(#vectorGradCyan)" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="328" y1="80" x2="72" y2="320" stroke="url(#vectorGradGold)" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Orthogonal Crosshair Axis */}
        <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(148, 163, 184, 0.1)" strokeWidth="1" />

        {/* Center Convergence Core */}
        <circle cx="200" cy="200" r="8" fill="#0E1D38" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="200" cy="200" r="3" fill="#38BDF8" />
      </svg>

      {/* Interactive Node Anchors */}
      <div className="system-motif__nodes">
        {NODES.map((node) => {
          const isSelected = activeNode === node.id
          return (
            <button
              key={node.id}
              type="button"
              className={`motif-node-btn ${isSelected ? 'motif-node-btn--active' : ''}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              onClick={() => setActiveNode(node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              aria-label={`Inspect ${node.label} discipline details`}
            >
              <span className="motif-node-dot" />
              <div className="motif-node-label-box">
                <span className="motif-node-code">{node.code}</span>
                <span className="motif-node-title">{node.label}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Center Interactive Telemetry Card */}
      <div className="system-motif__telemetry">
        <div className="telemetry-badge">
          <span className="telemetry-badge__code">{activeInfo.code}</span>
          <span className="telemetry-badge__sub">{activeInfo.sub}</span>
        </div>
        <p className="telemetry-desc">{activeInfo.desc}</p>
        <span className="telemetry-hint">HOVER / TAP AXIS TO INSPECT CONVERGENCE</span>
      </div>
    </div>
  )
}
