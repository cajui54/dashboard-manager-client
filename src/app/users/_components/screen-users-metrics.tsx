import { getCountUserActives } from '@/app/_data-access/get-count-users-actives';
import { getCountUsers } from '@/app/_data-access/get-count-users';
import React from 'react';
import { getCountUsersInative } from '@/app/_data-access/get-count-users-inative';

const ScreenUsersMetrics = async () => {
  const countUsers = await getCountUsers();
  const countUserActives = await getCountUserActives();
  const countUserInactives = await getCountUsersInative();
  return (
    <div className="my-5 flex h-[100px] w-full items-center gap-x-5">
      <div className="h-[100px] w-[225px] space-y-2 rounded-lg bg-zinc-50 p-6">
        <h3 className="font-sans text-xs font-normal tracking-[-0.4px] text-zinc-500">
          Usuários
        </h3>
        <p className="font-serif text-3xl font-normal tracking-tighter text-zinc-900">
          {countUsers}
        </p>
      </div>
      <div className="h-[100px] w-[225px] space-y-2 rounded-lg bg-zinc-50 p-6">
        <h3 className="font-sans text-xs font-normal tracking-[-0.4px] text-zinc-500">
          Tempo de sessões
        </h3>
        <p className="font-serif text-3xl font-normal tracking-tighter text-zinc-900">
          31m 20s
        </p>
      </div>
      <div className="h-[100px] w-[225px] space-y-2 rounded-lg bg-zinc-50 p-6">
        <h3 className="font-sans text-xs font-normal tracking-[-0.4px] text-zinc-500">
          Ativos
        </h3>
        <p className="font-serif text-3xl font-normal tracking-tighter text-zinc-900">
          {countUserActives}
        </p>
      </div>
      <div className="h-[100px] w-[225px] space-y-2 rounded-lg bg-zinc-50 p-6">
        <h3 className="font-sans text-xs font-normal tracking-[-0.4px] text-zinc-500">
          Inativos
        </h3>
        <p className="font-serif text-3xl font-normal tracking-tighter text-zinc-900">
          {countUserInactives}
        </p>
      </div>
    </div>
  );
};

export default ScreenUsersMetrics;
