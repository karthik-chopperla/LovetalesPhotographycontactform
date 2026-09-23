import React, { useEffect } from 'react';
import { CheckCircle, MessageSquare, RotateCcw, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SuccessModal({ onReset, onReopenWhatsApp }) {
  useEffect(() => {
    // Fire celebratory confetti effect
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="package-detail-modal-overlay">
      <div className="package-detail-container" style={{ maxWidth: '560px', padding: '2.5rem', textAlign: 'center' }}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'rgba(37, 211, 102, 0.15)',
          border: '2px solid #25D366',
          color: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto'
        }}>
          <CheckCircle size={36} />
        </div>

        <h2 className="font-serif" style={{ fontSize: '2rem', color: '#FFF', marginBottom: '0.5rem' }}>
          Enquiry Prepared!
        </h2>

        <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          WhatsApp has opened with your formatted enquiry for <strong style={{ color: 'var(--gold-light)' }}>Love Tales Photography & Films</strong> (+91 9492992006). Please press <strong>Send</strong> in WhatsApp to transmit your request.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button 
            type="button" 
            className="btn btn-whatsapp btn-block"
            onClick={onReopenWhatsApp}
          >
            <ExternalLink size={18} />
            <span>Re-open WhatsApp Chat</span>
          </button>

          <button 
            type="button" 
            className="btn btn-secondary btn-block"
            onClick={onReset}
          >
            <RotateCcw size={16} />
            <span>Start New Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  );
}
