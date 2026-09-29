import React from 'react';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';

export default function Step4EventDetails({ formData, updateFormData, onNext }) {
  const eventDaysOptions = ['1 Day', '2 Days', '3 Days', '3+ Days'];
  const guestsOptions = ['< 100 Guests', '100–300 Guests', '300–500 Guests', '500–1000 Guests', '1000+ Guests'];
  const albumOptions = ['Included Album', 'Additional Album', 'Not Sure'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.eventDate) {
      alert('Please select an event date.');
      return;
    }
    onNext();
  };

  return (
    <div className="flow-step-card">
      <div className="flow-step-header">
        <h2 className="flow-step-title">Tell Us About Your Event</h2>
        <p className="flow-step-subtitle">
          A few details will help us understand your requirements.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flow-form">
        {/* Event Date */}
        <div className="field-group">
          <label className="field-label" htmlFor="eventDate">Event Date</label>
          <div className="input-with-icon">
            <input
              id="eventDate"
              type="date"
              className="flow-input flow-input-date"
              value={formData.eventDate || ''}
              onChange={(e) => updateFormData('eventDate', e.target.value)}
              required
            />
            <div className="input-icon-right">
              <Calendar size={18} />
            </div>
          </div>
        </div>

        {/* Number of Event Days */}
        <div className="field-group">
          <label className="field-label">Number of Event Days</label>
          <div className="segmented-button-row">
            {eventDaysOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`segmented-btn ${formData.eventDays === opt ? 'active' : ''}`}
                onClick={() => updateFormData('eventDays', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Venue Name */}
        <div className="field-group">
          <label className="field-label" htmlFor="venueName">Venue Name</label>
          <input
            id="venueName"
            type="text"
            className="flow-input"
            placeholder="Enter venue name"
            value={formData.venueName || ''}
            onChange={(e) => updateFormData('venueName', e.target.value)}
          />
        </div>

        {/* Venue Location */}
        <div className="field-group">
          <label className="field-label" htmlFor="venueLocation">Venue Location</label>
          <input
            id="venueLocation"
            type="text"
            className="flow-input"
            placeholder="Enter venue location"
            value={formData.venueLocation || ''}
            onChange={(e) => updateFormData('venueLocation', e.target.value)}
          />
        </div>

        {/* Approximate Number of Guests */}
        <div className="field-group">
          <label className="field-label" htmlFor="approxGuests">Approximate Number of Guests</label>
          <div className="select-wrapper">
            <select
              id="approxGuests"
              className="flow-select"
              value={formData.approxGuests || ''}
              onChange={(e) => updateFormData('approxGuests', e.target.value)}
            >
              <option value="" disabled>Select number of guests</option>
              {guestsOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown size={18} className="select-arrow-icon" />
          </div>
        </div>

        {/* Album Requirement */}
        <div className="field-group">
          <label className="field-label">Album Requirement</label>
          <div className="segmented-button-row">
            {albumOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`segmented-btn ${formData.albumReq === opt ? 'active' : ''}`}
                onClick={() => updateFormData('albumReq', opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Requirements */}
        <div className="field-group">
          <label className="field-label" htmlFor="additionalReq">Additional Requirements</label>
          <textarea
            id="additionalReq"
            className="flow-textarea"
            placeholder="Tell us about any special requirements..."
            value={formData.additionalReq || ''}
            onChange={(e) => updateFormData('additionalReq', e.target.value)}
            rows={3}
          />
        </div>

        {/* Navigation Action */}
        <div className="flow-actions">
          <button type="submit" className="btn-flow-primary">
            <span>Continue</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}

