import { PERSON } from '../../data/siteData'
import './FooterBar.css'

export default function FooterBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-bar" role="contentinfo">
      <div className="container footer-bar__container">
        <div className="footer-bar__top">
          <div className="footer-bar__brand-col">
            <span className="footer-brand-title">{PERSON.name}</span>
            <span className="footer-brand-tag">ACCOUNTING × DATA × AI</span>
            <p className="footer-brand-desc">
              Chartered Accountancy student synthesizing financial discipline, relational data intelligence, and autonomous process automation.
            </p>
          </div>

          <div className="footer-bar__meta-col">
            <span className="footer-col-label">Professional Competencies</span>
            <ul className="footer-specs-list">
              <li>Chartered Accountancy (CAF • ICAP)</li>
              <li>IAS/IFRS Financial Reporting &amp; Tax Practice</li>
              <li>Power BI Business Intelligence &amp; Modeling</li>
              <li>Autonomous Financial Document Workflows</li>
            </ul>
          </div>

          <div className="footer-bar__action-col">
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-top-btn"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <span className="footer-top-btn__arrow" aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className="footer-bar__bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} {PERSON.name}. All rights reserved.
          </span>
          <span className="footer-standards">
            Personal Portfolio • Lahore, Pakistan
          </span>
        </div>
      </div>
    </footer>
  )
}
