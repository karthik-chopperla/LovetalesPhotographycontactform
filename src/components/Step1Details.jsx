import React from 'react';
import { ArrowRight, User, Phone, Mail } from 'lucide-react';

export default function Step1Details({ formData, updateFormData, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email) {
      alert('Please fill in your name, mobile number, and email address to continue.');
      return;
    }
    onNext();
  };

  return (
    <div className="step-card">
      <div className="step-header-group">
        <span className="step-subtitle-badge">Step 01</span>
        <h2 className="step-title">Your Details</h2>
        <p className="step-description">
          Please provide your contact information so our team can get in touch.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            <User size={15} />
            Full Name <span className="required-star">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            className="input-field"
            placeholder="e.g. Rahul Kumar"
            value={formData.name || ''}
            onChange={(e) => updateFormData('name', e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="mobileNumber">
            <Phone size={15} />
            Mobile Number <span className="required-star">*</span>
          </label>
          <input
            id="mobileNumber"
            type="tel"
            className="input-field"
            placeholder="e.g. 9876543210"
            value={formData.mobile || ''}
            onChange={(e) => updateFormData('mobile', e.target.value)}
            required
            autoComplete="tel"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="emailAddress">
            <Mail size={15} />
            Email Address <span className="required-star">*</span>
          </label>
          <input
            id="emailAddress"
            type="email"
            className="input-field"
            placeholder="e.g. rahul@email.com"
            value={formData.email || ''}
            onChange={(e) => updateFormData('email', e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="nav-actions">
          <div></div> {/* Spacer for right alignment */}
          <button type="submit" className="btn btn-primary">
            <span>Continue</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
