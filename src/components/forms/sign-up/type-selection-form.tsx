import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Step1Props } from '@/schemas/registration.schema'

const TypeSelectionForm = () => {
  const { watch, setValue } = useFormContext<Step1Props>()
  
  const selectedType = watch('type')

  const handleTypeSelect = (type: 'owner' | 'student') => {
    setValue('type', type, { 
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true 
    })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gravel mb-4">
          Konto erstellen
        </h2>
        <p className="text-iridium text-sm md:text-base">
          Wählen Sie Ihren Kontotyp aus.
        </p>
      </div>

      <div className="space-y-4">
        {/* Owner Card */}
        <div
          onClick={() => handleTypeSelect('owner')}
          className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
            selectedType === 'owner'
              ? 'border-orange bg-orange/5 shadow-lg'
              : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                selectedType === 'owner'
                  ? 'border-orange bg-orange'
                  : 'border-gray-300'
              }`}
            >
              {selectedType === 'owner' && (
                <div className="w-3 h-3 rounded-full bg-white" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gravel mb-2">
                Unternehmer
              </h3>
              <p className="text-iridium text-sm">
                Für Geschäftszwecke
              </p>
            </div>
          </div>
        </div>

        {/* Student Card */}
        <div
          onClick={() => handleTypeSelect('student')}
          className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 ${
            selectedType === 'student'
              ? 'border-orange bg-orange/5 shadow-lg'
              : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ${
                selectedType === 'student'
                  ? 'border-orange bg-orange'
                  : 'border-gray-300'
              }`}
            >
              {selectedType === 'student' && (
                <div className="w-3 h-3 rounded-full bg-white" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gravel mb-2">
                Student
              </h3>
              <p className="text-iridium text-sm">
                Zum Testen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeSelectionForm