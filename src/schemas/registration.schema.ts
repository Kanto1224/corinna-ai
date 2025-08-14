import { ZodType, z } from 'zod'

// Step 1: User Type Selection
export type Step1Props = {
  type: 'owner' | 'student'
}

export const Step1Schema: ZodType<Step1Props> = z.object({
  type: z.enum(['owner', 'student'], {
    required_error: 'Please select an account type',
  }),
}) as ZodType<Step1Props>

// Step 2: Account Details
export type Step2Props = {
  fullname: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
}

export const Step2Schema: ZodType<Step2Props> = z
  .object({
    fullname: z
      .string()
      .min(4, { message: 'Your full name must be at least 4 characters long' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    confirmEmail: z.string().email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(8, { message: 'Your password must be at least 8 characters long' })
      .max(64, { message: 'Your password cannot be longer than 64 characters' })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'Password should contain only alphabets and numbers'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Email addresses do not match',
    path: ['confirmEmail'],
  }) as ZodType<Step2Props>

// Step 3: OTP Verification
export type Step3Props = {
  otp: string
}

export const Step3Schema: ZodType<Step3Props> = z.object({
  otp: z
    .string()
    .length(6, { message: 'Please enter a 6-digit verification code' })
    .regex(/^\d{6}$/, { message: 'Verification code must be 6 digits' }),
}) as ZodType<Step3Props>

// Combined registration data
export type RegistrationData = Step1Props & Step2Props & Step3Props

// Complete schema for final validation
export const CompleteRegistrationSchema: ZodType<RegistrationData> = z
  .object({
    type: z.enum(['owner', 'student']),
    fullname: z.string().min(4),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    password: z.string().min(8).max(64),
    confirmPassword: z.string(),
    otp: z.string().length(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Email addresses do not match',
    path: ['confirmEmail'],
  }) as ZodType<RegistrationData>