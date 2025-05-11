'use server';
import { db } from '@/lib/prisma';
import { CreateUserSchema } from '../users/_components/constants/create-schema';
import { revalidatePath } from 'next/cache';

export const createUser = async (data: CreateUserSchema) => {
  await db.user.create({
    data,
  });

  revalidatePath('/users', 'page');
};
