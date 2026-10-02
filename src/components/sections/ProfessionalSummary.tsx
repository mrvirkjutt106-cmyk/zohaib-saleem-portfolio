import { IMAGES } from '../../data/siteData'
import './ProfessionalSummary.css'

export default function ProfessionalSummary() {
  return (
    <section className="section section--white summary-section" id="about" aria-label="Professional Summary">
      <div className="container">

        {/* Section Header — Clean without decorative numbering */}
        <div className="summary-header">
          <h2 className="summary-title">PROFESSIONAL SUMMARY</h2>
          <p className="summary-subtitle">
            Chartered Accountancy student building expertise in accounting, audit, taxation, and financial reporting, complemented by digital systems and analytical technology.
          </p>
        </div>

        {/* Editorial Profile Spread */}
        <div className="summary-spread">

          {/* Left Column: Substantial Full-Body Silhouette (Purely Visual) */}
          <div className="summary-figure-col">
            <div className="summary-figure-backdrop" aria-hidden="true">
              <div className="summary-figure-tint" />
            </div>

            <div className="summary-figure-stage">
              <img
                src={IMAGES.fullBody}
                alt="Zohaib Saleem — Full body professional portrait"
                className="summary-figure-img"
                loading="lazy"
              />
              <div className="summary-ground-plane" aria-hidden="true" />
            </div>
          </div>

          {/* Right Column: CA Narrative + 3 Core Capability Areas */}
          <div className="summary-editorial-col">

            {/* Concise CA Professional Narrative */}
            <div className="summary-narrative">
              <p className="summary-lead">
                I am a Chartered Accountancy student actively pursuing the <strong>CAF level</strong>, committed to building rigorous competence in financial reporting, statutory compliance, audit methodology, and taxation.
              </p>
              <p className="summary-body">
                My preparation is anchored in financial discipline, quantitative problem-solving, and meticulous attention to detail. Having completed <strong>5 of 8 CAF papers</strong> across financial reporting, cost and management accounting, commercial law, tax practices, and company law, I am focused on mastering accounting standards and assurance principles.
              </p>
              <p className="summary-body">
                Alongside core Chartered Accountancy studies, I continuously strengthen practical fluency across <strong>QuickBooks Online, Xero, Advanced Excel, Power BI, and computerized accounting systems</strong>. My objective is to bring structured financial discipline, reliable reporting, and modern digital proficiency to professional accounting and audit environments.
              </p>
            </div>

            {/* Editorial Rule Divider */}
            <div className="summary-divider" aria-hidden="true" />

            {/* Three Core Capability Areas */}
            <div className="summary-capabilities">
              <span className="summary-capabilities-title">CORE CAPABILITY AREAS</span>

              <div className="summary-capabilities-list">

                <div className="summary-cap-item">
                  <h3 className="summary-cap-name">ACCOUNTING</h3>
                  <p className="summary-cap-desc">
                    Financial reporting, double-entry bookkeeping, general ledger maintenance, trial balance reconciliations, and statutory compliance.
                  </p>
                </div>

                <div className="summary-cap-item">
                  <h3 className="summary-cap-name">DIGITAL / FINANCIAL SYSTEMS</h3>
                  <p className="summary-cap-desc">
                    Advanced financial modeling in Microsoft Excel, Power BI business intelligence dashboards, QuickBooks Online, Xero, and Sage.
                  </p>
                </div>

                <div className="summary-cap-item">
                  <h3 className="summary-cap-name">DATA &amp; AI</h3>
                  <p className="summary-cap-desc">
                    Financial data analytics, variance examination, structured extraction, workflow automation, and exploratory AI-assisted documentation.
                  </p>
                </div>

              </div>

              {/* Natural Audit Perspective */}
              <div className="summary-audit-note">
                <span className="summary-audit-label">AUDIT &amp; ASSURANCE PERSPECTIVE</span>
                <span className="summary-audit-text">
                  Developing toward formal audit training with an active focus on statutory audit methodology, internal control evaluations, risk assessment, and analytical review procedures.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
