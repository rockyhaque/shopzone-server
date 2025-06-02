import { z } from 'zod'

const userValidationSchema = z.object({
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

  role: z
    .string({
      required_error: 'Role must be user',
    })
    .default('user'),

  shops: z
    .array(
      z
        .string()
        .min(3, 'Each shop name must be at least 3 characters long')
        .max(50, 'Each shop name cannot exceed 50 characters')
    )
    .min(3, 'At least 3 shop names are required'),
})

export const UserValidation = {
  userValidationSchema,
}
