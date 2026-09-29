import React, { useEffect } from 'react';
import { ExternalLink, MessageCircle, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SuccessModal({ onReset, onReopenWhatsApp }) {
  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="whatsapp-modal-overlay">
      <div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-modal-title">
        <div className="success-modal-icon">
          <MessageCircle size={24} />
        </div>
        <h2 id="success-modal-title">Enquiry ready</h2>
        <p>Your enquiry details are ready to share on WhatsApp.</p>
        <div className="success-modal-actions">
          <button type="button" className="btn-flow-primary btn-whatsapp-dark" onClick={onReopenWhatsApp}>
            <ExternalLink size={16} />
            <span>Open in WhatsApp</span>
          </button>

          <button type="button" className="btn-flow-outline" onClick={onReset}>
            <RotateCcw size={14} />
            <span>Start New Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}

