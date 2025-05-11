import { checkIfThereOnlyNumbers } from '@/_helpers/validation';
import { z } from 'zod';

export const editUserSchema = z.object({
  id: z.string(),
  fullName: z.string().min(8, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z
    .string()
    .refine((value) => {
      if (!(value.toString().length === 11)) {
        return { message: 'Telefone inválido, deve conter 11 dígitos' };
      }
    })
    .refine((value) => checkIfThereOnlyNumbers(value), {
      message: 'Telefone inválido, deve conter apenas números',
    }),
  isWhats: z.boolean(),
  cpf: z
    .string()
    .refine((value) => !(value.split('').length !== 11), {
      message: 'CPF inválido, deve conter 11 dígitos',
    })
    .refine((value) => checkIfThereOnlyNumbers(value), {
      message: 'CPF inválido, deve conter apenas números',
    }),
  rg: z
    .string()
    .refine((value) => value.split('').length === 9, {
      message: 'RG inválido, deve conter 9 dígitos',
    })
    .refine((value) => checkIfThereOnlyNumbers(value), {
      message: 'RG inválido, deve conter apenas números',
    }),
  isActive: z.boolean(),
});

export type EditUserSchema = z.infer<typeof editUserSchema>;
