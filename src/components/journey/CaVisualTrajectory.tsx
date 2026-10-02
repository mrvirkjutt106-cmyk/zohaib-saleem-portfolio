import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './CaVisualTrajectory.css'

interface JourneyStep {
  step: string
  title: string
  subtitle: string
  description: string
  statusBadge: string
  isCompleted?: boolean
  isActive?: boolean
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Pre-Medical Education',
    subtitle: 'BISE Lahore • 90% Marks',
    description:
      'Completed Pre-Medical education with top-tier academic distinction (90%), building intense quantitative stamina, scientific method, and analytical discipline before choosing accountancy.',
    statusBadge: '90% Marks Distinction',
    isCompleted: true,
  },
  {
    step: '02',
    title: 'Independent Commercial Studies',
    subtitle: 'Strategic Transition to Accountancy',
    description:
      'Self-driven study and immersion into commercial principles, double-entry bookkeeping, and corporate finance, validating a deep natural affinity for financial systems.',
    statusBadge: 'Self-Driven Transition',
    isCompleted: true,
  },
  {
    step: '03',
    title: 'Foundation of CA (PRC)',
    subtitle: 'ICAP • Pre-Requisite Competencies',
    description:
      'Cleared all ICAP foundation examinations on the first attempt, proving rapid mastery of accounting mechanics, business economics, and commercial quantitative methods.',
    statusBadge: 'Cleared First Attempt',
    isCompleted: true,
  },
  {
    step: '04',
    title: 'CAF / CA-Intermediate',
    subtitle: 'ICAP • 5 of 8 Papers Passed',
    description:
      'Demonstrated statutory competence by clearing 5 rigorous exams across financial reporting, cost accounting, business law, taxation, and companies law.',
    statusBadge: '5 / 8 Passed • Active Prep',
    isActive: true,
  },
]

const PASSED_PAPERS = [
  {
    code: 'FAR-1',
    name: 'Financial Accounting & Reporting 1',
    domain: 'IAS/IFRS Framework & Statement Presentation',
  },
  {
    code: 'CMA',
    name: 'Cost & Management Accounting',
    domain: 'Standard Costing, Marginal Costing & Variances',
  },
  {
    code: 'BLAW',
    name: 'Business Law',
    domain: 'Commercial Contracts & Mercantile Law',
  },
  {
    code: 'TAX',
    name: 'Tax Practices',
    domain: 'Income Tax Ordinance & Sales Tax Statutes',
  },
  {
    code: 'Companies Law',
    name: 'Companies Law',
    domain: 'Companies Act 2017 & Corporate Compliance',
  },
]

const PREPARING_PAPERS = [
  {
    code: 'FAR-2',
    name: 'Financial Accounting & Reporting 2',
    domain: 'Consolidated Accounts & Complex Financial Instruments',
  },
  {
    code: 'MFA',
    name: 'Managerial & Financial Analysis',
    domain: 'Capital Budgeting, WACC & Working Capital Strategy',
  },
  {
    code: 'Audit & Assurance',
    name: 'Audit & Assurance',
    domain: 'International Standards on Auditing (ISAs) & Internal Controls',
  },
]

export default function CaVisualTrajectory() {
  const reduced = useReducedMotion()
  const [activeTab, setActiveTab] = useState<'all' | 'passed' | 'preparing'>('all')

  const stepFade = (index: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 },
  })

  return (
    <section className="section journey-trajectory-section" id="journey" aria-label="CA Journey">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>PROGRESSION &amp; RIGOR</span>
          </div>
          <h2 className="journey-title">The Chartered Accountancy Journey.</h2>
          <p className="journey-subtitle">
            A deliberate trajectory from empirical pre-medical sciences to statutory accounting, corporate taxation, and technology-driven audit.
          </p>
        </div>

        {/* 4-Step Interactive Horizontal/Vertical Visual Pipeline */}
        <div className="journey-pipeline">
          {JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              className={`journey-node ${step.isActive ? 'journey-node--active' : ''} ${
                step.isCompleted ? 'journey-node--completed' : ''
              }`}
              {...stepFade(idx)}
            >
              <div className="journey-node__tracker">
                <span className="node-step-num">{step.step}</span>
                <span className="node-status-icon">
                  {step.isCompleted ? '✓' : '●'}
                </span>
                {idx < JOURNEY_STEPS.length - 1 && <span className="node-connector-line" />}
              </div>

              <div className="journey-node__body">
                <span className="node-status-badge">{step.statusBadge}</span>
                <h3 className="node-title">{step.title}</h3>
                <h4 className="node-subtitle">{step.subtitle}</h4>
                <p className="node-desc">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CAF Examination Matrix: Passed vs Preparing */}
        <div className="caf-matrix-wrapper">
          <div className="caf-matrix-header">
            <div className="caf-matrix-title-group">
              <span className="matrix-badge">CAF EXAMINATION STATUS</span>
              <h3 className="matrix-heading">ICAP Modular Verification</h3>
            </div>

            {/* Filter Toggle */}
            <div className="matrix-toggle-group">
              <button
                type="button"
                className={`matrix-toggle-btn ${activeTab === 'all' ? 'matrix-toggle-btn--active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Papers (8)
              </button>
              <button
                type="button"
                className={`matrix-toggle-btn ${activeTab === 'passed' ? 'matrix-toggle-btn--active' : ''}`}
                onClick={() => setActiveTab('passed')}
              >
                Passed (5)
              </button>
              <button
                type="button"
                className={`matrix-toggle-btn ${activeTab === 'preparing' ? 'matrix-toggle-btn--active' : ''}`}
                onClick={() => setActiveTab('preparing')}
              >
                Preparing (3)
              </button>
            </div>
          </div>

          <div className="caf-matrix-grid">
            {/* Passed Papers Column */}
            {(activeTab === 'all' || activeTab === 'passed') && (
              <div className="caf-column caf-column--passed">
                <div className="caf-column-head">
                  <span className="caf-column-status-dot caf-column-status-dot--emerald" />
                  <span className="caf-column-label">PASSED PAPERS (5 OF 8)</span>
                </div>
                <div className="caf-papers-list">
                  {PASSED_PAPERS.map((paper) => (
                    <div key={paper.code} className="caf-paper-card caf-paper-card--passed">
                      <div className="paper-top">
                        <span className="paper-code">{paper.code}</span>
                        <span className="paper-status-pill">PASSED</span>
                      </div>
                      <h4 className="paper-name">{paper.name}</h4>
                      <p className="paper-domain">{paper.domain}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preparing Papers Column */}
            {(activeTab === 'all' || activeTab === 'preparing') && (
              <div className="caf-column caf-column--preparing">
                <div className="caf-column-head">
                  <span className="caf-column-status-dot caf-column-status-dot--amber" />
                  <span className="caf-column-label">CURRENTLY PREPARING (3 PAPERS)</span>
                </div>
                <div className="caf-papers-list">
                  {PREPARING_PAPERS.map((paper) => (
                    <div key={paper.code} className="caf-paper-card caf-paper-card--preparing">
                      <div className="paper-top">
                        <span className="paper-code">{paper.code}</span>
                        <span className="paper-status-pill paper-status-pill--amber">PREPARING</span>
                      </div>
                      <h4 className="paper-name">{paper.name}</h4>
                      <p className="paper-domain">{paper.domain}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
