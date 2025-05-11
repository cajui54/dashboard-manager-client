import React from 'react';
import Header from '../_components/header';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ScreenUsersMetrics from './_components/screen-users-metrics';
import ManagerUser from './_components/manager-user';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import FormAddUser from './_components/form-add-user';

const ClientPage = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="m-5 h-[920px] w-full p-10">
        <div className="flex h-[60px] w-[960px] items-start justify-between pb-5">
          <h2 className="font-serif text-3xl font-normal tracking-tighter text-zinc-900">
            Usuários
          </h2>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size={'default'}
                className="flex h-10 w-[117px] items-center gap-2 rounded-full text-primary-foreground"
              >
                <Plus className="h-4 w-4" />
                <span className="font-sans text-sm font-medium tracking-[-0.4px]">
                  Adicionar
                </span>
              </Button>
            </SheetTrigger>

            <FormAddUser />
          </Sheet>
        </div>

        <ScreenUsersMetrics />

        <ManagerUser />
      </main>
    </div>
  );
};

export default ClientPage;
