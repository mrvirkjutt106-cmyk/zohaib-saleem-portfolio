import { useState } from 'react'
import { EXPERIMENT_TRACKS } from '../../data/experiments'
import PrecisionBadge from '../ui/PrecisionBadge'
import SystemCrosshair from '../ui/SystemCrosshair'
import './ExperimentsBench.css'

export default function ExperimentsBench() {
  const [selectedTrack, setSelectedTrack] = useState<string>('exp-doc-extract')

  const currentTrack = EXPERIMENT_TRACKS.find((t) => t.id === selectedTrack) || EXPERIMENT_TRACKS[0]

  return (
    <section className="section lab-section" id="lab" aria-label="Applied Accounting & AI Experiments Lab">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow__pip" />
            <span>ACTIVE RESEARCH • PROTOCOL BENCH</span>
          </div>
          <h2 className="section-title">THE APPLIED AUTOMATION LAB</h2>
          <p className="section-subtitle">
            Dedicated research environments demonstrating how I actively experiment with AI agents, document processing pipelines, reconciliation algorithms, and audit telemetry.
          </p>
        </div>

        {/* 2-Column Lab Bench: Left Track Selector + Right Interactive Inspector */}
        <div className="lab-bench">
          {/* Left: Track Cards List */}
          <div className="lab-tracks-list" role="tablist" aria-label="Experiment Tracks">
            {EXPERIMENT_TRACKS.map((track) => {
              const isActive = selectedTrack === track.id
              return (
                <div
                  key={track.id}
                  className={`lab-track-card ${isActive ? 'lab-track-card--active' : ''}`}
                  onClick={() => setSelectedTrack(track.id)}
                  tabIndex={0}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="lab-track-card__top">
                    <span className="lab-track-card__code">{track.code}</span>
                    <span className={`lab-track-card__status-dot lab-track-card__status-dot--${track.status}`} />
                  </div>
                  <h3 className="lab-track-card__title">{track.title}</h3>
                  <span className="lab-track-card__cat">{track.categoryLabel}</span>
                </div>
              )
            })}
          </div>

          {/* Right: Active Experiment Deep Inspection Console */}
          <div className="lab-inspector-console">
            <SystemCrosshair position="top-left" />
            <SystemCrosshair position="top-right" />
            <SystemCrosshair position="bottom-left" />
            <SystemCrosshair position="bottom-right" />

            <div className="console-head">
              <div className="console-head__meta">
                <PrecisionBadge label={currentTrack.categoryLabel} code={currentTrack.code} variant="cyan" />
                <span className="console-head__status">{currentTrack.statusLabel}</span>
              </div>
              <h3 className="console-head__title">{currentTrack.title}</h3>
            </div>

            <div className="console-body">
              <div className="console-field">
                <span className="console-field__label">CORE OBJECTIVE:</span>
                <p className="console-field__text">{currentTrack.objective}</p>
              </div>

              <div className="console-field">
                <span className="console-field__label">UNDERLYING MECHANISM:</span>
                <p className="console-field__text">{currentTrack.mechanism}</p>
              </div>

              {/* Code / Logic Terminal Preview */}
              {currentTrack.previewSnippet && (
                <div className="console-terminal">
                  <div className="console-terminal__bar">
                    <div className="terminal-dots">
                      <span className="dot dot--red" />
                      <span className="dot dot--yellow" />
                      <span className="dot dot--green" />
                    </div>
                    <span className="terminal-filename">
                      {currentTrack.category === 'AI_AGENTS'
                        ? 'invoice_schema.json'
                        : currentTrack.category === 'AUTOMATION'
                        ? 'reconcile_rules.xlsx'
                        : currentTrack.category === 'DATA_BI'
                        ? 'variance_measure.dax'
                        : 'audit_procedure.log'}
                    </span>
                    <span className="terminal-tag">PAYLOAD / CODE</span>
                  </div>
                  <pre className="console-terminal__pre">
                    <code>{currentTrack.previewSnippet}</code>
                  </pre>
                </div>
              )}

              {/* Applied Tooling */}
              <div className="console-tools">
                <span className="console-field__label">TOOLS &amp; FRAMEWORKS:</span>
                <div className="console-tools__tags">
                  {currentTrack.tools.map((tool) => (
                    <span key={tool} className="tool-pill">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Practical Insight / Learning */}
              <div className="console-insight">
                <span className="console-insight__icon">💡</span>
                <div className="console-insight__content">
                  <span className="console-insight__title">PRACTICAL TAKEAWAY:</span>
                  <p className="console-insight__text">{currentTrack.insight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
