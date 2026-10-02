import './FutureDirection.css'

const PILLARS = [
  {
    num: '01',
    title: 'ACCOUNTING & FINANCIAL REPORTING',
    desc: 'Strengthening expertise in financial accounting, reporting, reconciliation and interpretation of financial information.',
  },
  {
    num: '02',
    title: 'AUDIT & ASSURANCE',
    desc: 'Developing knowledge of audit methodology, internal controls, risk assessment, assurance procedures and technology-enabled audit practices.',
  },
  {
    num: '03',
    title: 'TAXATION & COMPLIANCE',
    desc: 'Building deeper understanding of taxation, compliance requirements, tax practices and structured tax analysis.',
  },
  {
    num: '04',
    title: 'ACCOUNTING TECHNOLOGY, DATA & AI',
    desc: 'Using Power BI, digital accounting platforms, automation and AI-assisted workflows to improve accounting and financial information processes.',
  },
]

export default function FutureDirection() {
  return (
    <section className="section section--subtle direction-section" id="direction" aria-label="Professional Direction">
      <div className="container">

        {/* Section Header — No decorative numbering */}
        <div className="direction-header">
          <h2 className="direction-title">PROFESSIONAL DIRECTION</h2>
          <p className="direction-subtitle">
            Strategic focus areas combining professional Chartered Accountancy qualification with technological acumen.
          </p>
        </div>

        {/* 4 CA-Centric Pillars */}
        <div className="direction-pillars">
          {PILLARS.map((p) => (
            <div key={p.num} className="direction-pillar">
              <div className="direction-pillar__top">
                <span className="direction-pillar__num">{p.num}</span>
                <span className="direction-pillar__rule" aria-hidden="true" />
              </div>
              <h3 className="direction-pillar__title">{p.title}</h3>
              <p className="direction-pillar__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Compact Editorial Closing Statement (No oversized blue banner, no name tag) */}
        <div className="direction-closing">
          <p className="direction-closing__text">
            Building toward a career where accounting expertise, audit discipline, taxation knowledge and emerging technology work together.
          </p>
        </div>

      </div>
    </section>
  )
}
