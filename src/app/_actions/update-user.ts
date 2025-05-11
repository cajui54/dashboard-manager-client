'use server';
import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { EditUserSchema } from '../users/_components/constants/edit-schema';

export const updateUser = async (user: EditUserSchema) => {
  await db.user.update({
    where: {
      id: user.id,
    },
    data: user,
  });
  revalidatePath('/users', 'page');
};
