import { useState } from 'react'
import { useNavScroll } from '../../hooks/useNavScroll'
import './Navigation.css'

const NAV_ITEMS = [
  { label: 'About',          href: '#about' },
  { label: 'Journey',        href: '#journey' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Direction',      href: '#direction' },
  { label: 'Contact',        href: '#contact' },
] as const

export default function Navigation() {
  const scrolled = useNavScroll(40)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(true)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={['nav', scrolled ? 'nav--scrolled' : '', menuOpen ? 'nav--menu-open' : '']
          .filter(Boolean)
          .join(' ')}
        role="banner"
      >
        <div className="nav__inner">
          {/* Brand mark */}
          <a
            href="#hero"
            className="nav__brand"
            aria-label="Zohaib Saleem — Back to top"
            onClick={closeMenu}
          >
            <div className="nav__brand-avatar-wrap">
              <img
                src="/images/zohaib-profile.png"
                alt="Zohaib Saleem"
                className={`nav__brand-img ${logoLoaded ? 'nav__brand-img--visible' : ''}`}
                onError={() => setLogoLoaded(false)}
              />
            </div>
            <span className="nav__brand-text">
              <span className="nav__brand-name">Zohaib Saleem</span>
              <span className="nav__brand-sub">CAF Candidate</span>
            </span>
          </a>

          {/* Desktop navigation links */}
          <nav className="nav__links" aria-label="Main navigation">
            <ul role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>



          {/* Mobile menu toggle */}
          <button
            className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            <span className="nav__toggle-line" />
            <span className="nav__toggle-line" />
            <span className="nav__toggle-line" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        id="mobile-nav"
        className={`nav__overlay ${menuOpen ? 'nav__overlay--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <nav>
          <ul role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav__overlay-link"
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__overlay-meta">
          <span>Zohaib Saleem</span>
          <span className="nav__overlay-sep">·</span>
          <span>Accounting × Data × AI</span>
        </div>
      </div>
    </>
  )
}
