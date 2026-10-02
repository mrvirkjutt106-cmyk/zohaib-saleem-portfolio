import { useState, useEffect } from 'react'

/**
 * Tracks whether the page has been scrolled past a threshold.
 * Used to trigger the navigation scroll state (opaque background).
 */
export function useNavScroll(threshold = 80): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    // Check immediately (in case page loads mid-scroll)
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
