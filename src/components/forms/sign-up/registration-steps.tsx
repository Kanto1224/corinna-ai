'use client'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { useRegistration } from '@/hooks/sign-up/use-registration'

// Step Components
import TypeSelectionForm from './type-selection-form'
import AccountDetailsForm from './account-details-form' 
import OTPVerificationForm from './otp-verification-form'

const RegistrationSteps = () => {
  const {
    currentStep,
    isLoading,
    step1Form,
    step2Form, 
    step3Form,
    getCurrentForm,
    goToNextStep,
    goToPrevStep,
    completeRegistration,
    canGoNext,
    canGoBack,
  } = useRegistration()

  const currentForm = getCurrentForm()

  const handleNext = async () => {
    if (currentStep < 3) {
      await goToNextStep()
    }
  }

  const handleSubmit = async () => {
    if (currentStep === 3) {
      const formData = step3Form.getValues()
      await completeRegistration(formData)
    }
  }

  return (
    <div className="w-full">
      <FormProvider {...(currentForm as any)}>
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex items-center ${
                  step < 3 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step === currentStep
                      ? 'bg-orange text-white'
                      : step < currentStep
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step < currentStep ? '✓' : step}
                </div>
                {step < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Account Type</span>
            <span>Details</span>
            <span>Verification</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="min-h-[400px]">
          {currentStep === 1 && <TypeSelectionForm />}
          {currentStep === 2 && <AccountDetailsForm />}
          {currentStep === 3 && <OTPVerificationForm />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={goToPrevStep}
            disabled={!canGoBack}
            className={`px-6 py-2 rounded-lg font-medium ${
              canGoBack
                ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                : 'text-gray-400 cursor-not-allowed'
            }`}
          >
            ← Zurück
          </button>

          <div className="flex gap-4">
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext}
                className={`px-8 py-3 rounded-lg font-medium ${
                  canGoNext
                    ? 'bg-orange hover:bg-orange/90 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {currentStep === 2 ? 'Sende Code...' : 'Weiter...'}
                  </span>
                ) : (
                  currentStep === 2 ? 'Code senden' : 'Weiter'
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canGoNext}
                className={`px-8 py-3 rounded-lg font-medium ${
                  canGoNext
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Erstelle Konto...
                  </span>
                ) : (
                  'Konto erstellen'
                )}
              </button>
            )}
          </div>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Bereits ein Konto?{' '}
            <a
              href="/auth/sign-in"
              className="text-orange hover:text-orange/80 font-medium"
            >
              Hier anmelden
            </a>
          </p>
        </div>
      </FormProvider>
    </div>
  )
}

export default RegistrationSteps