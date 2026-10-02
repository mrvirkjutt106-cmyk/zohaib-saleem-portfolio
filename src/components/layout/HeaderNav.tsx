import { useState, useEffect } from 'react'
import { PERSON, IMAGES } from '../../data/siteData'
import './HeaderNav.css'

interface NavLink {
  label: string
  href: string
  id: string
}

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks: NavLink[] = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Direction', href: '#direction', id: 'direction' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section detection
      const sections = ['hero', ...navLinks.map((l) => l.id), 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className={`header-nav ${scrolled ? 'header-nav--scrolled' : ''}`}>
      <div className="header-nav__container">
        {/* Brand Identity */}
        <a href="#hero" className="header-nav__brand" onClick={closeMenu} aria-label="Zohaib Saleem Home">
          <div className="header-nav__avatar-frame">
            <img src={IMAGES.profileCircle} alt="ZS" className="header-nav__avatar-img" />
          </div>
          <div className="header-nav__brand-text">
            <span className="header-nav__brand-name">{PERSON.name}</span>
            <span className="header-nav__brand-badge">
              <span className="badge-live-dot" aria-hidden="true" />
              <span>CAF • ICAP</span>
            </span>
          </div>
        </a>

        {/* Minimal Desktop Navigation */}
        <nav className="header-nav__menu" aria-label="Primary Navigation">
          <ul className="header-nav__list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id} className="header-nav__item">
                  <a
                    href={link.href}
                    className={`header-nav__link ${isActive ? 'header-nav__link--active' : ''}`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Connect Action */}
        <div className="header-nav__actions">
          <a href="#contact" className="header-nav__cta-btn">
            <span className="cta-dot" aria-hidden="true" />
            <span>Let&apos;s Connect</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className={`header-nav__toggle ${mobileMenuOpen ? 'header-nav__toggle--active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="toggle-line toggle-line--1" />
            <span className="toggle-line toggle-line--2" />
          </button>
        </div>
      </div>

      {/* Mobile Animated Overlay */}
      <div
        className={`header-nav__mobile-overlay ${mobileMenuOpen ? 'header-nav__mobile-overlay--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-overlay__backdrop" onClick={closeMenu} />
        <div className="mobile-overlay__panel">
          <div className="mobile-overlay__header">
            <div className="mobile-overlay__title">Navigation</div>
            <button
              type="button"
              className="mobile-overlay__close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-overlay__nav">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-overlay__link ${activeSection === link.id ? 'mobile-overlay__link--active' : ''}`}
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                <span className="mobile-overlay__arrow">→</span>
              </a>
            ))}
          </nav>
          <div className="mobile-overlay__footer">
            <a href="#contact" className="mobile-overlay__cta" onClick={closeMenu}>
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
