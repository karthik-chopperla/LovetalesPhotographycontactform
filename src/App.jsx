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
      return savedStep || 'landing';
    } catch (e) {
      return 'landing';
    }
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    try {
      sessionStorage.setItem('love_tales_enquiry_data', JSON.stringify(formData));
      sessionStorage.setItem('love_tales_enquiry_step', currentStep);
    } catch (e) {
      // Storage fallback
    }
  }, [formData, currentStep]);

  const updateFormData = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Step Navigation Handlers
  const handleStartFlow = () => {
    setCurrentStep('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  // Back Navigation Handler for Header
  const handleGlobalBack = () => {
    if (currentStep === 'details') {
      setCurrentStep('landing');
    } else if (currentStep === 'shootType') {
      setCurrentStep('details');
    } else if (currentStep === 'packages') {
      setCurrentStep('shootType');
    } else if (currentStep === 'eventDetails') {
      if (formData.shootType === 'wedding') {
        setCurrentStep('packages');
      } else {
        setCurrentStep('shootType');
      }
    } else if (currentStep === 'review') {
      setCurrentStep('eventDetails');
    } else {
      setCurrentStep('landing');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditStep = (stepKey) => {
    setCurrentStep(stepKey);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setCurrentStep('landing');
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
    const message = `Hello Love Tales Photography & Films,

I would like to enquire about a ${shootLabel.toLowerCase()} shoot.

Name: ${formData.name || 'Rahul Kumar'}
Mobile: ${formData.mobile || '+91 98765 43210'}
Email: ${formData.email || 'rahul@email.com'}
Shoot Type: ${shootLabel}

Event Date: ${formData.eventDate || '18 December 2026'}
Event Days: ${formData.eventDays || '2 Days'}
Venue: ${formData.venueName || 'Convention Hall'}
Location: ${formData.venueLocation || 'Vijayawada'}
Approximate Guests: ${formData.approxGuests || '500'}
Album Requirement: ${formData.albumReq || 'Included Album'}
Additional Requirements:
${formData.additionalReq || 'Drone coverage and special ceremony coverage.'}

Please contact me regarding my enquiry.`;

    const whatsappUrl = `https://wa.me/919951799508?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-flow-root">
      {/* Top Application Header */}
      <Header 
        currentStep={currentStep} 
        onBack={handleGlobalBack}
        onLogoClick={() => setCurrentStep('landing')}
      />

      {/* Main View Router */}
      {currentStep === 'landing' ? (
        <HeroBanner onStartFlow={handleStartFlow} />
      ) : (
        <main className="flow-content-wrapper">
          {/* Top Numbered Step Progress Bar */}
          <ProgressBar 
            currentStep={currentStep} 
            shootType={formData.shootType}
            onStepClick={handleEditStep}
          />

          {/* Active Step Content */}
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
            />
          )}

          {currentStep === 'packages' && (
            <Step3Packages
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNextFromPackages}
            />
          )}

          {currentStep === 'eventDetails' && (
            <Step4EventDetails
              formData={formData}
              updateFormData={updateFormData}
              onNext={handleNextFromEventDetails}
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
      )}

      {/* WhatsApp Sent / Phone Frame Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          formData={formData}
          onReset={handleReset}
          onReopenWhatsApp={handleReopenWhatsApp}
        />
      )}
    </div>
  );
}

