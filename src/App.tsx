import HeaderNav from './components/layout/HeaderNav'
import HeroChamber from './components/hero/HeroChamber'
import PhilosophySpread from './components/philosophy/PhilosophySpread'
import SystemShowcase from './components/projects/SystemShowcase'
import CapabilitiesMatrix from './components/capabilities/CapabilitiesMatrix'
import CaVisualTrajectory from './components/journey/CaVisualTrajectory'
import CredentialsArchive from './components/credentials/CredentialsArchive'
import FutureTrajectory from './components/direction/FutureTrajectory'
import ContactConsole from './components/contact/ContactConsole'
import FooterBar from './components/layout/FooterBar'

import './styles/tokens.css'
import './styles/global.css'
import './styles/typography.css'

/**
 * App — Accounting × Data × AI — Personal Portfolio
 * Zohaib Saleem — Chartered Accountancy Student (CAF) • ICAP
 *
 * Visual Hierarchy:
 * 1. IDENTITY / HERO (HeroChamber)
 * 2. ABOUT / PHILOSOPHY (PhilosophySpread)
 * 3. WHAT I BUILD / PROJECTS (SystemShowcase)
 * 4. CAPABILITIES (CapabilitiesMatrix)
 * 5. CA JOURNEY (CaVisualTrajectory)
 * 6. CERTIFICATIONS (CredentialsArchive)
 * 7. FUTURE DIRECTION (FutureTrajectory)
 * 8. CONTACT (ContactConsole)
 */
function App() {
  return (
    <>
      <HeaderNav />
      <main id="main-content">
        {/* 1. HERO */}
        <HeroChamber />

        {/* 2. ABOUT / IDENTITY */}
        <PhilosophySpread />

        {/* 3. SELECTED PROJECTS */}
        <SystemShowcase />

        {/* 4. CAPABILITIES */}
        <CapabilitiesMatrix />

        {/* 5. CA JOURNEY */}
        <CaVisualTrajectory />

        {/* 6. CERTIFICATIONS */}
        <CredentialsArchive />

        {/* 7. FUTURE DIRECTION */}
        <FutureTrajectory />

        {/* 8. CONTACT */}
        <ContactConsole />
      </main>
      <FooterBar />
    </>
  )
}

export default App
