import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProgressBar from './components/ProgressBar';
import Step1Details from './components/Step1Details';
import Step2ShootType from './components/Step2ShootType';
import Step3Packages from './components/Step3Packages';
import Step4EventDetails from './components/Step4EventDetails';
import Step5Review from './components/Step5Review';
import SuccessModal from './components/SuccessModal';

const INITIAL_FORM_STATE = {
  name: '',
  mobile: '',
  email: '',
  shootType: 'wedding',
  selectedPackage: 'Premium Wedding',
  packagePrice: '₹3,00,000',
  eventDate: '',
  eventDays: '1 Day',
  venueName: '',
  venueLocation: '',
  approxGuests: '100–300 Guests',
  albumReq: 'Included Album',
  additionalReq: ''
};

export default function App() {
  // Load initial state from sessionStorage if available for bulletproof persistence across soft reloads
  const [formData, setFormData] = useState(() => {
    try {
      const saved = sessionStorage.getItem('love_tales_enquiry_data');
      return saved ? JSON.parse(saved) : INITIAL_FORM_STATE;
    } catch (e) {
      return INITIAL_FORM_STATE;
    }
  });

  const [currentStep, setCurrentStep] = useState(() => {
    try {
      const savedStep = sessionStorage.getItem('love_tales_enquiry_step');
      return savedStep || 'details';
    } catch (e) {
      return 'details';
    }
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Sync state to sessionStorage whenever updated
  useEffect(() => {
    try {
      sessionStorage.setItem('love_tales_enquiry_data', JSON.stringify(formData));
      sessionStorage.setItem('love_tales_enquiry_step', currentStep);
    } catch (e) {
      // Storage quota or privacy sandbox fallback
    }
  }, [formData, currentStep]);

  const updateFormData = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Step Navigation Logic
  const handleNextFromDetails = () => {
    setCurrentStep('shootType');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromShootType = () => {
    if (formData.shootType === 'wedding') {
      setCurrentStep('packages');
    } else {
      setCurrentStep('eventDetails');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromPackages = () => {
    setCurrentStep('eventDetails');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextFromEventDetails = () => {
    setCurrentStep('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back Navigation Handlers
  const handleBackFromShootType = () => {
    setCurrentStep('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromPackages = () => {
    setCurrentStep('shootType');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromEventDetails = () => {
    if (formData.shootType === 'wedding') {
      setCurrentStep('packages');
    } else {
      setCurrentStep('shootType');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromReview = () => {
    setCurrentStep('eventDetails');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditStep = (stepKey) => {
    setCurrentStep(stepKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setCurrentStep('details');
    setShowSuccessModal(false);
    sessionStorage.removeItem('love_tales_enquiry_data');
    sessionStorage.removeItem('love_tales_enquiry_step');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteWhatsApp = () => {
    setShowSuccessModal(true);
  };

  const handleReopenWhatsApp = () => {
    const shootLabel = formData.shootType || 'Wedding';
    const packageName = formData.selectedPackage || 'Custom Package';
    const message = `Hello Love Tales Photography & Films,

I would like to enquire about a ${shootLabel.toLowerCase()} shoot.

Name: ${formData.name || ''}
Mobile: ${formData.mobile || ''}
Email: ${formData.email || ''}
Shoot Type: ${shootLabel}
Selected Package: ${packageName}
Package Price: ${formData.packagePrice || '₹3,00,000'}
Event Date: ${formData.eventDate || ''}
Event Days: ${formData.eventDays || '1 Day'}
Venue: ${formData.venueName || ''}
Location: ${formData.venueLocation || ''}
Approximate Guests: ${formData.approxGuests || ''}
Album Requirement: ${formData.albumReq || ''}
Additional Requirements:
${formData.additionalReq || 'None'}

Please contact me regarding my enquiry.`;

    const whatsappUrl = `https://wa.me/919492992006?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-viewport">
      {/* Navigation Header */}
      <Header />

      {/* Cinematic Studio Hero Banner */}
      <HeroBanner />

      {/* Main Flow Container */}
      <main className="main-wrapper">
        {/* Step Progress Bar */}
        <ProgressBar 
          currentStep={currentStep} 
          shootType={formData.shootType}
          onStepClick={handleEditStep}
        />

        {/* Dynamic Step View Rendering */}
        {currentStep === 'details' && (
          <Step1Details
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNextFromDetails}
          />
        )}

        {currentStep === 'shootType' && (
          <Step2ShootType
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNextFromShootType}
            onBack={handleBackFromShootType}
          />
        )}

        {currentStep === 'packages' && (
          <Step3Packages
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNextFromPackages}
            onBack={handleBackFromPackages}
          />
        )}

        {currentStep === 'eventDetails' && (
          <Step4EventDetails
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNextFromEventDetails}
            onBack={handleBackFromEventDetails}
          />
        )}

        {currentStep === 'review' && (
          <Step5Review
            formData={formData}
            onEditStep={handleEditStep}
            onCompleteWhatsApp={handleCompleteWhatsApp}
          />
        )}
      </main>

      {/* Success Modal Overlay */}
      {showSuccessModal && (
        <SuccessModal
          onReset={handleReset}
          onReopenWhatsApp={handleReopenWhatsApp}
        />
      )}
    </div>
  );
}
