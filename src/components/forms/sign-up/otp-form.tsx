import OTPInput from '@/components/otp'
import React from 'react'

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>
  onOTP: string
}

const OTPForm = ({ onOTP, setOTP }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">OTP eingeben</h2>
      <p className="text-iridium md:text-sm">
        Geben Sie das Einmalpasswort ein, das an Ihre E-Mail gesendet wurde.
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput
          otp={onOTP}
          setOtp={setOTP}
        />
      </div>
    </>
  )
}

export default OTPForm
