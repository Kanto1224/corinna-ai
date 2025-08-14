import React from 'react'
import { useFormContext } from 'react-hook-form'
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp'
import { Step3Props } from '@/schemas/registration.schema'

const OTPVerificationForm = () => {
  const { 
    watch, 
    setValue, 
    formState: { errors } 
  } = useFormContext<Step3Props>()
  
  const otpValue = watch('otp') || ''

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gravel mb-4">
          Code eingeben
        </h2>
        <p className="text-iridium text-sm md:text-base">
          Geben Sie den 6-stelligen Code aus Ihrer E-Mail ein.
        </p>
      </div>

      <div className="flex justify-center py-8">
        <InputOTP
          maxLength={6}
          value={otpValue}
          onChange={(value) => setValue('otp', value, { 
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true 
          })}
        >
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <InputOTPSlot 
                key={index} 
                index={index}
                className="w-12 h-12 text-lg font-bold border-2 rounded-lg focus:border-orange focus:ring-orange"
              />
            ))}
          </div>
        </InputOTP>
      </div>

      {errors.otp && (
        <div className="text-center">
          <p className="text-red-500 text-sm font-medium">
            {errors.otp.message}
          </p>
        </div>
      )}

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Code nicht erhalten?{' '}
          <button
            type="button"
            className="text-orange hover:text-orange/80 font-medium"
            onClick={() => {
              // TODO: Implement resend functionality
              console.log('Resend OTP')
            }}
          >
            Code erneut senden
          </button>
        </p>
      </div>
    </div>
  )
}

export default OTPVerificationForm