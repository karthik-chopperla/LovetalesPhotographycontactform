import React from 'react';
import { Check } from 'lucide-react';

export default function ProgressBar({ currentStep, shootType, onStepClick }) {
  const isWedding = shootType === 'wedding';

  const stepsList = [
    { num: 1, key: 'details', label: 'Your Details' },
    { num: 2, key: 'shootType', label: 'Shoot Type' },
    ...(isWedding ? [{ num: 3, key: 'packages', label: 'Packages' }] : []),
    { num: isWedding ? 4 : 3, key: 'eventDetails', label: 'Event Details' },
    { num: isWedding ? 5 : 4, key: 'review', label: 'Review' },
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
                <span className="node-label">{step.num}. {step.label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

