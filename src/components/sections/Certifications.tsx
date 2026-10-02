import './Certifications.css'

interface CredentialItem {
  id: string
  num: string
  title: string
  issuer: string
  status: string
  description: string
  coverage?: string
}

const CREDENTIALS: CredentialItem[] = [
  {
    id: 'quickbooks',
    num: '01',
    title: 'QuickBooks Online Certification',
    issuer: 'Intuit / QuickBooks',
    status: 'ProAdvisor Certified',
    description: 'Certified in general ledger tracking, invoicing workflows, bank feeds, accounts payable/receivable management, and automated bank reconciliation.',
  },
  {
    id: 'xero',
    num: '02',
    title: 'Xero Associate Certification',
    issuer: 'Xero',
    status: 'Advisor Certified',
    description: 'Advisor certification covering cloud accounting operations, real-time ledger updates, automated bank reconciliation, and management reporting.',
  },
  {
    id: 'data-analytics',
    num: '03',
    title: 'Data Analytics & Business Intelligence',
    issuer: 'DigiSkills',
    status: 'Certified Training',
    description: 'Coursework covering structured financial data analysis, business intelligence dashboards, variance analysis, and data-driven reporting insights.',
  },
  {
    id: 'psdf',
    num: '04',
    title: 'Digital Accounting Certification',
    issuer: 'PSDF (Punjab Skills Development Fund)',
    status: 'Practical Accounting Training',
    description: 'Practical digital accounting training covering Sage, QuickBooks, Xero, and Basic Excel, with applied exposure across Service Sector, IT Sector, Goods & Services, and Manufacturing Sector. (Vocational accounting training).',
  },
]

export default function Certifications() {
  return (
    <section className="section section--subtle certs-section" id="certifications" aria-label="Professional Certifications">
      <div className="container">

        {/* Section Header — No decorative numbering */}
        <div className="certs-header">
          <h2 className="certs-title">CERTIFICATIONS &amp; CREDENTIALS</h2>
          <p className="certs-subtitle">
            Industry qualifications validating technical competence in cloud accounting infrastructure, computerized ledgers, and analytical reporting.
          </p>
        </div>

        {/* Vertical Editorial Archive List */}
        <div className="certs-archive">
          {CREDENTIALS.map((cred) => (
            <div key={cred.id} className="cert-row">
              <div className="cert-row__index">{cred.num}</div>

              <div className="cert-row__main">
                <div className="cert-row__meta">
                  <span className="cert-row__issuer">{cred.issuer}</span>
                  <span className="cert-row__status">{cred.status}</span>
                </div>

                <h3 className="cert-row__title">{cred.title}</h3>
                <p className="cert-row__desc">{cred.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
