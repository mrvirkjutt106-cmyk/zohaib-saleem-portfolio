/**
 * projects.ts — Flagship Systems & Architectural Showcases
 *
 * Immersive project data for:
 * 1. PERSONAL ERP SYSTEM
 * 2. AI AGENT & AUTOMATION LAB
 */

export interface SystemWorkflowStep {
  step: string
  title: string
  detail: string
}

export interface SystemModule {
  title: string
  description: string
  features: string[]
}

export interface FlagshipProject {
  id: string
  num: string
  badge: string
  title: string
  subtitle: string
  overview: string
  purpose: string
  accountingWorkflowSummary: string
  developmentStatus: string
  workflow: SystemWorkflowStep[]
  capabilities: string[]
  technologies: string[]
  primaryImage: string
  projectTag: string
  disclaimer: string
}

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    id: 'erp-system',
    num: '01',
    badge: 'PERSONAL PROJECT • ACCOUNTING SYSTEM ARCHITECTURE',
    title: 'Personal ERP System',
    subtitle: 'Applied Double-Entry Engine & Financial Reporting Architecture',
    overview:
      'A structured, multi-tier personal ERP accounting system designed to translate theoretical CAF competencies (FAR-1, CMA, Taxation) into an operational ledger engine. It bridges day-to-day transaction records with automated financial statement generation.',
    purpose:
      'Developed as an applied personal project to translate CAF accounting standards into a working financial architecture—covering chart of accounts governance, double-entry mechanics, trial balance verification, and financial reporting.',
    accountingWorkflowSummary:
      'Source Document Ingestion → Double-Entry General Ledger → Bank & Trial Balance Reconciliation → Financial Statement Generation',
    developmentStatus: 'Personal prototype and learning project in active development.',
    workflow: [
      {
        step: '01',
        title: 'Source Document Ingestion',
        detail: 'Systematic transaction logging covering sales invoices, vendor bills, payroll entries, and banking feeds.',
      },
      {
        step: '02',
        title: 'Double-Entry Processing',
        detail: 'Rigorous debit/credit transaction balancing mapped against a standardized 4-tier Chart of Accounts.',
      },
      {
        step: '03',
        title: 'Reconciliation & Control',
        detail: 'Automated bank reconciliation, suspense clearing, and pre-closing trial balance integrity checks.',
      },
      {
        step: '04',
        title: 'Financial Statement Output',
        detail: 'Automated drafting of Statement of Financial Position, Profit & Loss, and statutory tax schedules.',
      },
    ],
    capabilities: [
      'Day-to-day transaction logging & general ledger balancing',
      'Structured double-entry accounting records & trial balance drafting',
      'Month-end & quarter-end bank reconciliation controls',
      'Year-end reporting & financial statement drafting (IAS 1 structure)',
      'Tax-return drafting support & variance documentation (Sales & Income Tax)',
    ],
    technologies: ['Microsoft Excel (Advanced Modeling)', 'QuickBooks Online', 'Xero', 'Chart of Accounts Architecture', 'IFRS Presentation Principles'],
    primaryImage: '/images/Professional ERP Accounting Dashboard Workspace.png',
    projectTag: 'Personal Project • Applied Accounting Architecture',
    disclaimer: 'Personal prototype system developed for practical CAF knowledge integration. (Not enterprise-grade client software).',
  },
  {
    id: 'ai-automation-lab',
    num: '02',
    badge: 'EXPERIMENTAL LAB • AI-ASSISTED WORKFLOWS',
    title: 'AI Agent & Automation Lab',
    subtitle: 'Autonomous Financial Document Ingestion & Telemetry Pipeline',
    overview:
      'An applied digital research environment investigating how LLM agents, automated document parsers, and Power BI dashboards can eliminate recurring accounting frictions, accelerate invoice categorization, and detect transactional anomalies.',
    purpose:
      'An experimental exploration project researching practical AI applications in accounting—specifically focused on reducing manual invoice entry, structuring unstructured financial data, and identifying accounting anomalies.',
    accountingWorkflowSummary:
      'DOCUMENT → AI AGENT → PROCESSING → ACCOUNTING WORKFLOW → OUTPUT',
    developmentStatus: 'Experimental research environment and active prototype exploration.',
    workflow: [
      {
        step: '01',
        title: 'DOCUMENT',
        detail: 'Ingestion of unstructured financial source documents, vendor PDF invoices, and receipt scans.',
      },
      {
        step: '02',
        title: 'AI AGENT',
        detail: 'Multi-modal agentic entity extraction capturing vendor NTN tax ID, invoice date, line items, and VAT.',
      },
      {
        step: '03',
        title: 'PROCESSING',
        detail: 'Schema validation, arithmetic cross-checks, and duplicate transaction anomaly screening.',
      },
      {
        step: '04',
        title: 'ACCOUNTING WORKFLOW',
        detail: 'Automated general ledger account mapping and draft voucher generation.',
      },
      {
        step: '05',
        title: 'OUTPUT',
        detail: 'Structured data feeds streamed into interactive Power BI financial analytics and audit trails.',
      },
    ],
    capabilities: [
      'AI agents configured for structured financial inquiry synthesis',
      'Automated workflow pipelines for recurring document extraction',
      'Task-oriented digital systems for transaction categorization',
      'Interactive visual reporting & Power BI dashboard prototypes',
      'Structured financial data analysis and anomaly screening experiments',
    ],
    technologies: ['AI Agents & Prompt Engineering', 'Power BI & DAX', 'Data Analytics', 'Document Processing', 'Workflow Automation'],
    primaryImage: '/images/AI-Powered Financial Automation Workspace.png',
    projectTag: 'Experimental Project • AI & Automation Exploration',
    disclaimer: 'Experimental research environment exploring practical AI automation in accounting. (Prototype exploration, not client implementation).',
  },
]
