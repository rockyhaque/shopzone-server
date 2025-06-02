import { z } from 'zod'

const loginValidationSchema = z.object({
  username: z
    .string({
      required_error: 'Username must be provided with string type',
    })
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username cannot exceed 50 characters')
    .regex(
      /^[a-z0-9-]+$/,
      'Username must be lowercase and can only include letters, numbers, and hyphens (no spaces)'
    ),

  password: z
    .string({
      required_error: 'Password must be provided with string type',
    })
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    ),
})

export const AuthValidation = {
  loginValidationSchema,
}
