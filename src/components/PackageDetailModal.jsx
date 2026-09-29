import React from 'react';
import { ArrowLeft, X, Camera, Film, Radio, Church, Users, Clock, Cog, BookOpen, Image, Video, Sparkles } from 'lucide-react';

export default function PackageDetailModal({ packageData, onClose, onSelectPackage }) {
  if (!packageData) return null;

  const getIncludedIcon = (iconName) => {
    switch (iconName) {
      case 'camera': return <Camera size={18} />;
      case 'film': return <Film size={18} />;
      case 'drone': return <Radio size={18} />;
      case 'church': return <Church size={18} />;
      case 'users': return <Users size={18} />;
      case 'clock': return <Clock size={18} />;
      case 'cog': return <Cog size={18} />;
      case 'book': return <BookOpen size={18} />;
      case 'image': return <Image size={18} />;
      case 'video': return <Video size={18} />;
      case 'sparkles': default: return <Sparkles size={18} />;
    }
  };

  return (
    <div className="package-overlay-backdrop" onClick={onClose}>
      <div className="package-overlay-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="overlay-top-nav">
          <button type="button" className="overlay-back-btn" onClick={onClose}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
          <button type="button" className="overlay-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Hero Banner Image */}
        <div className="overlay-hero-banner">
          <img src={packageData.coverImg} alt={packageData.name} className="overlay-banner-img" />
          <div className="overlay-hero-content">
            <h2 className="overlay-title">{packageData.name}</h2>
            <div className="overlay-price">{packageData.priceDisplay}</div>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="overlay-body">
          <p className="overlay-description">
            {packageData.shortDesc}
          </p>

          <div className="overlay-section">
            <h3 className="overlay-section-title">What's included</h3>
            
            <div className="included-grid-2col">
              {packageData.details.included.map((item, idx) => (
                <div key={idx} className="included-feature-card">
                  <div className="feature-icon-circle">
                    {getIncludedIcon(item.icon)}
                  </div>
                  <div className="feature-info">
                    <span className="feature-title">{item.title}</span>
                    <span className="feature-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Fixed Action Footer */}
        <div className="overlay-footer">
          <button 
            type="button" 
            className="btn-flow-primary"
            onClick={() => onSelectPackage(packageData)}
          >
            Select Package
          </button>
        </div>
      </div>
    </div>
  );
}

