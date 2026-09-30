import React from 'react';
import { Check } from 'lucide-react';

export default function ProgressBar({ currentStep, onStepClick }) {
  const stepsList = [
    { num: 1, key: 'details', label: 'Your Details' },
    { num: 2, key: 'shootType', label: 'Shoot Type' },
    { num: 3, key: 'eventDetails', label: 'Event Details' },
    { num: 4, key: 'review', label: 'Review' },
  ];

  const activeIndex = stepsList.findIndex(s => s.key === currentStep);

  return (
    <nav className="step-progress-wrapper" aria-label="Booking Progress">
      <div className="step-progress-track">
        {stepsList.map((step, idx) => {
          const isCompleted = idx < activeIndex;
          const isActive = idx === activeIndex;

          return (
            <React.Fragment key={step.key}>
              {idx > 0 && (
                <div 
                  className={`step-progress-line ${idx <= activeIndex ? 'filled' : ''}`} 
                />
              )}

              <button
                type="button"
                className={`step-progress-node ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => {
                  if (isCompleted) onStepClick(step.key);
                }}
                disabled={!isCompleted && !isActive}
              >
                <div className="node-circle">
                  {isCompleted ? <Check size={13} strokeWidth={3} /> : step.num}
                </div>
                <span className="node-label">{step.label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

