/**
 * siteData.ts — Single source of truth for portfolio data
 * Zohaib Saleem — Accounting × Data × AI × Audit
 */

export const PERSON = {
  name:       'Zohaib Saleem',
  firstName:  'Zohaib',
  lastName:   'Saleem',
  title:      'Chartered Accountancy Student (CAF)',
  disciplines: ['ACCOUNTING', 'DATA', 'AI', 'AUDIT'] as const,
  tagline:    'Where Chartered Accountancy discipline meets algorithmic precision',
  location:   'Lahore, Pakistan',
  initials:   'ZS',
  status:     'CAF Candidate (5/8 Passed) • Preparing for Audit & Assurance',
  availability: 'Available for CA Articleship & Professional Training',
} as const

export const CONTACT = {
  email:    'mr.zohaibsaleem@gmail.com',
  phone:    '+92 313 635 3929',
  phoneRaw: '+923136353929',
  whatsapp: 'https://wa.me/923136353929',
  linkedin: 'https://www.linkedin.com/in/mrzohaibsaleem',
  linkedinDisplay: 'linkedin.com/in/mrzohaibsaleem',
  cvAvailable: true,
} as const

export const HERO_STATEMENT =
  'Chartered Accountancy student synthesizing statutory accounting standards, financial data modeling, and emerging AI automation with a future trajectory toward technology-driven audit and assurance.'

export const IMAGES = {
  /** Transparent cutout portrait for Hero */
  heroCutout:     '/images/zohaib-portrait.png',
  heroPortrait:   '/images/zohaib-portrait.png',
  logoCutout:     '/images/zohaib-portrait.png',
  /** Transparent full-body standing photo for Philosophy spread */
  fullBody:       '/images/zohaib-full-body.png',
  /** Office/laptop environment photo for AI Automation Lab */
  officeWorking:  '/images/zohaib-office.png',
  /** Circular headshot profile for Contact Console & Navigation */
  profileCircle:  '/images/zohaib-profile.png',
  /** ERP Project visual assets */
  erpWorkspace:   '/images/Professional ERP Accounting Dashboard Workspace.png',
  erpMockup:      '/images/project-erp.jpg',
  projectErp:     '/images/Professional ERP Accounting Dashboard Workspace.png',
  /** AI Lab Project visual assets */
  aiWorkspace:    '/images/AI-Powered Financial Automation Workspace.png',
  aiMockup:       '/images/project-ai.jpg',
  projectAi:      '/images/AI-Powered Financial Automation Workspace.png',
} as const
