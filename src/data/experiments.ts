/**
 * experiments.ts — Applied Lab & Active Experiments
 *
 * Dedicated experimental records demonstrating active prototyping at the intersection
 * of Accounting, Data, AI, and Audit.
 */

export interface ExperimentTrack {
  id: string
  code: string
  title: string
  category: 'AI_AGENTS' | 'AUTOMATION' | 'DATA_BI' | 'AUDIT_TECH'
  categoryLabel: string
  status: 'active' | 'prototyping' | 'testing'
  statusLabel: string
  objective: string
  mechanism: string
  tools: string[]
  insight: string
  previewSnippet?: string
}

export const EXPERIMENT_TRACKS: ExperimentTrack[] = [
  {
    id: 'exp-doc-extract',
    code: 'EXP-01',
    title: 'Intelligent Financial Document Extraction',
    category: 'AI_AGENTS',
    categoryLabel: 'AI Agents & LLM Parsing',
    status: 'active',
    statusLabel: 'Active Pipeline',
    objective:
      'Eliminate manual data re-entry from physical/PDF supplier invoices by extracting line items, NTN tax numbers, and amounts into structured JSON ready for accounting systems.',
    mechanism:
      'Multi-modal prompt orchestrations instructing LLMs to extract schema-validated tabular entries with zero hallucination safeguards.',
    tools: ['AI Agents', 'JSON Schema Validation', 'OCR Processing', 'Excel Power Query'],
    insight:
      'Reduced initial invoice entry latency while capturing complex line item descriptions that standard template OCR tools typically misread.',
    previewSnippet: `{
  "invoice_id": "INV-2024-884",
  "vendor_tax_id": "NTN-7419208-1",
  "subtotal": 145000.00,
  "tax_amount": 26100.00,
  "net_payable": 171100.00,
  "gl_mapping": "2100-ACCOUNTS-PAYABLE"
}`,
  },
  {
    id: 'exp-reconciliation',
    code: 'EXP-02',
    title: 'Automated Bank Feed Reconciliation Engine',
    category: 'AUTOMATION',
    categoryLabel: 'Accounting Automation',
    status: 'prototyping',
    statusLabel: 'Prototype Stage',
    objective:
      'Accelerate month-end closing by matching electronic bank transaction feeds against general ledger journal entries using algorithmic fuzzy matching and tolerance rules.',
    mechanism:
      'Rule-based reconciliation engine evaluating date proximity (±3 days), amount equivalence, and payee string token similarity.',
    tools: ['QuickBooks Online', 'Advanced Excel VBA/Power Query', 'Bank Feed APIs'],
    insight:
      'Automates matching of over 85% of routine recurrent transactions, isolating true exceptions (bank charges, dishonored instruments, timing differences) for human review.',
    previewSnippet: `IF(AND(ABS(Bank_Amt - GL_Amt) < 0.01,
       ABS(Bank_Date - GL_Date) <= 3,
       ISNUMBER(SEARCH(Clean_Payee, Bank_Desc))),
   "AUTO_RECONCILED",
   "MANUAL_AUDIT_REQUIRED")`,
  },
  {
    id: 'exp-powerbi-bi',
    code: 'EXP-03',
    title: 'Financial Health & Variance BI Modeling',
    category: 'DATA_BI',
    categoryLabel: 'Financial Data & BI',
    status: 'active',
    statusLabel: 'Active Model',
    objective:
      'Transform static trial balance reports into dynamic executive analytics tracking working capital ratios, gross margin variances, and cash flow liquidity runways.',
    mechanism:
      'Relational Star-Schema modeling linking General Ledger fact tables with Chart of Accounts dimension tables, visualized through DAX measures in Power BI.',
    tools: ['Power BI', 'DAX Measures', 'Star-Schema Data Modeling', 'Excel Data Model'],
    insight:
      'Empowers decision-makers to drill down from broad P&L variances into specific GL voucher line items within seconds.',
    previewSnippet: `Budget_Variance_Pct = 
  DIVIDE(
    [Actual_Expenses] - [Budgeted_Expenses],
    [Budgeted_Expenses],
    0
  )`,
  },
  {
    id: 'exp-audit-prep',
    code: 'EXP-04',
    title: 'AI-Assisted Audit Working Paper Generation',
    category: 'AUDIT_TECH',
    categoryLabel: 'Audit & Assurance Tech',
    status: 'testing',
    statusLabel: 'Experimental',
    objective:
      'Structure preliminary audit documentation, analytical review schedules, and sample risk matrices from raw general ledger downloads.',
    mechanism:
      'Automated sampling routines (monetary unit sampling logic) combined with agentic synthesis of analytical review commentary for significant period-over-period variances.',
    tools: ['Analytical Review Logic', 'Risk Assessment Matrices', 'Audit Working Papers'],
    insight:
      'Prepares standardized audit lead schedules, allowing future auditors to focus on professional skepticism and substantive testing rather than clerical formatting.',
    previewSnippet: `[AUDIT_PROCEDURE_LOG]
Sample Size: 45 Vouchers (Monetary Unit Selection)
Materiality Threshold: 5% of Profit Before Tax
Risk Indicator: 3 Out-of-Period Postings Detected
Next Action: Inspect Physical Goods Received Notes`,
  },
]
