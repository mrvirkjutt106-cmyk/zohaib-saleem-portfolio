import { IMAGES } from '../../data/siteData'
import './Projects.css'

const PROJECTS_DATA = [
  {
    num: '01',
    category: 'ACCOUNTING PROTOTYPE SYSTEM',
    title: 'Personal ERP Accounting System',
    img: IMAGES.projectErp,
    alt: 'Personal ERP Accounting System — Interactive accounting dashboard workspace',
    desc: 'A personal prototype accounting system developed for practical CAF knowledge integration, operational bookkeeping, structured double-entry ledger records, and multi-period financial reporting.',
    capabilities: [
      'Day-to-day transaction logging & general ledger balancing',
      'Structured double-entry accounting records & trial balance drafting',
      'Month-end & quarter-end reconciliation reports',
      'Year-end reporting & financial statement drafting support',
      'Tax-return drafting support & variance documentation',
    ],
    tools: ['Microsoft Excel', 'QuickBooks Online', 'Xero', 'Chart of Accounts'],
    disclaimer: 'Personal prototype application developed for practical CAF knowledge integration. (Not enterprise-grade).',
    reversed: false,
  },
  {
    num: '02',
    category: 'EXPERIMENTAL AUTOMATION LAB',
    title: 'AI Agent & Automation Lab',
    img: IMAGES.projectAi,
    alt: 'AI Agent & Automation Lab — AI document processing and financial analytics workspace',
    desc: 'An experimental digital environment exploring autonomous AI agents, workflow automation, document processing, and accounting-related digital workflows.',
    capabilities: [
      'AI agents configured for structured financial inquiry synthesis',
      'Automated workflow pipelines for recurring document extraction',
      'Task-oriented digital systems for transaction categorization',
      'Interactive visual reporting & Power BI dashboard prototypes',
      'Structured financial data analysis and anomaly screening experiments',
    ],
    tools: ['AI Agents', 'Power BI', 'Data Analytics', 'Workflow Automation'],
    disclaimer: 'Experimental research environment exploring practical AI automation in accounting. (Prototype research).',
    reversed: true,
  },
]

export default function Projects() {
  return (
    <section className="section section--white projects-section" id="projects" aria-label="Featured Projects">
      <div className="container">

        {/* Section Header — Clean without decorative numbering */}
        <div className="projects-header">
          <h2 className="projects-title">PROJECT SHOWCASE</h2>
          <p className="projects-subtitle">
            Applied accounting software architecture, financial data modeling, and experimental AI agent workflows.
          </p>
        </div>

        {/* Editorial Project Showcase List */}
        <div className="projects-editorial-stack">
          {PROJECTS_DATA.map((proj) => (
            <article
              key={proj.num}
              className={`project-entry ${proj.reversed ? 'project-entry--reversed' : ''}`}
            >
              {/* Visual Showcase Side */}
              <div className="project-entry__visual">
                <div className="project-entry__frame">
                  <img
                    src={proj.img}
                    alt={proj.alt}
                    className="project-entry__image"
                    loading="lazy"
                  />
                  <div className="project-entry__edge-rule" aria-hidden="true" />
                </div>
              </div>

              {/* Editorial Details Side */}
              <div className="project-entry__content">
                <div className="project-entry__meta">
                  <span className="project-entry__num">{proj.num}</span>
                  <span className="project-entry__sep">/</span>
                  <span className="project-entry__cat">{proj.category}</span>
                </div>

                <h3 className="project-entry__title">{proj.title}</h3>
                <p className="project-entry__desc">{proj.desc}</p>

                <div className="project-entry__specs">
                  <span className="project-entry__specs-label">CORE CAPABILITIES</span>
                  <ul className="project-entry__specs-list">
                    {proj.capabilities.map((item) => (
                      <li key={item} className="project-entry__specs-item">
                        <span className="project-entry__specs-dot" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-entry__tools">
                  {proj.tools.map((t) => (
                    <span key={t} className="project-entry__tool-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="project-entry__disclaimer">
                  <em>Note:</em> {proj.disclaimer}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
