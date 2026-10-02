/**
 * caJourney.ts — Chartered Accountancy Trajectory & Visual Progression
 *
 * Factual state:
 * - 5 of 8 CAF papers passed.
 * - Passed: FAR-1, CMA, BLAW, TAX, Companies Law (CALW)
 * - Preparing: FAR-2, MFA, Audit & Assurance (AA)
 * - No IFA (Introduction to Financial Accounting).
 * - Trajectory: Pre-Medical → Commercial Transition → CA Foundation (PRC) → CAF → Audit & Assurance direction.
 */

export interface CAPaperDetail {
  code: string
  title: string
  status: 'passed' | 'preparing'
  category: 'FINANCIAL_REPORTING' | 'MANAGEMENT_COST' | 'LEGAL_STATUTORY' | 'TAXATION' | 'AUDIT_ASSURANCE' | 'ANALYSIS'
  competencies: string[]
  relevanceToAudit: string
}

export interface TrajectoryStage {
  id: string
  stageNum: string
  phaseTitle: string
  subhead: string
  milestone: string
  narrative: string
  metrics?: string
  status: 'completed' | 'active' | 'destination'
  badge: string
}

export const CAF_PAPERS_DETAILED: CAPaperDetail[] = [
  {
    code: 'FAR-1',
    title: 'Financial Accounting and Reporting 1',
    status: 'passed',
    category: 'FINANCIAL_REPORTING',
    competencies: [
      'IAS 1 Presentation of Financial Statements',
      'IAS 16 Property, Plant and Equipment',
      'IAS 38 Intangible Assets & Amortization',
      'IAS 2 Inventories & Valuation',
      'Correction of Errors & Incomplete Records',
    ],
    relevanceToAudit: 'Core framework for substantive testing of balance sheet assets, depreciation verification, and valuation disclosures.',
  },
  {
    code: 'CMA',
    title: 'Cost and Management Accounting',
    status: 'passed',
    category: 'MANAGEMENT_COST',
    competencies: [
      'Process & Job Costing Methods',
      'Variance Analysis (Material, Labor, Overhead)',
      'Marginal & Absorption Costing',
      'Cost-Volume-Profit (CVP) Decision Models',
      'Standard Costing Ledgers',
    ],
    relevanceToAudit: 'Crucial for auditing inventory valuation, overhead absorption reasonableness, and testing cost of sales authenticity.',
  },
  {
    code: 'BLAW',
    title: 'Business Law',
    status: 'passed',
    category: 'LEGAL_STATUTORY',
    competencies: [
      'Contract Act 1872 (Offer, Acceptance, Consideration)',
      'Partnership Act 1932',
      'Negotiable Instruments Act',
      'Commercial Agreements & Arbitration',
    ],
    relevanceToAudit: 'Informs contract compliance testing, legal contingent liabilities verification, and legal representation letters.',
  },
  {
    code: 'TAX',
    title: 'Tax Practices',
    status: 'passed',
    category: 'TAXATION',
    competencies: [
      'Income Tax Ordinance (Salary, Business, Capital Gains)',
      'Withholding Tax Deductions & Computations',
      'Sales Tax Act & Value Added Principles',
      'Statutory Returns, Filing & Advance Tax',
    ],
    relevanceToAudit: 'Fundamental for testing tax provision calculations, deferred tax balances, and statutory tax compliance audits.',
  },
  {
    code: 'CALW',
    title: 'Companies Law',
    status: 'passed',
    category: 'LEGAL_STATUTORY',
    competencies: [
      'Companies Act 2017 Regulatory Framework',
      'Incorporation, Memorandum & Articles of Association',
      'Directors’ Duties, Board Meetings & Resolutions',
      'Share Capital, Debentures, Mortgages & Charges',
      'Statutory Books, Annual Audited Accounts & Returns',
    ],
    relevanceToAudit: 'Directly dictates statutory audit mandates, company register inspections, and legal corporate compliance requirements.',
  },
  {
    code: 'FAR-2',
    title: 'Financial Accounting and Reporting 2',
    status: 'preparing',
    category: 'FINANCIAL_REPORTING',
    competencies: [
      'IAS 12 Income Taxes & Deferred Tax Accounting',
      'IFRS 15 Revenue from Contracts with Customers',
      'IFRS 16 Leases & Right-of-Use Accounting',
      'IAS 37 Provisions, Contingent Liabilities & Assets',
    ],
    relevanceToAudit: 'Advanced reporting rigor required for complex audit engagements, revenue recognition testing, and lease liability audits.',
  },
  {
    code: 'MFA',
    title: 'Managerial and Financial Analysis',
    status: 'preparing',
    category: 'ANALYSIS',
    competencies: [
      'Financial Statement Ratio & Trend Analysis',
      'Capital Budgeting (NPV, IRR, Payback)',
      'Working Capital Management Strategies',
      'Business Valuation & Financial Strategy',
    ],
    relevanceToAudit: 'Strengthens preliminary and final analytical review procedures, going-concern evaluations, and financial health audits.',
  },
  {
    code: 'AA',
    title: 'Audit and Assurance',
    status: 'preparing',
    category: 'AUDIT_ASSURANCE',
    competencies: [
      'International Standards on Auditing (ISA) Framework',
      'Audit Planning, Materiality & Risk Assessment',
      'Internal Control Evaluation & Tests of Controls',
      'Substantive Audit Procedures & Audit Evidence',
      'Auditor’s Reports & Professional Ethics (IESBA)',
    ],
    relevanceToAudit: 'The ultimate apex discipline linking accounting standards, data sampling, internal controls, and statutory assurance reporting.',
  },
]

export const TRAJECTORY_STAGES: TrajectoryStage[] = [
  {
    id: 'stage-premed',
    stageNum: '01',
    phaseTitle: 'Scientific & Quantitative Rigor',
    subhead: 'Pre-Medical Academic Foundation',
    milestone: '90% Intermediate Pre-Medical • 95% Matriculation Science',
    narrative:
      'Developed foundational academic discipline, meticulous attention to detail, and hypothesis-driven analytical thinking through advanced biological sciences, chemistry, and mathematics.',
    metrics: '90% Marks • First Class with Distinction',
    status: 'completed',
    badge: 'Foundation Milestone',
  },
  {
    id: 'stage-transition',
    stageNum: '02',
    phaseTitle: 'Commercial & Financial Transition',
    subhead: 'Strategic Shift into Professional Accountancy',
    milestone: 'Transition into Commercial Statutes & Economics',
    narrative:
      'Made a deliberate and structured career transition into commerce and financial discipline, mastering commercial principles, financial arithmetic, and business structures from first principles.',
    metrics: 'Deliberate Professional Realignment',
    status: 'completed',
    badge: 'Strategic Pivot',
  },
  {
    id: 'stage-prc',
    stageNum: '03',
    phaseTitle: 'CA Foundation (PRC)',
    subhead: 'Institute of Chartered Accountants of Pakistan',
    milestone: 'Pre-Requisite Competencies (PRC) Cleared First Attempt',
    narrative:
      'Cleared all PRC foundation modules on the initial attempt, establishing immediate velocity and solidifying core principles of quantitative methods, business writing, and introduction to economics.',
    metrics: 'Cleared First Attempt (May 2023)',
    status: 'completed',
    badge: 'Verified First Attempt',
  },
  {
    id: 'stage-caf',
    stageNum: '04',
    phaseTitle: 'CAF Intermediate Level (5 / 8 Passed)',
    subhead: 'Certificate in Accounting and Finance — Active Progression',
    milestone: '5 Papers Cleared across Financial Reporting, Tax, Law & Costing',
    narrative:
      'Rigorous mastery of financial accounting standards (FAR-1), management & cost accounting (CMA), commercial contract law (BLAW), corporate statutes (Companies Law), and statutory tax practices (TAX).',
    metrics: '5 / 8 Passed (62.5% Complete)',
    status: 'active',
    badge: 'Current Standing • 5/8 Cleared',
  },
  {
    id: 'stage-audit',
    stageNum: '05',
    phaseTitle: 'Audit & Assurance Trajectory',
    subhead: 'Preparing FAR-2, MFA, and Audit & Assurance (AA)',
    milestone: 'Developing Toward Technology-Enabled Statutory Audit Practice',
    narrative:
      'Currently preparing for FAR-2, MFA, and AA. Synthesizing accounting frameworks with internal control assessment, data-driven analytical reviews, and international audit standards (ISAs) for professional articleship and audit practice.',
    metrics: 'Active Preparation for 3 Papers',
    status: 'destination',
    badge: 'Target Trajectory',
  },
]
