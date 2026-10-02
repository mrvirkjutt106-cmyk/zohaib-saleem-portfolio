import './SectionLabel.css'

interface SectionLabelProps {
  /** Zero-padded section number, e.g. "01" */
  number: string
  /** Section name, e.g. "Introduction" */
  title: string
  className?: string
}

/**
 * SectionLabel — "01 — Introduction"
 * Appears at the top-left of each section.
 * Creates the editorial "ledger" visual identity.
 */
export default function SectionLabel({
  number,
  title,
  className = '',
}: SectionLabelProps) {
  return (
    <div
      className={`section-label ${className}`}
      aria-label={`Section ${number}: ${title}`}
    >
      <span className="section-label__number">{number}</span>
      <span className="section-label__dash" aria-hidden="true">—</span>
      <span className="section-label__title">{title}</span>
    </div>
  )
}
