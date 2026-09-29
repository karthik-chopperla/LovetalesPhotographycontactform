import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroBanner({ onStartFlow }) {
  return (
    <div className="hero-landing-screen">
      <img 
        src="/images/hero.jpg" 
        alt="Love Tales Photography & Films" 
        className="hero-landing-bg" 
      />
      <div className="hero-landing-overlay">
        <div className="hero-landing-content">
          <h1 className="hero-landing-title font-serif">
            Timeless Stories<br />Beautifully Captured
          </h1>
          
          <p className="hero-landing-tags">
            Wedding • Pre-Wedding • Engagement • Maternity<br />
            Family • Baby Shoot • More
          </p>

          <button 
            type="button" 
            className="btn-hero-pill"
            onClick={onStartFlow}
          >
            <span>Book Your Shoot</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="hero-scroll-indicator" onClick={onStartFlow}>
          <span>Scroll to explore</span>
          <ChevronDown size={14} className="scroll-arrow-icon" />
        </div>
      </div>
    </div>
  );
}

