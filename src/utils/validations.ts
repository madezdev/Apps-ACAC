import { z } from "zod"

export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  surname: z
    .string()
    .min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
  email: z.string().email({
    message: 'El email debe ser una dirección de correo válida',
  }),
  phone: z
    .string()
    .min(10, { message: 'Error, el teléfono debe ser 1155554444' })
    .max(10, { message: 'Error, el teléfono debe ser 1155554444' }),
  company: z.string().min(3, {
    message: 'El nombre de la empresa debe tener al menos 3 caracteres',
  }),
  message: z.string().min(10, {
    message: 'La consulta debe tener al menos 10 caracteres',
  }),
})