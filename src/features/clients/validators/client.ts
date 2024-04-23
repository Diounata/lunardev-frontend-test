import z from 'zod'

export const clientSchema = z.object({
  name: z.string().nonempty('This field is required'),
  surname: z.string().nonempty('This field is required'),
  email: z.string().email('This email is invalid').nonempty('This field is required'),
  phone: z
    .string()
    .nonempty('This field is required')
    .refine(phone => !phone.length || phone.length === 15, 'This phone is incomplete'),
})

export type FormInput = z.infer<typeof clientSchema>
