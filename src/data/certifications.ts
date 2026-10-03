/**
 * certifications.ts — Technical Credentials & Applied Training
 *
 * Chapter 06: Credentials & Certifications
 *
 * Approved Credentials:
 * 01 — QUICKBOOKS ONLINE CERTIFICATION: QuickBooks Online ProAdvisor / Certification (Intuit)
 * 02 — XERO ASSOCIATE CERTIFICATION: Xero Associate (Xero)
 * 03 — DATA ANALYTICS & BUSINESS INTELLIGENCE: Data Analytics & Business Intelligence (DigiSkills)
 * 04 — DIGITAL ACCOUNTING TRAINING: Digital Accounting Training / Certification (PSDF)
 *
 * Strict Factual Boundaries:
 * - Strict adherence to approved factual credential labels.
 * - No implication that PSDF is a CA qualification, employment, or employer credential.
 * - No implication that DigiSkills is a professional accounting qualification.
 * - No invented certificate numbers, scores, grades, dates, or links.
 */

export interface CredentialItem {
  num: string
  code: string
  title: string
  provider: string
  domain: string
  domainBadge: string
  summary: string
  topics: string[]
  sectors?: string[]
}

export const CREDENTIALS: CredentialItem[] = [
  {
    num: '01',
    code: 'QBO-01',
    title: 'QuickBooks Online ProAdvisor / Certification',
    provider: 'Intuit',
    domain: 'DIGITAL ACCOUNTING',
    domainBadge: 'Digital Accounting',
    summary: 'Cloud chart of accounts, electronic bank feeds, and automated bank reconciliation.',
    topics: ['QuickBooks Online', 'Bank Feeds', 'Reconciliation'],
  },
  {
    num: '02',
    code: 'XRO-02',
    title: 'Xero Associate',
    provider: 'Xero',
    domain: 'DIGITAL ACCOUNTING',
    domainBadge: 'Digital Accounting',
    summary: 'Core cloud accounting workflows, bank rules engine, and management reporting.',
    topics: ['Xero', 'Bank Rules', 'Management Reporting'],
  },
  {
    num: '03',
    code: 'DBI-03',
    title: 'Data Analytics & Business Intelligence',
    provider: 'DigiSkills',
    domain: 'DATA & BI',
    domainBadge: 'Data & BI',
    summary: 'Business intelligence dashboards, structured data modeling, and variance calculations.',
    topics: ['Power BI', 'Data Analytics', 'Variance Analysis'],
  },
  {
    num: '04',
    code: 'DAT-04',
    title: 'Digital Accounting Training / Certification',
    provider: 'PSDF',
    domain: 'PRACTICAL DIGITAL ACCOUNTING TRAINING',
    domainBadge: 'Practical Training',
    summary: 'Practical training across Sage, QuickBooks, Xero, and Basic Excel applied to Service, IT, and Goods & Manufacturing.',
    topics: ['Sage', 'QuickBooks', 'Xero', 'Basic Excel'],
    sectors: ['Service', 'IT', 'Goods & Manufacturing'],
  },
]
