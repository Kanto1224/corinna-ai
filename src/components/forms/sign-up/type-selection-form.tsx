import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'

type Props = {
  register: UseFormRegister<FieldValues>
  userType: 'owner' | 'student'
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Konto erstellen</h2>
      <p className="text-iridium md:text-sm">
        Erzählen Sie uns von sich! Was machen Sie? Lassen Sie uns Ihre
        <br /> Erfahrung an Ihre Bedürfnisse anpassen.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="Ich bin Unternehmer"
        text="Ich richte ein Konto für mein Unternehmen ein."
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="Ich bin Student"
        text="Ich möchte das Tool kennenlernen."
      />
    </>
  )
}

export default TypeSelectionForm
