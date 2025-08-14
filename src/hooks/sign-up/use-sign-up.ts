'use client'
import { useToast } from '@/components/ui/use-toast'
import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { onCompleteUserRegistration } from '@/actions/auth'

export const useSignUpForm = () => {
  const { toast } = useToast()
  const [loading, setLoading] = useState<boolean>(false)
  const { signUp, isLoaded, setActive } = useSignUp()
  const router = useRouter()
  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
    defaultValues: {
      type: 'owner',
    },
    mode: 'onChange',
  })

  const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!isLoaded) return

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      })

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      onNext((prev) => prev + 1)
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error?.errors?.[0]?.longMessage || 'Failed to send OTP. Please try again.',
      })
    }
  }

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserRegistrationProps) => {
      console.log('Form submitted with values:', values)
      console.log('OTP value:', values.otp)
      
      if (!isLoaded) {
        console.log('Clerk not loaded yet')
        return
      }

      if (!values.otp || values.otp.length !== 6) {
        toast({
          title: 'Invalid OTP',
          description: 'Please enter a 6-digit OTP code',
        })
        return
      }

      try {
        setLoading(true)
        console.log('Attempting email verification with OTP:', values.otp)
        
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: values.otp,
        })
        
        console.log('Verification result:', completeSignUp)

        if (completeSignUp.status !== 'complete') {
          setLoading(false)
          toast({
            title: 'Error',
            description: 'Email verification failed. Please try again.',
          })
          return
        }

        if (completeSignUp.status == 'complete') {
          if (!signUp.createdUserId) {
            setLoading(false)
            toast({
              title: 'Error',
              description: 'User ID not found. Please try again.',
            })
            return
          }

          const registered = await onCompleteUserRegistration(
            values.fullname,
            signUp.createdUserId,
            values.type
          )

          if (registered?.status == 200 && registered.user) {
            await setActive({
              session: completeSignUp.createdSessionId,
            })

            setLoading(false)
            router.push('/dashboard')
          } else {
            setLoading(false)
            toast({
              title: 'Error',
              description: 'Registration failed. Please try again.',
            })
          }
        }
      } catch (error: any) {
        setLoading(false)
        toast({
          title: 'Error',
          description: error?.errors?.[0]?.longMessage || error?.message || 'Registration failed. Please try again.',
        })
      }
    },
    (formErrors) => {
      console.log('Form validation errors:', formErrors)
      // Handle validation errors
      if (formErrors.otp) {
        toast({
          title: 'OTP Required',
          description: 'Please enter the 6-digit OTP code from your email',
        })
      }
    }
  )
  return {
    methods,
    onHandleSubmit,
    onGenerateOTP,
    loading,
  }
}