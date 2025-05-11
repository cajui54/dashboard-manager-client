'use server';
import { db } from '@/lib/prisma';

export const getAllUsers = async () => {
  return db.user.findMany({ take: 6 });
};
