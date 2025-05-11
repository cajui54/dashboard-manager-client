'use server';
import { db } from '@/lib/prisma';

export const getCountUserActives = async () => {
  return await db.user.count({ where: { isActive: true } });
};
