import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <img 
        src="/images/hero.jpg" 
        alt="Love Tales Photography & Films Banner" 
        className="hero-bg-img" 
      />
      <div className="hero-overlay">
        <div className="hero-badge">
          <Sparkles size={12} />
          <span>Luxury Wedding Studio</span>
        </div>
        <h1 className="hero-title font-serif">Crafting Timeless Cinematic Stories</h1>
      </div>
    </div>
  );
}
