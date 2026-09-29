import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Header({ currentStep, onBack, onLogoClick }) {
  const showBack = currentStep && currentStep !== 'landing';

  return (
    <header className="app-header">
      <div className="header-left">
        {showBack ? (
          <button type="button" className="header-back-btn" onClick={onBack}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        ) : (
          <div className="header-placeholder"></div>
        )}
      </div>

      <div className="header-center" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
        <h1 className="header-logo-title font-serif">Love Tales</h1>
        <span className="header-logo-sub font-brand">PHOTOGRAPHY & FILMS</span>
      </div>

      <div className="header-right">
      </div>
    </header>
  );
}

