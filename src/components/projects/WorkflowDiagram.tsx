import { useState, Fragment } from 'react'
import { SystemWorkflowStep } from '../../data/projects'
import './WorkflowDiagram.css'

interface WorkflowDiagramProps {
  steps: SystemWorkflowStep[]
  systemTitle: string
}

export default function WorkflowDiagram({ steps, systemTitle }: WorkflowDiagramProps) {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <div className="workflow-diagram" aria-label={`Operational workflow for ${systemTitle}`}>
      <div className="workflow-diagram__header">
        <span className="workflow-diagram__eyebrow">SYSTEM WORKFLOW PIPELINE</span>
        <span className="workflow-diagram__meta">[{steps.length}-STAGE INTERACTION]</span>
      </div>

      <div className="workflow-diagram__track">
        {steps.map((item, idx) => {
          const isActive = activeStep === idx
          return (
            <Fragment key={item.step}>
              <div
                className={`workflow-step ${isActive ? 'workflow-step--active' : ''}`}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
              >
                <div className="workflow-step__index-row">
                  <span className="workflow-step__badge">{item.step}</span>
                  <span className="workflow-step__pip" aria-hidden="true" />
                </div>
                <h4 className="workflow-step__title">{item.title}</h4>
                <p className="workflow-step__detail">{item.detail}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="workflow-connector" aria-hidden="true">
                  <div className="workflow-connector__line" />
                  <span className="workflow-connector__arrow">→</span>
                </div>
              )}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
