import './PrecisionBadge.css'

interface PrecisionBadgeProps {
  label: string
  variant?: 'cyan' | 'gold' | 'emerald' | 'subtle'
  code?: string
  pulse?: boolean
  className?: string
}

export default function PrecisionBadge({
  label,
  variant = 'cyan',
  code,
  pulse = false,
  className = '',
}: PrecisionBadgeProps) {
  return (
    <span className={`precision-badge precision-badge--${variant} ${className}`}>
      {pulse && <span className="precision-badge__pulse" aria-hidden="true" />}
      {code && <span className="precision-badge__code">{code}</span>}
      <span className="precision-badge__label">{label}</span>
    </span>
  )
}
