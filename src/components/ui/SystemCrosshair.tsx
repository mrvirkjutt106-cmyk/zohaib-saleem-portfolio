import './SystemCrosshair.css'

interface SystemCrosshairProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
}

export default function SystemCrosshair({
  position = 'top-left',
  className = '',
}: SystemCrosshairProps) {
  return (
    <div className={`system-crosshair system-crosshair--${position} ${className}`} aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </div>
  )
}
