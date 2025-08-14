'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

import {
  Step1Props,
  Step2Props,
  Step3Props,
  RegistrationData,
  Step1Schema,
  Step2Schema,
  Step3Schema,
} from '@/schemas/registration.schema'
import { onCompleteUserRegistration } from '@/actions/auth'

export type RegistrationStep = 1 | 2 | 3

export const useRegistration = () => {
  const [currentStep, setCurrentStep] = useState<RegistrationStep>(1)
  const [isLoading, setIsLoading] = useState(false)
  const [registrationData, setRegistrationData] = useState<Partial<RegistrationData>>({})
  
  const { signUp, isLoaded, setActive } = useSignUp()
  const router = useRouter()
  const { toast } = useToast()

  // Step 1 form
  const step1Form = useForm<Step1Props>({
    resolver: zodResolver(Step1Schema),
    defaultValues: {
      type: 'owner',
    },
    mode: 'onChange',
  })

  // Step 2 form
  const step2Form = useForm<Step2Props>({
    resolver: zodResolver(Step2Schema),
    mode: 'onChange',
  })

  // Step 3 form
  const step3Form = useForm<Step3Props>({
    resolver: zodResolver(Step3Schema),
    mode: 'onChange',
  })

  // Get current form based on step
  const getCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return step1Form
      case 2:
        return step2Form
      case 3:
        return step3Form
      default:
        return step1Form
    }
  }

  // Validate current step and proceed to next
  const goToNextStep = async () => {
    const currentForm = getCurrentForm()
    const isValid = await currentForm.trigger()
    
    if (!isValid) {
      console.log('Form validation failed for step', currentStep)
      return false
    }

    const formData = currentForm.getValues()
    
    if (currentStep === 1) {
      setRegistrationData(prev => ({ ...prev, ...formData as Step1Props }))
      setCurrentStep(2)
      return true
    }
    
    if (currentStep === 2) {
      const step2Data = formData as Step2Props
      setRegistrationData(prev => ({ ...prev, ...step2Data }))
      
      // Generate OTP with Clerk
      return await generateOTP(step2Data.email, step2Data.password)
    }
    
    return false
  }

  // Generate OTP using Clerk
  const generateOTP = async (email: string, password: string): Promise<boolean> => {
    if (!isLoaded) {
      toast({
        title: 'Error',
        description: 'Authentication service is loading. Please try again.',
      })
      return false
    }

    try {
      setIsLoading(true)
      
      console.log('Creating Clerk user with email:', email)
      
      // Check if user is already signed in and sign out first
      if (signUp.status === 'complete' || signUp.createdUserId) {
        console.log('Existing sign up session found, starting fresh...')
        // Clear any existing session
        window.location.reload()
        return false
      }
      
      await signUp.create({
        emailAddress: email,
        password: password,
      })

      console.log('Preparing email verification...')
      
      await signUp.prepareEmailAddressVerification({ 
        strategy: 'email_code' 
      })

      toast({
        title: 'Verification Code Sent',
        description: 'Please check your email for the 6-digit verification code.',
      })

      setCurrentStep(3)
      return true
      
    } catch (error: any) {
      console.error('OTP generation error:', error)
      
      // Handle specific Clerk errors
      if (error?.errors?.[0]?.code === 'form_identifier_exists') {
        toast({
          title: 'Account Already Exists',
          description: 'An account with this email already exists. Please sign in instead.',
        })
      } else if (error?.errors?.[0]?.code === 'session_exists') {
        toast({
          title: 'Already Signed In',
          description: 'You are already signed in. Redirecting...',
        })
        router.push('/dashboard')
      } else {
        toast({
          title: 'Registration Error',
          description: error?.errors?.[0]?.longMessage || 'Failed to send verification code. Please try again.',
        })
      }
      
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Complete registration with OTP verification
  const completeRegistration = async (otpData: Step3Props): Promise<boolean> => {
    if (!isLoaded) {
      toast({
        title: 'Error',
        description: 'Authentication service is loading. Please try again.',
      })
      return false
    }

    const completeData = { ...registrationData, ...otpData } as RegistrationData
    
    if (!completeData.email || !completeData.password || !completeData.fullname) {
      toast({
        title: 'Error',
        description: 'Missing registration information. Please start over.',
      })
      setCurrentStep(1)
      return false
    }

    try {
      setIsLoading(true)
      
      console.log('Verifying OTP:', otpData.otp)
      
      // Verify OTP with Clerk
      const result = await signUp.attemptEmailAddressVerification({
        code: otpData.otp,
      })
      
      console.log('Verification result:', result.status)

      if (result.status !== 'complete') {
        toast({
          title: 'Verification Failed',
          description: 'Invalid verification code. Please try again.',
        })
        return false
      }

      if (!signUp.createdUserId) {
        toast({
          title: 'Error',
          description: 'User creation failed. Please try again.',
        })
        return false
      }

      console.log('Creating user in database...')
      
      // Create user in database
      const dbResult = await onCompleteUserRegistration(
        completeData.fullname,
        signUp.createdUserId,
        completeData.type
      )

      console.log('Database result:', dbResult)

      if (dbResult?.status !== 200) {
        toast({
          title: 'Registration Error',
          description: dbResult?.error || 'Failed to complete registration. Please try again.',
        })
        return false
      }

      console.log('Setting active session...')
      
      // Set active session
      await setActive({
        session: result.createdSessionId,
      })

      toast({
        title: 'Registration Successful!',
        description: 'Welcome to Chatvise! Redirecting to your dashboard...',
      })

      // Redirect to dashboard
      router.push('/dashboard')
      return true
      
    } catch (error: any) {
      console.error('Registration completion error:', error)
      
      toast({
        title: 'Registration Failed',
        description: error?.errors?.[0]?.longMessage || error?.message || 'Registration failed. Please try again.',
      })
      
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Go back to previous step
  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as RegistrationStep)
    }
  }

  // Reset entire registration
  const resetRegistration = () => {
    setCurrentStep(1)
    setRegistrationData({})
    step1Form.reset()
    step2Form.reset()
    step3Form.reset()
  }

  return {
    // State
    currentStep,
    isLoading,
    registrationData,
    
    // Forms
    step1Form,
    step2Form,
    step3Form,
    getCurrentForm,
    
    // Actions
    goToNextStep,
    goToPrevStep,
    completeRegistration,
    resetRegistration,
    
    // Utils
    canGoNext: !isLoading,
    canGoBack: currentStep > 1 && !isLoading,
  }
}