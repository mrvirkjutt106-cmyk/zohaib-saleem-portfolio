import { motion, useReducedMotion } from 'framer-motion'
import './CredentialsArchive.css'

interface CertificationItem {
  id: string
  title: string
  issuer: string
  badge: string
  summary: string
  skills: string[]
  isTraining?: boolean
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'quickbooks',
    title: 'QuickBooks Online Certified ProAdvisor',
    issuer: 'Intuit / QuickBooks ProAdvisor Academy',
    badge: 'Certified ProAdvisor',
    summary: 'Cloud chart of accounts architecture, automated bank feeds, invoicing workflows, and month-end reconciliation.',
    skills: ['QuickBooks Online', 'Bank Feeds', 'General Ledger', 'Invoicing Workflows'],
  },
  {
    id: 'xero',
    title: 'Xero Associate Certification',
    issuer: 'Xero Accounting Software',
    badge: 'Certified Advisor',
    summary: 'Real-time ledger updates, automated bank rules, interactive management reports, and accounts control.',
    skills: ['Xero Cloud Accounting', 'Bank Rules Engine', 'Management Reporting'],
  },
  {
    id: 'digiskills',
    title: 'Data Analytics & Business Intelligence',
    issuer: 'DigiSkills • Ministry of IT & Telecom (Govt of Pakistan)',
    badge: 'Government Certified',
    summary: 'Structured financial data analysis, Power BI dashboards, dimensional modeling, and variance analytics.',
    skills: ['Power BI', 'Data Modeling', 'DAX Measures', 'Variance Analysis'],
  },
  {
    id: 'psdf',
    title: 'Digital Accounting Vocational Training',
    issuer: 'Punjab Skills Development Fund (PSDF)',
    badge: 'Vocational Training',
    summary: 'Practical computerized accounting across Service, Trading, and Manufacturing sectors using Sage, QuickBooks, and Excel.',
    skills: ['Sage Accounting', 'QuickBooks', 'Xero', 'Applied Excel'],
    isTraining: true,
  },
]

export default function CredentialsArchive() {
  const reduced = useReducedMotion()

  return (
    <section className="section credentials-strip-section" id="certifications" aria-label="Certifications">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>SUPPORTING EVIDENCE</span>
          </div>
          <h2 className="credentials-title">Verified Certifications &amp; Training.</h2>
          <p className="credentials-subtitle">
            External certifications and practical training validating cloud accounting setup, financial business intelligence, and computerized accounting systems.
          </p>
        </div>

        {/* Clean Premium Grid Strip */}
        <div className="credentials-strip-grid">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="credential-strip-card"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <div className="cert-card-header">
                <span className="cert-issuer-text">{cert.issuer}</span>
                <span className={`cert-badge-tag ${cert.isTraining ? 'cert-badge-tag--training' : ''}`}>
                  {cert.badge}
                </span>
              </div>

              <h3 className="cert-card-title">{cert.title}</h3>
              <p className="cert-card-summary">{cert.summary}</p>

              <div className="cert-card-skills">
                {cert.skills.map((skill) => (
                  <span key={skill} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
