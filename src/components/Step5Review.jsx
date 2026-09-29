import React from 'react';
import { ArrowRight, Edit3 } from 'lucide-react';
import { SHOOT_TYPES } from '../data/packagesData';

export default function Step5Review({ formData, onEditStep, onCompleteWhatsApp }) {
  const getShootTypeLabel = (id) => {
    const found = SHOOT_TYPES.find(s => s.id === id);
    return found ? found.label : id || 'Wedding';
  };

  const generateWhatsAppMessage = () => {
    const shootLabel = getShootTypeLabel(formData.shootType);
    const eventDate = formData.eventDate || '18 Dec 2026';
    const eventDays = formData.eventDays || '2 Days';
    const venueName = formData.venueName || 'Convention Hall';
    const venueLocation = formData.venueLocation || 'Vijayawada';
    const guests = formData.approxGuests || '500';
    const albumReq = formData.albumReq || 'Included Album';
    const addReq = formData.additionalReq ? formData.additionalReq : 'Drone coverage and special ceremony coverage.';

    return `Hello Love Tales Photography & Films,

I would like to enquire about a ${shootLabel.toLowerCase()} shoot.

Name: ${formData.name || 'Rahul Kumar'}
Mobile: ${formData.mobile || '+91 98765 43210'}
Email: ${formData.email || 'rahul@email.com'}
Shoot Type: ${shootLabel}

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
    const whatsappUrl = `https://wa.me/919951799508?text=${encodeURIComponent(message)}`;
    
    onCompleteWhatsApp();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flow-step-card">
      <div className="flow-step-header">
        <h2 className="flow-step-title">Review Your Enquiry</h2>
        <p className="flow-step-subtitle">
          Please review your details before sending.
        </p>
      </div>

      <div className="review-cards-list">
        {/* Your Details */}
        <div className="review-card">
          <div className="review-card-header">
            <h3 className="review-card-title">Your Details</h3>
            <button 
              type="button" 
              className="review-edit-btn" 
              onClick={() => onEditStep('details')}
            >
              <Edit3 size={12} />
              <span>Edit</span>
            </button>
          </div>
          <div className="review-data-rows">
            <div className="review-row">
              <span className="row-key">Name</span>
              <span className="row-val">{formData.name || 'Rahul Kumar'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Mobile</span>
              <span className="row-val">{formData.mobile || '+91 98765 43210'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Email</span>
              <span className="row-val">{formData.email || 'rahul@email.com'}</span>
            </div>
          </div>
        </div>

        {/* Shoot Details */}
        <div className="review-card">
          <div className="review-card-header">
            <h3 className="review-card-title">Shoot Details</h3>
            <button 
              type="button" 
              className="review-edit-btn" 
              onClick={() => onEditStep('shootType')}
            >
              <Edit3 size={12} />
              <span>Edit</span>
            </button>
          </div>
          <div className="review-data-rows">
            <div className="review-row">
              <span className="row-key">Shoot</span>
              <span className="row-val">{getShootTypeLabel(formData.shootType)}</span>
            </div>
            {formData.shootType === 'wedding' && (
              <>
                <div className="review-row">
                  <span className="row-key">Selected Package</span>
                  <span className="row-val">{formData.selectedPackage || 'Premium Wedding'}</span>
                </div>
                <div className="review-row">
                  <span className="row-key">Package Price</span>
                  <span className="row-val price-highlight">{formData.packagePrice || '₹3,00,000'}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Event Details */}
        <div className="review-card">
          <div className="review-card-header">
            <h3 className="review-card-title">Event Details</h3>
            <button 
              type="button" 
              className="review-edit-btn" 
              onClick={() => onEditStep('eventDetails')}
            >
              <Edit3 size={12} />
              <span>Edit</span>
            </button>
          </div>
          <div className="review-data-rows">
            <div className="review-row">
              <span className="row-key">Event Date</span>
              <span className="row-val">{formData.eventDate || '18 Dec 2026'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Event Days</span>
              <span className="row-val">{formData.eventDays || '2 Days'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Venue Name</span>
              <span className="row-val">{formData.venueName || 'Convention Hall'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Venue Location</span>
              <span className="row-val">{formData.venueLocation || 'Vijayawada'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Approximate Guests</span>
              <span className="row-val">{formData.approxGuests || '500'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Album Requirement</span>
              <span className="row-val">{formData.albumReq || 'Included Album'}</span>
            </div>
            <div className="review-row">
              <span className="row-key">Additional Requirements</span>
              <span className="row-val">{formData.additionalReq || 'Drone coverage and special ceremony coverage.'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review Actions */}
      <div className="review-actions-group">
        <button 
          type="button" 
          className="btn-flow-outline" 
          onClick={() => onEditStep('details')}
        >
          Edit Details
        </button>

        <button 
          type="button" 
          className="btn-flow-primary btn-whatsapp-dark"
          onClick={handleSendWhatsApp}
        >
          <span>Send Enquiry on WhatsApp</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

