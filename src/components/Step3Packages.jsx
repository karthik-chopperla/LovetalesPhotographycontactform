import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Eye, Sparkles } from 'lucide-react';
import { WEDDING_PACKAGES } from '../data/packagesData';
import PackageDetailModal from './PackageDetailModal';

export default function Step3Packages({ formData, updateFormData, onNext, onBack }) {
  const [viewingPackage, setViewingPackage] = useState(null);

  const handleSelectPackage = (pkg) => {
    updateFormData('selectedPackage', pkg.name);
    updateFormData('packagePrice', pkg.priceDisplay);
    if (viewingPackage) {
      setViewingPackage(null);
    }
    onNext();
  };

  return (
    <div className="step-card">
      <div className="step-header-group">
        <span className="step-subtitle-badge">Step 03</span>
        <h2 className="step-title">Wedding Photography Packages</h2>
        <p className="step-description">
          Select a tailored wedding experience. Prices shown are starting dummy visualization values.
        </p>
      </div>

      <div className="packages-grid">
        {WEDDING_PACKAGES.map((pkg) => {
          const isSelected = formData.selectedPackage === pkg.name;

          return (
            <div 
              key={pkg.id} 
              className={`package-card ${pkg.isRecommended ? 'recommended' : ''} ${isSelected ? 'selected' : ''}`}
            >
              {pkg.badgeText && (
                <div className="package-card-badge">
                  {pkg.badgeText}
                </div>
              )}

              <img 
                src={pkg.coverImg} 
                alt={pkg.name} 
                className="package-card-header-img" 
              />

              <div className="package-card-body">
                <h3 className="package-card-title">{pkg.name}</h3>
                <div className="package-card-price">
                  <span>{pkg.priceDisplay}</span>
                  <span className="package-price-sub">/ starting</span>
                </div>

                <p className="package-card-desc">{pkg.shortDesc}</p>

                <ul className="package-highlights-list">
                  {pkg.highlights.map((item, idx) => (
                    <li key={idx} className="package-highlight-item">
                      <Sparkles className="highlight-bullet" size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="package-card-actions">
                  <button
                    type="button"
                    className="btn btn-outline-gold"
                    onClick={() => setViewingPackage(pkg)}
                  >
                    <Eye size={15} />
                    <span>View Package</span>
                  </button>

                  <button
                    type="button"
                    className={`btn ${isSelected ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => handleSelectPackage(pkg)}
                  >
                    {isSelected ? (
                      <>
                        <CheckCircle size={15} />
                        <span>Selected</span>
                      </>
                    ) : (
                      <span>Select Package</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="nav-actions">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
      </div>

      {/* View Package Modal overlay */}
      {viewingPackage && (
        <PackageDetailModal
          packageData={viewingPackage}
          onClose={() => setViewingPackage(null)}
          onSelectPackage={handleSelectPackage}
        />
      )}
    </div>
  );
}
