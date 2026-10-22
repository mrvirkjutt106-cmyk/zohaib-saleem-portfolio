import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { CONTACT, HERO_STATEMENT, IMAGES, PERSON } from '../../data/siteData'
import './HeroChamber.css'

const HERO_FACTS = [
  { label: 'ACADEMIC FOUNDATION', value: 'CAF Intermediate · 5/8 Passed' },
  { label: 'APPLIED PROTOTYPES', value: 'Personal ERP & Automation Lab' },
  { label: 'DIGITAL ACCOUNTING', value: 'QuickBooks Online & Xero' },
  { label: 'FUTURE DIRECTION', value: 'Audit & Assurance Trajectory' },
] as const

const setHeroImagePriority = (image: HTMLImageElement | null) => {
  if (image) image.fetchPriority = 'high'
}

export default function HeroChamber() {
  const reducedMotion = useReducedMotion()
  const [portraitUnavailable, setPortraitUnavailable] = useState(false)
  const entranceInitial = reducedMotion ? false : { opacity: 0, y: 8 }
  const entranceTransition = {
    duration: reducedMotion ? 0 : 0.45,
    ease: 'easeOut' as const,
  }

  return (
    <section className="hero-experience" id="hero" aria-labelledby="hero-title">
      <div className="hero-experience__media" aria-hidden="true">
        {!portraitUnavailable && (
          <img
            ref={setHeroImagePriority}
            src={IMAGES.heroCutout}
            alt=""
            className="hero-experience__portrait"
            loading="eager"
            decoding="async"
            width={1024}
            height={1536}
            draggable="false"
            onError={() => setPortraitUnavailable(true)}
          />
        )}
        <div className="hero-experience__overlay" />
      </div>

      <div className="hero-experience__container">
        <div className="hero-stage">
          <motion.div
            className="hero-content"
            initial={entranceInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={entranceTransition}
          >
            <p className="hero-eyebrow">
              <span className="hero-eyebrow__marker" aria-hidden="true" />
              CA STUDENT · ACCOUNTING &amp; AUDIT
            </p>

            <h1 className="hero-name" id="hero-title">
              {PERSON.name}
            </h1>

            <p className="hero-discipline">Accounting × Data × AI</p>

            <p className="hero-positioning">{HERO_STATEMENT}</p>

            <nav className="hero-actions" aria-label="Featured links">
              <a href="#projects" className="hero-btn hero-btn--primary">
                Explore Projects
                <span className="hero-btn__arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#journey" className="hero-btn hero-btn--secondary">
                CA Journey
              </a>
              <a
                href={CONTACT.cvPath}
                download="Zohaib-Saleem-CV.pdf"
                className="hero-btn hero-btn--cv"
                aria-label="Download CV (PDF)"
              >
                CV
              </a>
            </nav>
          </motion.div>
        </div>

        <motion.div
          className="hero-credibility-ribbon"
          role="list"
          aria-label="Professional highlights"
          initial={entranceInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...entranceTransition,
            delay: reducedMotion ? 0 : 0.1,
          }}
        >
          {HERO_FACTS.map((fact) => (
            <div className="ribbon-item" role="listitem" key={fact.value}>
              <span className="ribbon-label">{fact.label}</span>
              <span className="ribbon-val">{fact.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
