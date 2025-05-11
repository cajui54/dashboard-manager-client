'use server';
import { db } from '@/lib/prisma';

export const getCountUsersInative = async () => {
  return await db.user.count({ where: { isActive: false } });
};
