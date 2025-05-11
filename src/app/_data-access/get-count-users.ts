'use server';
import { db } from '@/lib/prisma';

export const getCountUsers = async () => {
  return await db.user.count();
};
