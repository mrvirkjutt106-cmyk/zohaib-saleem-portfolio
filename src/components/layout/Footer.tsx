import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__meta">
          <span className="footer__copy">© 2026 Zohaib Saleem</span>
          <span className="footer__bullet" aria-hidden="true">·</span>
          <span className="footer__descriptor">Accounting · Audit · Taxation · Data</span>
        </div>
        <a href="#hero" className="footer__back-to-top">
          Back to Top ↑
        </a>
      </div>
    </footer>
  )
}

