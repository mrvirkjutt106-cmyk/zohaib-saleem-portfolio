import './Skills.css'

interface SkillCategory {
  id: string
  num: string
  title: string
  description: string
  items: string[]
}

const SKILL_GROUPS: SkillCategory[] = [
  {
    id: 'accounting',
    num: '01',
    title: 'ACCOUNTING',
    description: 'Core financial recordkeeping, double-entry ledgers, and compliance platforms.',
    items: [
      'QuickBooks Online',
      'Xero',
      'Sage',
      'Bookkeeping',
      'Financial Accounting',
    ],
  },
  {
    id: 'data-bi',
    num: '02',
    title: 'DATA & BI',
    description: 'Quantitative modeling, dashboard visualization, and financial data analysis.',
    items: [
      'Microsoft Excel',
      'Power BI',
      'Data Analytics',
      'Business Intelligence',
    ],
  },
  {
    id: 'ai-automation',
    num: '03',
    title: 'AI & AUTOMATION',
    description: 'Autonomous workflows, document categorization, and intelligent accounting agents.',
    items: [
      'AI Agents',
      'Workflow Automation',
      'Financial Document Processing',
      'AI-assisted Accounting',
    ],
  },
  {
    id: 'audit-assurance',
    num: '04',
    title: 'AUDIT & ASSURANCE',
    description: 'Assurance methodology, internal control concepts, and technology-enabled review.',
    items: [
      'Audit & Assurance',
      'Financial Reporting',
      'Internal Control Concepts',
      'Analytical Review',
    ],
  },
]

export default function Skills() {
  return (
    <section className="section section--white skills-section" id="skills" aria-label="Skills & Technology">
      <div className="container">

        {/* Section Header */}
        <div className="skills-header">
          <h2 className="skills-title">SKILLS &amp; TECHNOLOGY</h2>
          <p className="skills-intro">
            Tools and disciplines I am building around accounting, data, automation and audit.
          </p>
        </div>

        {/* 4-Group Editorial Skills Index */}
        <div className="skills-index">
          {SKILL_GROUPS.map((group) => (
            <div key={group.id} className="skills-group">
              <div className="skills-group__header">
                <span className="skills-group__num">{group.num}</span>
                <h3 className="skills-group__title">{group.title}</h3>
              </div>
              <p className="skills-group__desc">{group.description}</p>

              <ul className="skills-group__list">
                {group.items.map((item) => (
                  <li key={item} className="skills-group__item">
                    <span className="skills-group__item-bullet" aria-hidden="true" />
                    <span className="skills-group__item-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
