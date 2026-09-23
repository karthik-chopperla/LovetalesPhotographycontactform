import React from 'react';
import { Camera, MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="studio-header">
      <div className="header-container">
        <div className="brand-block" onClick={() => window.location.reload()}>
          <div className="brand-icon">
            <Camera size={20} />
          </div>
          <div>
            <div className="brand-name">Love Tales</div>
            <span className="brand-tagline">Photography & Films</span>
          </div>
        </div>

        <a 
          href="https://wa.me/919492992006" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-badge-link"
          title="Direct WhatsApp Support"
        >
          <MessageSquare size={16} />
          <span>+91 9492992006</span>
        </a>
      </div>
    </header>
  );
}
