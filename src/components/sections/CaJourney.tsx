import './CaJourney.css'

const PASSED_PAPERS = [
  { code: 'FAR-1', title: 'Financial Accounting and Reporting 1', status: 'Passed' },
  { code: 'CMA',   title: 'Cost and Management Accounting',       status: 'Passed' },
  { code: 'BLAW',  title: 'Business Law',                        status: 'Passed' },
  { code: 'TAX',   title: 'Tax Practices',                       status: 'Passed', highlight: true },
  { code: 'CALW',  title: 'Company Law',                         status: 'Passed' },
]

const PREPARING_PAPERS = [
  { code: 'FAR-2', title: 'Financial Accounting and Reporting 2', status: 'Preparing' },
  { code: 'MFA',   title: 'Managerial and Financial Analysis',    status: 'Preparing' },
  { code: 'AA',    title: 'Audit and Assurance',                  status: 'Preparing', highlight: true },
]

const TIMELINE_STEPS = [
  {
    stageNum: 'Stage 01',
    institution: 'Lahore Board',
    stage: 'Pre-Medical Education',
    note: 'Initial scientific background fostering analytical discipline, quantitative logic, and high attention to detail.',
    tag: 'Completed',
  },
  {
    stageNum: 'Stage 02',
    institution: 'Independent Commercial Studies',
    stage: 'Transition to Accountancy',
    note: 'Deliberate and structured transition into commercial statutes, economics, and accounting fundamentals.',
    tag: 'Completed',
  },
  {
    stageNum: 'Stage 03',
    institution: 'Chartered Accountancy Stream',
    stage: 'Foundation of CA, Cleared in First Attempt',
    note: 'Pre-Requisite Competencies (PRC) cleared on the first attempt, establishing strong fundamentals across core accounting and quantitative principles.',
    tag: 'Cleared First Attempt',
    highlight: true,
  },
  {
    stageNum: 'Stage 04',
    institution: 'Active Intermediate Progression',
    stage: 'CAF / CA-Intermediate, 5 of 8 Passed',
    note: 'Active progression with 5 papers cleared across financial reporting, cost accounting, commercial law, tax practices, and company law.',
    tag: '5 of 8 Passed',
    active: true,
  },
]

export default function CaJourney() {
  return (
    <section className="section section--subtle journey-section" id="journey" aria-label="Chartered Accountancy Journey">
      <div className="container">

        {/* Section Header — No decorative numbering */}
        <div className="journey-header">
          <h2 className="journey-title">CHARTERED ACCOUNTANCY JOURNEY</h2>
          <p className="journey-subtitle">
            A disciplined trajectory combining rigorous professional CA standards with analytical problem-solving, taxation, and audit principles.
          </p>
        </div>

        {/* High-level Progress Metric Bar */}
        <div className="journey-overview">
          <div className="journey-overview__meta">
            <div>
              <span className="journey-overview__stage">CURRENT CA LEVEL</span>
              <h3 className="journey-overview__name">Certificate in Accounting &amp; Finance (CAF)</h3>
            </div>
            <div className="journey-overview__stat">
              <span className="journey-overview__num">5 / 8</span>
              <span className="journey-overview__label">PAPERS PASSED</span>
            </div>
          </div>

          <div className="journey-meter" role="progressbar" aria-valuenow={5} aria-valuemin={0} aria-valuemax={8}>
            <div className="journey-meter__fill" style={{ width: `${(5 / 8) * 100}%` }} />
          </div>
        </div>

        {/* 2-Column Split: Examination Ledger + Milestones Timeline */}
        <div className="journey-grid">

          {/* Left Column: Examination Papers Breakdown */}
          <div className="journey-papers">
            <div className="journey-subheading">
              <span className="journey-subheading__dot journey-subheading__dot--passed" />
              <h4>PASSED PAPERS (5)</h4>
            </div>

            <div className="journey-papers__list">
              {PASSED_PAPERS.map((paper) => (
                <div
                  key={paper.code}
                  className={`journey-paper-row journey-paper-row--passed ${paper.highlight ? 'journey-paper-row--highlight' : ''}`}
                >
                  <span className="journey-paper-code">{paper.code}</span>
                  <span className="journey-paper-title">{paper.title}</span>
                  <span className="journey-paper-status">Passed</span>
                </div>
              ))}
            </div>

            <div className="journey-subheading" style={{ marginTop: '32px' }}>
              <span className="journey-subheading__dot journey-subheading__dot--prep" />
              <h4>CURRENTLY PREPARING (3)</h4>
            </div>

            <div className="journey-papers__list">
              {PREPARING_PAPERS.map((paper) => (
                <div
                  key={paper.code}
                  className={`journey-paper-row journey-paper-row--prep ${paper.highlight ? 'journey-paper-row--highlight' : ''}`}
                >
                  <span className="journey-paper-code">{paper.code}</span>
                  <span className="journey-paper-title">{paper.title}</span>
                  <span className="journey-paper-status">Preparing</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Timeline Milestones */}
          <div className="journey-timeline">
            <div className="journey-subheading">
              <h4>ACADEMIC &amp; CA TIMELINE</h4>
            </div>

            <div className="journey-timeline__steps">
              {TIMELINE_STEPS.map((step, idx) => (
                <div key={step.stage} className={`timeline-row ${step.active ? 'timeline-row--active' : ''}`}>
                  <div className="timeline-rail">
                    <span className="timeline-rail__badge">{step.stageNum}</span>
                    {idx < TIMELINE_STEPS.length - 1 && <div className="timeline-rail__line" />}
                  </div>

                  <div className="timeline-content">
                    <span className="timeline-content__inst">{step.institution}</span>
                    <h5 className="timeline-content__stage">{step.stage}</h5>
                    <p className="timeline-content__note">{step.note}</p>
                    <span className={`timeline-content__tag ${step.highlight || step.active ? 'timeline-content__tag--highlight' : ''}`}>
                      {step.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
