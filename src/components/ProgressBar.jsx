import React from 'react';
import { Check } from 'lucide-react';

export default function ProgressBar({ currentStep, shootType, onStepClick }) {
  // Define full steps list
  const isWedding = shootType === 'wedding';

  const stepsList = [
    { id: 1, key: 'details', label: '01 Details', shortName: 'Your Details' },
    { id: 2, key: 'shootType', label: '02 Shoot Type', shortName: 'Shoot Type' },
    ...(isWedding ? [{ id: 3, key: 'packages', label: '03 Packages', shortName: 'Packages' }] : []),
    { id: isWedding ? 4 : 3, key: 'eventDetails', label: isWedding ? '04 Event Details' : '03 Event Details', shortName: 'Event Details' },
    { id: isWedding ? 5 : 4, key: 'review', label: isWedding ? '05 Review' : '04 Review', shortName: 'Review' },
  ];

  const activeIndex = stepsList.findIndex(s => s.key === currentStep);
  const totalSteps = stepsList.length;
  const currentStepObj = stepsList[activeIndex] || stepsList[0];
  const progressPercent = ((activeIndex + 1) / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      {/* Desktop Step Flow */}
      <div className="progress-steps-desktop">
        <div className="progress-track-line">
          <div 
            className="progress-track-fill" 
            style={{ width: `${(activeIndex / (totalSteps - 1)) * 100}%` }}
          />
        </div>

        {stepsList.map((step, idx) => {
          const isCompleted = idx < activeIndex;
          const isActive = idx === activeIndex;

          return (
            <button
              key={step.key}
              type="button"
              className={`progress-step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
              onClick={() => {
                if (isCompleted) {
                  onStepClick(step.key);
                }
              }}
              title={isCompleted ? `Return to ${step.shortName}` : step.shortName}
            >
              <div className="step-node">
                {isCompleted ? <Check size={16} /> : idx + 1}
              </div>
              <span className="step-label">{step.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile Step Header */}
      <div className="progress-mobile-bar">
        <div className="progress-mobile-header">
          <span className="progress-mobile-text font-brand">
            Step {activeIndex + 1} of {totalSteps}
          </span>
          <span className="progress-mobile-step-name font-serif">
            {currentStepObj?.shortName}
          </span>
        </div>
        <div className="progress-mobile-track">
          <div 
            className="progress-mobile-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
