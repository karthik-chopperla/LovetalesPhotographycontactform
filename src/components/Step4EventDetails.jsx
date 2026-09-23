import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Building, Users, BookOpen, MessageSquare, Plus } from 'lucide-react';

export default function Step4EventDetails({ formData, updateFormData, onNext, onBack }) {
  const eventDaysOptions = ['1 Day', '2 Days', '3 Days', '3+ Days'];
  const guestsOptions = ['< 100 Guests', '100–300 Guests', '300–500 Guests', '500–1000 Guests', '1000+ Guests'];
  const albumOptions = ['Included Album', 'No Album', 'Need More Details'];

  const exampleRequirementTags = [
    'Drone coverage',
    'Special ceremony coverage',
    'Extra cinematic film',
    'Destination event',
    'Multiple venues'
  ];

  const handleAddTag = (tag) => {
    const currentText = formData.additionalReq || '';
    if (!currentText.includes(tag)) {
      const newText = currentText ? `${currentText}, ${tag}` : tag;
      updateFormData('additionalReq', newText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.eventDate) {
      alert('Please select an event date.');
      return;
    }
    onNext();
  };

  return (
    <div className="step-card">
      <div className="step-header-group">
        <span className="step-subtitle-badge">
          {formData.shootType === 'wedding' ? 'Step 04' : 'Step 03'}
        </span>
        <h2 className="step-title">Event & Celebration Details</h2>
        <p className="step-description">
          Tell us more about your event schedule, venue, and specific visual preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        {/* Selected Package Banner indicator */}
        {formData.selectedPackage && (
          <div style={{
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid var(--gold-border)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.8rem 1.2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>
              Selected Package: <strong style={{ color: '#FFF' }}>{formData.selectedPackage}</strong>
            </span>
            <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--gold-light)' }}>
              {formData.packagePrice}
            </span>
          </div>
        )}

        {/* Event Date */}
        <div className="form-group">
          <label className="form-label" htmlFor="eventDate">
            <Calendar size={15} />
            Event Date <span className="required-star">*</span>
          </label>
          <input
            id="eventDate"
            type="date"
            className="input-field"
            value={formData.eventDate || ''}
            onChange={(e) => updateFormData('eventDate', e.target.value)}
            required
          />
        </div>

        {/* Number of Event Days */}
        <div className="form-group">
          <label className="form-label">
            <Calendar size={15} />
            Number of Event Days
          </label>
          <div className="chip-grid">
            {eventDaysOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`chip-option ${formData.eventDays === opt ? 'selected' : ''}`}
                onClick={() => updateFormData('eventDays', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Note: Event days selection is for planning inquiry and does not alter displayed package pricing.
          </span>
        </div>

        {/* Venue Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="venueName">
            <Building size={15} />
            Venue Name
          </label>
          <input
            id="venueName"
            type="text"
            className="input-field"
            placeholder="e.g. Royal Palace / Taj Convention Hall"
            value={formData.venueName || ''}
            onChange={(e) => updateFormData('venueName', e.target.value)}
          />
        </div>

        {/* Venue Location */}
        <div className="form-group">
          <label className="form-label" htmlFor="venueLocation">
            <MapPin size={15} />
            Venue Location / City
          </label>
          <input
            id="venueLocation"
            type="text"
            className="input-field"
            placeholder="e.g. Vijayawada, Andhra Pradesh"
            value={formData.venueLocation || ''}
            onChange={(e) => updateFormData('venueLocation', e.target.value)}
          />
        </div>

        {/* Approximate Guests */}
        <div className="form-group">
          <label className="form-label">
            <Users size={15} />
            Approximate Number of Guests
          </label>
          <div className="chip-grid">
            {guestsOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`chip-option ${formData.approxGuests === opt ? 'selected' : ''}`}
                onClick={() => updateFormData('approxGuests', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Album Requirement */}
        <div className="form-group">
          <label className="form-label">
            <BookOpen size={15} />
            Album Requirement
          </label>
          <div className="chip-grid">
            {albumOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`chip-option ${formData.albumReq === opt ? 'selected' : ''}`}
                onClick={() => updateFormData('albumReq', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="form-group">
          <label className="form-label" htmlFor="additionalReq">
            <MessageSquare size={15} />
            Additional Requirements
          </label>
          <textarea
            id="additionalReq"
            className="input-field"
            placeholder="Tell us about any special requirements for your event (e.g., Drone coverage, Special ceremony coverage, Destination event, Multiple venues)."
            value={formData.additionalReq || ''}
            onChange={(e) => updateFormData('additionalReq', e.target.value)}
          />

          {/* Quick Click Suggestions */}
          <div style={{ marginTop: '0.4rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
              Quick Add Suggestions:
            </span>
            <div className="chip-grid">
              {exampleRequirementTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="chip-option"
                  style={{ fontSize: '0.78rem', padding: '0.3rem 0.7rem' }}
                  onClick={() => handleAddTag(tag)}
                >
                  <Plus size={12} style={{ display: 'inline', marginRight: '3px' }} />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-actions">
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button type="submit" className="btn btn-primary">
            <span>Continue to Review</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
