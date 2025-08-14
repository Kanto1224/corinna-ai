import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Step2Props } from '@/schemas/registration.schema'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const AccountDetailsForm = () => {
  const { 
    register, 
    formState: { errors },
    watch 
  } = useFormContext<Step2Props>()

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gravel mb-4">
          Kontodaten
        </h2>
        <p className="text-iridium text-sm md:text-base">
          Füllen Sie Ihre Daten aus
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullname" className="text-sm font-medium text-gray-700">
            Name *
          </Label>
          <Input
            id="fullname"
            type="text"
            placeholder="Max Mustermann"
            className="mt-1"
            {...register('fullname')}
          />
          {errors.fullname && (
            <p className="text-red-500 text-xs mt-1">
              {errors.fullname.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            E-Mail *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="max@beispiel.de"
            className="mt-1"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Confirm Email */}
        <div>
          <Label htmlFor="confirmEmail" className="text-sm font-medium text-gray-700">
            E-Mail bestätigen *
          </Label>
          <Input
            id="confirmEmail"
            type="email"
            placeholder="max@beispiel.de"
            className="mt-1"
            {...register('confirmEmail')}
          />
          {errors.confirmEmail && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmEmail.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Passwort *
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Mindestens 8 Zeichen"
            className="mt-1"
            {...register('password')}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            Min. 8 Zeichen
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            Passwort bestätigen *
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Passwort wiederholen"
            className="mt-1"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountDetailsForm