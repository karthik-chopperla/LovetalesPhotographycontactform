import React from 'react';
import { User, Camera, Calendar, Edit3, MessageSquare, Sparkles } from 'lucide-react';
import { SHOOT_TYPES } from '../data/packagesData';

export default function Step5Review({ formData, onEditStep, onCompleteWhatsApp }) {
  const getShootTypeLabel = (id) => {
    const found = SHOOT_TYPES.find(s => s.id === id);
    return found ? found.label : id || 'Not Specified';
  };

  const generateWhatsAppMessage = () => {
    const shootLabel = getShootTypeLabel(formData.shootType);
    const packageName = formData.selectedPackage || (formData.shootType === 'wedding' ? 'Custom Wedding' : 'Standard Enquiry');
    const priceText = formData.packagePrice || 'Custom Quote Request';
    const eventDate = formData.eventDate || 'To be decided';
    const eventDays = formData.eventDays || '1 Day';
    const venueName = formData.venueName || 'Not specified';
    const venueLocation = formData.venueLocation || 'Not specified';
    const guests = formData.approxGuests || 'Not specified';
    const albumReq = formData.albumReq || 'Not specified';
    const addReq = formData.additionalReq ? formData.additionalReq : 'None';

    return `Hello Love Tales Photography & Films,

I would like to enquire about a ${shootLabel.toLowerCase()} shoot.

Name: ${formData.name || ''}
Mobile: ${formData.mobile || ''}
Email: ${formData.email || ''}
Shoot Type: ${shootLabel}
Selected Package: ${packageName}
Package Price: ${priceText}
Event Date: ${eventDate}
Event Days: ${eventDays}
Venue: ${venueName}
Location: ${venueLocation}
Approximate Guests: ${guests}
Album Requirement: ${albumReq}
Additional Requirements:
${addReq}

Please contact me regarding my enquiry.`;
  };

  const handleSendWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919492992006?text=${encodeURIComponent(message)}`;
    
    // Trigger callback for modal feedback / celebration
    onCompleteWhatsApp();

    // Open WhatsApp deep link in a new tab / window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="step-card">
      <div className="step-header-group">
        <span className="step-subtitle-badge">
          {formData.shootType === 'wedding' ? 'Step 05' : 'Step 04'}
        </span>
        <h2 className="step-title">Review Your Enquiry</h2>
        <p className="step-description">
          Please review your information below before sending your enquiry directly via WhatsApp.
        </p>
      </div>

      {/* Customer Details Summary Card */}
      <div className="summary-card">
        <div className="summary-card-header">
          <h3 className="summary-card-title">
            <User size={18} />
            Customer Details
          </h3>
          <button 
            type="button" 
            className="edit-link-btn" 
            onClick={() => onEditStep('details')}
          >
            <Edit3 size={13} />
            <span>Edit Details</span>
          </button>
        </div>
        <div className="summary-row">
          <span className="summary-label">Full Name</span>
          <span className="summary-value">{formData.name}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Mobile Number</span>
          <span className="summary-value">{formData.mobile}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Email Address</span>
          <span className="summary-value">{formData.email}</span>
        </div>
      </div>

      {/* Shoot & Package Details Summary Card */}
      <div className="summary-card">
        <div className="summary-card-header">
          <h3 className="summary-card-title">
            <Camera size={18} />
            Shoot & Package Selection
          </h3>
          <button 
            type="button" 
            className="edit-link-btn" 
            onClick={() => onEditStep('shootType')}
          >
            <Edit3 size={13} />
            <span>Edit Shoot Type</span>
          </button>
        </div>
        <div className="summary-row">
          <span className="summary-label">Shoot Type</span>
          <span className="summary-value" style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
            {getShootTypeLabel(formData.shootType)}
          </span>
        </div>
        {formData.shootType === 'wedding' && (
          <>
            <div className="summary-row">
              <span className="summary-label">Selected Package</span>
              <span className="summary-value">{formData.selectedPackage || 'Custom Package'}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Displayed Package Price</span>
              <span className="summary-value summary-price-highlight">
                {formData.packagePrice || '₹2,00,000'}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Event Details Summary Card */}
      <div className="summary-card">
        <div className="summary-card-header">
          <h3 className="summary-card-title">
            <Calendar size={18} />
            Event Details
          </h3>
          <button 
            type="button" 
            className="edit-link-btn" 
            onClick={() => onEditStep('eventDetails')}
          >
            <Edit3 size={13} />
            <span>Edit Event</span>
          </button>
        </div>
        <div className="summary-row">
          <span className="summary-label">Event Date</span>
          <span className="summary-value">{formData.eventDate || 'Not specified'}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Number of Event Days</span>
          <span className="summary-value">{formData.eventDays || '1 Day'}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Venue Name</span>
          <span className="summary-value">{formData.venueName || 'Not specified'}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Venue Location</span>
          <span className="summary-value">{formData.venueLocation || 'Not specified'}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Approximate Guests</span>
          <span className="summary-value">{formData.approxGuests || 'Not specified'}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Album Requirement</span>
          <span className="summary-value">{formData.albumReq || 'Not specified'}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Additional Requirements</span>
          <span className="summary-value">{formData.additionalReq || 'None'}</span>
        </div>
      </div>

      {/* Final WhatsApp Action Block */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-sub)', marginBottom: '1.25rem' }}>
          Clicking below will launch WhatsApp with your formatted enquiry ready for our studio team.
        </p>

        <button 
          type="button" 
          className="btn btn-whatsapp btn-block"
          onClick={handleSendWhatsApp}
        >
          <MessageSquare size={20} />
          <span>Send Enquiry on WhatsApp (+91 9492992006)</span>
        </button>

        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.75rem' }}>
          Love Tales Photography & Films • Direct Contact: +91 9492992006
        </span>
      </div>
    </div>
  );
}
