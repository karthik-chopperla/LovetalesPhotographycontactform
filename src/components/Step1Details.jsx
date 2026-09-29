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
    <div className="flow-step-card">
      <div className="flow-step-header">
        <h2 className="flow-step-title">Tell Us About You</h2>
        <p className="flow-step-subtitle">
          Let's start with a few details so our team can understand your requirements.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flow-form">
        {/* Full Name */}
        <div className="field-group">
          <label className="field-label" htmlFor="fullName">Full Name</label>
          <div className="input-with-icon">
            <div className="input-icon-box">
              <User size={18} />
            </div>
            <input
              id="fullName"
              type="text"
              className="flow-input"
              placeholder="Enter your name"
              value={formData.name || ''}
              onChange={(e) => updateFormData('name', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="field-group">
          <label className="field-label" htmlFor="mobileNumber">Mobile Number</label>
          <div className="input-with-icon">
            <div className="input-icon-box phone-prefix-box">
              <Phone size={16} />
              <span className="country-code">+91 ▾</span>
            </div>
            <input
              id="mobileNumber"
              type="tel"
              className="flow-input flow-input-phone"
              placeholder="Enter your mobile number"
              value={formData.mobile || ''}
              onChange={(e) => updateFormData('mobile', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="field-group">
          <label className="field-label" htmlFor="emailAddress">Email Address</label>
          <div className="input-with-icon">
            <div className="input-icon-box">
              <Mail size={18} />
            </div>
            <input
              id="emailAddress"
              type="email"
              className="flow-input"
              placeholder="Enter your email address"
              value={formData.email || ''}
              onChange={(e) => updateFormData('email', e.target.value)}
              required
            />
          </div>
        </div>

        {/* Action Button */}
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

