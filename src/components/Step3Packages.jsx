import React, { useState } from 'react';
import { Camera, Film, Radio, BookOpen, Video, Eye, Check } from 'lucide-react';
import { WEDDING_PACKAGES } from '../data/packagesData';
import PackageDetailModal from './PackageDetailModal';

export default function Step3Packages({ formData, updateFormData, onNext }) {
  const [viewingPackage, setViewingPackage] = useState(null);

  const handleSelectPackage = (pkg) => {
    updateFormData('selectedPackage', pkg.name);
    updateFormData('packagePrice', pkg.priceDisplay);
    if (viewingPackage) {
      setViewingPackage(null);
    }
    onNext();
  };

  const getHighlightIcon = (text) => {
    if (text.includes('Photo')) return <Camera size={14} />;
    if (text.includes('Cinema')) return <Film size={14} />;
    if (text.includes('Drone')) return <Radio size={14} />;
    if (text.includes('Album')) return <BookOpen size={14} />;
    return <Video size={14} />;
  };

  return (
    <div className="flow-step-card">
      <div className="flow-step-header">
        <h2 className="flow-step-title">Choose Your Wedding Package</h2>
        <p className="flow-step-subtitle">
          Explore our wedding photography and cinematography packages.
        </p>
      </div>

      <div className="packages-card-grid">
        {WEDDING_PACKAGES.map((pkg) => {
          const isSelected = formData.selectedPackage === pkg.name;

          return (
            <div 
              key={pkg.id} 
              className={`package-item-card ${isSelected ? 'selected' : ''}`}
            >
              <div className="package-img-container">
                <img 
                  src={pkg.coverImg} 
                  alt={pkg.name} 
                  className="package-img-bg" 
                />
              </div>

              <div className="package-card-content">
                <h3 className="package-item-name">{pkg.name}</h3>
                <div className="package-item-price">{pkg.priceDisplay}</div>

                <div className="package-features-list">
                  {pkg.highlights.map((item, idx) => (
                    <div key={idx} className="package-feature-line">
                      <span className="feature-icon">{getHighlightIcon(item)}</span>
                      <span className="feature-text">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="package-card-buttons">
                  <button
                    type="button"
                    className="btn-package-outline"
                    onClick={() => setViewingPackage(pkg)}
                  >
                    <span>View Package</span>
                  </button>

                  <button
                    type="button"
                    className={`btn-package-solid ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelectPackage(pkg)}
                  >
                    {isSelected ? (
                      <>
                        <Check size={14} />
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

      {/* Pagination Carousel Indicator Dots */}
      <div className="packages-pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* View Package Modal Overlay */}
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

