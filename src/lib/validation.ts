import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email jest wymagany')
    .email('Nieprawidłowy format email'),
  password: z
    .string()
    .min(1, 'Hasło jest wymagane')
    .min(6, 'Hasło musi mieć co najmniej 6 znaków'),
});

export type LoginFormData = z.infer<typeof loginSchema>;