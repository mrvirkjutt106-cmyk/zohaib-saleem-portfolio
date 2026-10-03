import { PERSON } from '../../data/siteData'
import './FooterBar.css'

export default function FooterBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-bar" role="contentinfo">
      <div className="container footer-bar__container">
        <div className="footer-bar__main">
          <div className="footer-brand-group">
            <span className="footer-brand-name">{PERSON.name}</span>
            <span className="footer-brand-sep" aria-hidden="true">·</span>
            <span className="footer-brand-tag">Accounting × Data × AI</span>
          </div>

          <div className="footer-nav-minimal">
            <a href="#about" className="footer-link">About</a>
            <a href="#projects" className="footer-link">Work</a>
            <a href="#journey" className="footer-link">CA Journey</a>
            <a href="#certifications" className="footer-link">Credentials</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <span className="footer-top-arrow" aria-hidden="true">↑</span>
          </button>
        </div>

        <div className="footer-bar__bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} {PERSON.name}. All rights reserved.
          </span>
          <span className="footer-locale">
            Lahore, Pakistan
          </span>
        </div>
      </div>
    </footer>
  )
}
