import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Heart, 
  Camera, 
  Sparkles, 
  UserCheck, 
  Users, 
  Smile, 
  PlusCircle, 
  Check 
} from 'lucide-react';
import { SHOOT_TYPES } from '../data/packagesData';

export default function Step2ShootType({ formData, updateFormData, onNext, onBack }) {
  const iconMap = {
    Heart,
    Camera,
    Sparkles,
    UserCheck,
    Users,
    Smile,
    PlusCircle
  };

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
    <div className="step-card">
      <div className="step-header-group">
        <span className="step-subtitle-badge">Step 02</span>
        <h2 className="step-title">Choose Shoot Type</h2>
        <p className="step-description">
          Select the category of photography or film experience you are planning.
        </p>
      </div>

      <div className="shoot-cards-grid">
        {SHOOT_TYPES.map((item) => {
          const IconComponent = iconMap[item.icon] || Camera;
          const isSelected = formData.shootType === item.id;

          return (
            <div
              key={item.id}
              className={`shoot-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelectType(item.id)}
            >
              {isSelected && (
                <div className="shoot-card-check">
                  <Check size={12} />
                </div>
              )}
              <div className="shoot-card-icon">
                <IconComponent size={24} />
              </div>
              <h3 className="shoot-card-title">{item.label}</h3>
            </div>
          );
        })}
      </div>

      <div className="nav-actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={handleContinue}
          disabled={!formData.shootType}
        >
          <span>Continue</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
