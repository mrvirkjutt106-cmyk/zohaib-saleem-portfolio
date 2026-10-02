import './LedgerLine.css'

interface LedgerLineProps {
  /** Controls visual extent of the line */
  variant?: 'full' | 'inset' | 'content'
  /** Colour theme */
  color?: 'hairline' | 'accent'
  className?: string
  style?: React.CSSProperties
}

/**
 * LedgerLine — The primary graphic motif of "Ledger & Light".
 * A single hairline rule that serves structural purposes:
 * section transitions, typography anchors, visual rhythm.
 */
export default function LedgerLine({
  variant = 'full',
  color = 'hairline',
  className = '',
  style,
}: LedgerLineProps) {
  return (
    <hr
      className={[
        'ledger-line',
        `ledger-line--${variant}`,
        `ledger-line--${color}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
      style={style}
    />
  )
}
