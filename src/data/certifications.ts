/**
 * certifications.ts — Verified Technical Credentials & Authoritative Issuers
 *
 * Real qualifications held by Zohaib Saleem.
 */

export interface Credential {
  id: string
  code: string
  title: string
  issuer: string
  issuerLogo?: string
  status: string
  category: 'CLOUD_ACCOUNTING' | 'DATA_ANALYTICS' | 'VOCATIONAL_TRAINING' | 'PROFESSIONAL'
  categoryLabel: string
  verifiedDate: string
  description: string
  skillsVerified: string[]
}

export const CREDENTIALS_LIST: Credential[] = [
  {
    id: 'quickbooks-proadvisor',
    code: 'CERT-01',
    title: 'QuickBooks Online ProAdvisor (Level-1)',
    issuer: 'Intuit / QuickBooks ProAdvisor Academy',
    status: 'Verified Certification',
    category: 'CLOUD_ACCOUNTING',
    categoryLabel: 'Cloud Accounting',
    verifiedDate: 'Credentialed',
    description:
      'Certified proficiency in cloud chart of accounts setup, general ledger tracking, accounts receivable/payable workflows, electronic bank feeds, and automated bank reconciliation.',
    skillsVerified: ['QuickBooks Online', 'Bank Feeds', 'Invoicing Workflows', 'Reconciliation', 'General Ledger'],
  },
  {
    id: 'xero-advisor',
    code: 'CERT-02',
    title: 'Xero Advisor Certified',
    issuer: 'Xero Accounting Software',
    status: 'Advisor Certified',
    category: 'CLOUD_ACCOUNTING',
    categoryLabel: 'Cloud Accounting',
    verifiedDate: 'Credentialed',
    description:
      'Official advisor certification validating proficiency in Xero cloud accounting, real-time ledger updates, automated bank rules, payroll entries, and interactive management reporting.',
    skillsVerified: ['Xero Cloud Accounting', 'Bank Rules Engine', 'Management Reporting', 'Accounts Control'],
  },
  {
    id: 'data-analytics-bi',
    code: 'CERT-03',
    title: 'Data Analytics & Business Intelligence',
    issuer: 'DigiSkills — Ministry of IT & Telecom, Govt of Pakistan',
    status: 'Certified Training',
    category: 'DATA_ANALYTICS',
    categoryLabel: 'Data & BI',
    verifiedDate: 'Credentialed',
    description:
      'Comprehensive coursework covering structured financial data analysis, Power BI business intelligence dashboards, dimensional modeling, variance calculations, and exploratory data visualization.',
    skillsVerified: ['Power BI', 'Data Analytics', 'Variance Analysis', 'Dimensional Modeling', 'Data Visualization'],
  },
  {
    id: 'psdf-digital-accounting',
    code: 'CERT-04',
    title: 'Digital Accounting Systems (Sage, QuickBooks, Xero, Excel)',
    issuer: 'Punjab Skills Development Fund (PSDF)',
    status: 'Practical Vocational Qualification',
    category: 'VOCATIONAL_TRAINING',
    categoryLabel: 'Computerized Accounting',
    verifiedDate: 'Credentialed',
    description:
      'Hands-on vocational digital accounting training covering end-to-end computerized accounting across Service, IT, Trading, and Manufacturing business sectors using multiple industry platforms.',
    skillsVerified: ['Sage Accounting', 'QuickBooks Desktop/Online', 'Xero', 'Applied Excel Bookkeeping', 'Multi-Sector Accounting'],
  },
  {
    id: 'ms-office-productivity',
    code: 'CERT-05',
    title: 'Microsoft Office & Presentation Effectiveness',
    issuer: 'School of Business Intelligence',
    status: 'Verified Training',
    category: 'PROFESSIONAL',
    categoryLabel: 'Productivity & Communication',
    verifiedDate: 'Credentialed',
    description:
      'Advanced executive spreadsheet modeling, structured PowerPoint presentation architecture, and executive business communication for corporate finance environments.',
    skillsVerified: ['Advanced Excel', 'Executive PowerPoint', 'Business Communication', 'Structured Financial Presentation'],
  },
]
