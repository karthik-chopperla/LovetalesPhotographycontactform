import React from 'react';
import { ArrowRight, Check, User } from 'lucide-react';
import { SHOOT_TYPES } from '../data/packagesData';

export default function Step2ShootType({ formData, updateFormData, onNext }) {
  const handleSelectType = (id) => {
    updateFormData('shootType', id);
  };

  const handleContinue = () => {
    if (!formData.shootType) {
      alert('Please select a shoot type to continue.');
      return;
    }
    onNext();
  };

  return (
    <div className="flow-step-card">
      <div className="flow-step-header">
        <h2 className="flow-step-title">What are you looking for?</h2>
        <p className="flow-step-subtitle">
          Choose the type of shoot you are planning.
        </p>
      </div>

      <div className="shoot-grid-layout">
        {SHOOT_TYPES.map((item) => {
          const isSelected = formData.shootType === item.id;

          return (
            <div
              key={item.id}
              className={`shoot-type-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectType(item.id)}
            >
              {isSelected && (
                <div className="shoot-check-badge">
                  <Check size={12} strokeWidth={3} />
                </div>
              )}

              {item.isIconOnly ? (
                <div className="other-icon-card">
                  <User size={28} />
                  <span className="shoot-card-label">{item.label}</span>
                </div>
              ) : (
                <div className="shoot-img-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.label} 
                    className="shoot-img-bg" 
                  />
                  <div className="shoot-img-overlay">
                    <span className="shoot-card-label">{item.label}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flow-actions" style={{ marginTop: '2rem' }}>
        <button 
          type="button" 
          className="btn-flow-primary"
          onClick={handleContinue}
          disabled={!formData.shootType}
        >
          <span>Continue</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

