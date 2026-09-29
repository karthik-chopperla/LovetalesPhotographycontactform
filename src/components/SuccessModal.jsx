import React, { useEffect } from 'react';
import { ArrowLeft, Video, MoreVertical, Send, CheckCheck, RotateCcw, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SuccessModal({ formData, onReset, onReopenWhatsApp }) {
  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const shootName = formData?.shootType ? formData.shootType.charAt(0).toUpperCase() + formData.shootType.slice(1) : 'Wedding';

  return (
    <div className="whatsapp-modal-overlay">
      <div className="phone-mockup-wrapper">
        {/* Phone Frame Header */}
        <div className="phone-header-bar">
          <div className="phone-header-left">
            <ArrowLeft size={18} className="phone-back-icon" />
            <div className="phone-avatar-circle">
              <span>LT</span>
            </div>
            <div className="phone-contact-info">
              <span className="phone-contact-name">Love Tales Photography & Films</span>
              <span className="phone-contact-num">+91 9951799508</span>
            </div>
          </div>

          <div className="phone-header-actions">
            <Video size={18} />
            <MoreVertical size={18} />
          </div>
        </div>

        {/* Phone Chat Canvas */}
        <div className="phone-chat-body">
          <div className="chat-date-pill">TODAY</div>

          <div className="whatsapp-msg-bubble">
            <p className="wa-text">
              Hello Love Tales Photography & Films,<br /><br />
              I would like to enquire about a {shootName.toLowerCase()} shoot.<br /><br />
              <u>Name: {formData?.name || 'Rahul Kumar'}</u><br />
              <u>Mobile: {formData?.mobile || '+91 98765 43210'}</u><br />
              <u>Email: {formData?.email || 'rahul@email.com'}</u><br />
              Shoot Type: {shootName}<br /><br />
              <u>Event Date: {formData?.eventDate || '18 December 2026'}</u><br />
              Event Days: {formData?.eventDays || '2 Days'}<br />
              <u>Venue: {formData?.venueName || 'Convention Hall'}</u><br />
              <u>Location: {formData?.venueLocation || 'Vijayawada'}</u><br />
              <u>Approximate Guests: {formData?.approxGuests || '500'}</u><br />
              Album Requirement: {formData?.albumReq || 'Included Album'}<br />
              <u>Additional Requirements:</u><br />
              {formData?.additionalReq || 'Drone coverage and special ceremony coverage.'}<br /><br />
              Please contact me regarding my enquiry.
            </p>
            <div className="wa-time-stamp">
              <span>12:45 PM</span>
              <CheckCheck size={14} className="wa-blue-ticks" />
            </div>
          </div>
        </div>

        {/* Phone Input Bar */}
        <div className="phone-input-bar">
          <div className="phone-input-fake">
            <span>Type a message</span>
          </div>
          <button type="button" className="phone-send-btn" onClick={onReopenWhatsApp}>
            <Send size={16} />
          </button>
        </div>

        {/* Modal Controls */}
        <div className="phone-modal-actions">
          <button type="button" className="btn-flow-primary btn-whatsapp-dark" onClick={onReopenWhatsApp}>
            <ExternalLink size={16} />
            <span>Open in WhatsApp (+91 9951799508)</span>
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

