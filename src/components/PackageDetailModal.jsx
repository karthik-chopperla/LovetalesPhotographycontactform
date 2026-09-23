import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Film, Camera, Sparkles, Layers, Info } from 'lucide-react';

export default function PackageDetailModal({ packageData, onClose, onSelectPackage }) {
  if (!packageData) return null;

  return (
    <div className="package-detail-modal-overlay" onClick={onClose}>
      <div 
        className="package-detail-container" 
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing modal
      >
        {/* Top Control Bar */}
        <div className="modal-top-bar">
          <button type="button" className="modal-back-btn" onClick={onClose}>
            <ArrowLeft size={16} />
            <span>Back to Packages</span>
          </button>
          
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => onSelectPackage(packageData)}
          >
            <span>Select Package</span>
          </button>
        </div>

        {/* Header Visual Banner */}
        <div className="modal-header-banner">
          <img 
            src={packageData.coverImg} 
            alt={packageData.name} 
            className="modal-banner-img" 
          />
          <div className="modal-header-content">
            <h2 className="modal-package-title font-serif">{packageData.name}</h2>
            <div className="modal-package-price font-brand">{packageData.priceDisplay}</div>
          </div>
        </div>

        {/* Detailed Body Content */}
        <div className="modal-body-content">
          {/* Section 1: Overview */}
          <div className="detail-section">
            <h3 className="detail-section-title font-serif">
              <Sparkles size={18} />
              Package Overview
            </h3>
            <p className="package-card-desc" style={{ fontSize: '1rem', color: '#E2E5ED' }}>
              {packageData.details.intro}
            </p>
          </div>

          {/* Section 2: Coverage Standard */}
          <div className="detail-section">
            <h3 className="detail-section-title font-serif">
              <ShieldCheck size={18} />
              Predefined Coverage
            </h3>
            <div className="deliverable-item" style={{ background: 'rgba(212, 175, 55, 0.08)', borderColor: 'var(--gold-primary)' }}>
              <span className="font-brand" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                {packageData.details.coverage}
              </span>
            </div>
          </div>

          {/* Section 3: What's Included */}
          <div className="detail-section">
            <h3 className="detail-section-title font-serif">
              <Layers size={18} />
              What's Included
            </h3>
            <div className="included-grid">
              {packageData.details.included.map((item, idx) => (
                <div key={idx} className="included-card">
                  <div className="included-card-title">
                    <CheckCircle2 size={15} style={{ color: 'var(--gold-primary)' }} />
                    <span>{item.title}</span>
                  </div>
                  <p className="included-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Deliverables */}
          <div className="detail-section">
            <h3 className="detail-section-title font-serif">
              <Film size={18} />
              Deliverables & Deliverable Assets
            </h3>
            <div className="deliverables-list">
              {packageData.details.deliverablesList.map((item, idx) => (
                <div key={idx} className="deliverable-item">
                  <CheckCircle2 size={15} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Additional Information */}
          <div className="detail-section">
            <h3 className="detail-section-title font-serif">
              <Info size={18} />
              Additional Information
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', background: 'rgba(11, 12, 16, 0.5)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid rgba(255,255,255,0.2)' }}>
              {packageData.details.additionalInfo}
            </p>
          </div>

          {/* Bottom Action Footer inside Modal */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              <ArrowLeft size={16} />
              <span>Back to Packages</span>
            </button>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onSelectPackage(packageData)}
            >
              <span>Select Package</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
