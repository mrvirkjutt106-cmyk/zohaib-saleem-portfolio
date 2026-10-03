import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '../../data/siteData'
import './SystemShowcase.css'

/* ── Workflow Step Definition ───────────────────────────── */
interface WorkflowStep {
  id: string
  num: string
  title: string
  desc: string
}

/* ── Project Showcase Data Contract ─────────────────────── */
interface CaseStudyProject {
  id: string
  num: string
  typeTag: string
  title: string
  subtitle: string
  purpose: string
  workflowTitle: string
  workflowSteps: WorkflowStep[]
  supportingConcepts: string[]
  toolset: string[]
  statusScope: string
  image: string
  imageAlt: string
  accent: 'blue' | 'emerald'
}

const CASE_STUDIES: CaseStudyProject[] = [
  {
    id: 'personal-erp',
    num: '01',
    typeTag: 'PERSONAL PROTOTYPE',
    title: 'PERSONAL ERP ACCOUNTING SYSTEM',
    subtitle: 'Personal prototype for day-to-day financial tracking',
    purpose: 'A personal prototype for day-to-day financial tracking.',
    workflowTitle: 'ACCOUNTING WORKFLOW PIPELINE',
    workflowSteps: [
      { id: 'tx',    num: '01', title: 'TRANSACTIONS',    desc: 'Recording of bank movements, cash receipts, and expense invoices' },
      { id: 'class', num: '02', title: 'CLASSIFICATION',  desc: 'Categorization aligned to an editable chart of accounts' },
      { id: 'de',    num: '03', title: 'DOUBLE ENTRY',    desc: 'Double-entry balancing rules checked before posting' },
      { id: 'gl',    num: '04', title: 'LEDGER',          desc: 'General ledger record-keeping and trial balance verification' },
      { id: 'recon', num: '05', title: 'RECONCILIATION',  desc: 'Bank statement matching and tracking of suspense differences' },
      { id: 'rep',   num: '06', title: 'REPORTING',       desc: 'Monthly, quarterly, and annual balance sheet and P&L drafts' },
      { id: 'tax',   num: '07', title: 'TAX SUPPORT',     desc: 'Tax-return drafting support and preliminary tax schedules' },
    ],
    supportingConcepts: [
      'Double-entry records',
      'Monthly / quarterly / yearly reporting',
      'Reconciliation',
      'Tax-return drafting support',
      'Editable categories/accounts',
    ],
    toolset: [
      'Advanced Excel',
      'QuickBooks Online',
      'Xero',
      'Financial Reporting Formats',
      'Tax Schedules',
    ],
    statusScope:
      'Personal prototype engineered for day-to-day personal financial tracking and applied CAF accounting study. Independent learning project; not a commercial software product.',
    image: IMAGES.projectErp,
    imageAlt: 'Personal ERP Accounting System — Transparent Workspace Interface Artwork',
    accent: 'blue',
  },
  {
    id: 'ai-agent-lab',
    num: '02',
    typeTag: 'EXPERIMENTAL / RESEARCH PROTOTYPE',
    title: 'AI AGENT & AUTOMATION LAB',
    subtitle: 'AI-assisted document and accounting workflow automation research',
    purpose:
      'Experimental environment for exploring AI agents, document processing, and accounting workflow automation.',
    workflowTitle: 'DOCUMENT & AUTOMATION WORKFLOW',
    workflowSteps: [
      { id: 'doc',     num: '01', title: 'DOCUMENTS',      desc: 'Ingestion of sample PDF receipts, invoices, and bank files' },
      { id: 'extract', num: '02', title: 'EXTRACTION',     desc: 'Document processing and automated text extraction' },
      { id: 'class',   num: '03', title: 'CLASSIFICATION', desc: 'Transaction categorization and account mapping' },
      { id: 'valid',   num: '04', title: 'VALIDATION',     desc: 'Mathematical validation, total verification, and duplicate checks' },
      { id: 'match',   num: '05', title: 'MATCHING',       desc: 'Transaction matching against bank records and ledger items' },
      { id: 'auto',    num: '06', title: 'AUTOMATION',     desc: 'Workflow automation for recurring processing steps' },
      { id: 'anal',    num: '07', title: 'ANALYSIS',       desc: 'Financial analysis, variance exploration, and trend summaries' },
      { id: 'rep',     num: '08', title: 'REPORTING',       desc: 'AI-assisted reporting and draft summary generation' },
    ],
    supportingConcepts: [
      'Document extraction',
      'Transaction categorization',
      'Reconciliation',
      'Financial analysis',
      'Workflow automation',
      'AI-assisted reporting',
    ],
    toolset: [
      'Python',
      'Document Extraction Tools',
      'Data Validation Logic',
      'Power BI (Visual Analytics)',
      'AI Prompting',
    ],
    statusScope:
      'Experimental personal research lab exploring AI-assisted document processing and accounting workflow automation research. Independent learning project; no commercial deployment or client work.',
    image: IMAGES.projectAi,
    imageAlt: 'AI Agent & Automation Lab — Transparent Workspace Interface Artwork',
    accent: 'emerald',
  },
]

export default function SystemShowcase() {
  const reduced = useReducedMotion()

  // Track active workflow step per project for interactive drill-down
  const [activeStep, setActiveStep] = useState<{ [projectId: string]: string }>({
    'personal-erp': 'de',
    'ai-agent-lab': 'extract',
  })

  return (
    <section className="section showcase-section" id="projects" aria-label="Selected Work">
      <div className="container showcase-container">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="showcase-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>SELECTED WORK</span>
          </div>

          <h2 className="showcase-title">
            Applied Systems &amp; Explorations.
          </h2>

          <p className="showcase-intro">
            Translating accounting discipline into functional prototypes, structured data models, and automated financial workflows. These projects represent applied experiments in personal financial tracking and intelligent automation.
          </p>
        </div>

        {/* ── Featured Projects List ─────────────────────────── */}
        <div className="showcase-list">
          {CASE_STUDIES.map((project, index) => {
            const currentStepId = activeStep[project.id]
            const activeStepObj =
              project.workflowSteps.find((s) => s.id === currentStepId) || project.workflowSteps[0]

            return (
              <motion.article
                key={project.id}
                className={`case-study case-study--${project.accent}`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* 1. Project Identity Header */}
                <div className="case-study__header">
                  <div className="case-study__meta">
                    <span className="case-study__num">{project.num}</span>
                    <span className="case-study__type-tag">{project.typeTag}</span>
                  </div>

                  <h3 className="case-study__title">{project.title}</h3>
                  <p className="case-study__subtitle">{project.subtitle}</p>
                  <p className="case-study__purpose">{project.purpose}</p>
                </div>

                {/* 2. Visual-First Arena: Large Floating Transparent Artwork */}
                <div className="case-study__visual-stage">
                  {/* Atmospheric Environmental Halos */}
                  <div
                    className={`visual-stage__halo visual-stage__halo--${project.accent}`}
                    aria-hidden="true"
                  />

                  {/* Architectural Framing Grid Crosshairs */}
                  <div className="visual-stage__frame" aria-hidden="true">
                    <span className="frame-cross frame-cross--tl">+</span>
                    <span className="frame-cross frame-cross--tr">+</span>
                    <span className="frame-cross frame-cross--bl">+</span>
                    <span className="frame-cross frame-cross--br">+</span>
                  </div>

                  {/* Large Transparent PNG Image (No baked box, genuine alpha) */}
                  <div className="visual-stage__artwork-wrap">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="visual-stage__img"
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                </div>

                {/* 3. Integrated Visual Workflow Sequence */}
                <div className="case-study__workflow-block">
                  <div className="workflow-block__header">
                    <span className="workflow-block__label">{project.workflowTitle}</span>
                    <span className="workflow-block__instruction">
                      Select any stage to inspect the processing logic
                    </span>
                  </div>

                  {/* Sequential Pathway Strip */}
                  <div
                    className="workflow-pipeline"
                    role="tablist"
                    aria-label={`${project.title} Workflow Pipeline`}
                  >
                    {project.workflowSteps.map((step, idx) => {
                      const isActive = step.id === currentStepId
                      return (
                        <div key={step.id} className="workflow-step-wrapper">
                          <button
                            type="button"
                            role="tab"
                            aria-selected={isActive}
                            className={`workflow-step-btn ${isActive ? 'is-active' : ''}`}
                            onClick={() => setActiveStep({ ...activeStep, [project.id]: step.id })}
                          >
                            <span className="step-btn__num">{step.num}</span>
                            <span className="step-btn__title">{step.title}</span>
                          </button>
                          {idx < project.workflowSteps.length - 1 && (
                            <span className="workflow-arrow" aria-hidden="true">→</span>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  {/* Active Step Explainer Strip */}
                  {activeStepObj && (
                    <motion.div
                      key={activeStepObj.id}
                      className="workflow-explainer"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="explainer__badge">STAGE {activeStepObj.num}</span>
                      <strong className="explainer__title">{activeStepObj.title}:</strong>
                      <span className="explainer__desc">{activeStepObj.desc}</span>
                    </motion.div>
                  )}
                </div>

                {/* 4. Compact Supporting Details: Architecture, Tools & Status */}
                <div className="case-study__details-grid">
                  {/* Column 1: Core System Concepts */}
                  <div className="details-card">
                    <span className="details-card__heading">CORE CONCEPTS &amp; CAPABILITIES</span>
                    <ul className="details-list">
                      {project.supportingConcepts.map((concept) => (
                        <li key={concept} className="details-item">
                          <span className="details-check" aria-hidden="true">✔</span>
                          <span className="details-text">{concept}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Applied Toolset */}
                  <div className="details-card">
                    <span className="details-card__heading">TOOLS &amp; AREAS EXPLORED</span>
                    <div className="tool-badges">
                      {project.toolset.map((tool) => (
                        <span key={tool} className="tool-badge">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Grounded Scope Boundary */}
                  <div className="details-card details-card--scope">
                    <span className="details-card__heading">PROTOTYPE SCOPE &amp; BOUNDARY</span>
                    <p className="scope-text">{project.statusScope}</p>
                    <div className="scope-indicator">
                      <span className="scope-dot" />
                      <span className="scope-label">Grounded Learning &amp; Research</span>
                    </div>
                  </div>
                </div>

                {/* Subtle Divider between Project 01 and Project 02 */}
                {index < CASE_STUDIES.length - 1 && (
                  <div className="case-study__separator" aria-hidden="true" />
                )}
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

