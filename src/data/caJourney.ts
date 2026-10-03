/**
 * caJourney.ts — Chartered Accountancy Academic Trajectory & CAF Progression
 *
 * Approved Factual State:
 * - 4 Academic Stages:
 *   01 — LAHORE BOARD / Pre-Medical Education
 *   02 — INDEPENDENT COMMERCIAL STUDIES / Transition to Accountancy
 *   03 — CHARTERED ACCOUNTANCY STREAM / Foundation of CA — Cleared First Attempt
 *   04 — ACTIVE INTERMEDIATE PROGRESSION / CAF / CA-Intermediate — 5 of 8 Passed
 *
 * - 5 of 8 CAF papers passed:
 *   Financial Accounting and Reporting 1 (FAR-1)
 *   Cost and Management Accounting (CMA)
 *   Business Law (BLAW)
 *   Tax Practices (TAX)
 *   Companies Law
 *
 * - 3 Preparing:
 *   Financial Accounting and Reporting 2 (FAR-2)
 *   Managerial and Financial Analysis (MFA)
 *   Audit and Assurance (AA)
 *
 * Zero invented marks, grades, ranks, distinctions, percentages, or exam dates.
 */

export interface CAPaper {
  code: string
  name: string
  status: 'passed' | 'preparing'
}

export interface AcademicStage {
  num: string
  institution: string
  title: string
  isCurrent?: boolean
}

export const ACADEMIC_STAGES: AcademicStage[] = [
  {
    num: '01',
    institution: '01 — LAHORE BOARD',
    title: 'Pre-Medical Education',
  },
  {
    num: '02',
    institution: '02 — INDEPENDENT COMMERCIAL STUDIES',
    title: 'Transition to Accountancy',
  },
  {
    num: '03',
    institution: '03 — CHARTERED ACCOUNTANCY STREAM',
    title: 'Foundation of CA — Cleared First Attempt',
  },
  {
    num: '04',
    institution: '04 — ACTIVE INTERMEDIATE PROGRESSION',
    title: 'CAF / CA-Intermediate — 5 of 8 Passed',
    isCurrent: true,
  },
]

export const PASSED_PAPERS: CAPaper[] = [
  {
    code: 'FAR-1',
    name: 'Financial Accounting and Reporting 1 (FAR-1)',
    status: 'passed',
  },
  {
    code: 'CMA',
    name: 'Cost and Management Accounting (CMA)',
    status: 'passed',
  },
  {
    code: 'BLAW',
    name: 'Business Law (BLAW)',
    status: 'passed',
  },
  {
    code: 'TAX',
    name: 'Tax Practices (TAX)',
    status: 'passed',
  },
  {
    code: 'Companies Law',
    name: 'Companies Law',
    status: 'passed',
  },
]

export const PREPARING_PAPERS: CAPaper[] = [
  {
    code: 'FAR-2',
    name: 'Financial Accounting and Reporting 2 (FAR-2)',
    status: 'preparing',
  },
  {
    code: 'MFA',
    name: 'Managerial and Financial Analysis (MFA)',
    status: 'preparing',
  },
  {
    code: 'AA',
    name: 'Audit and Assurance (AA)',
    status: 'preparing',
  },
]
