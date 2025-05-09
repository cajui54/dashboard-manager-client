import { EllipsisVertical, User } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ListUser = () => {
  return (
    <div className="mt-5 h-[520px] w-[960px] space-y-2">
      <div className="flex h-20 w-full items-center justify-between rounded-lg border p-3 font-sans">
        <div className="flex w-full items-center">
          <div className="flex h-14 w-14 items-center justify-center space-x-2 rounded-full bg-zinc-100 p-[10px]">
            <span className="text-[16px] font-medium tracking-tighter text-teal-950">
              JG
            </span>
          </div>

          <div className="ml-3 h-10 w-full space-y-2">
            <div className="flex items-center gap-x-3">
              <h3 className="text-sm font-medium text-zinc-900">
                José Ricardo Gomes
              </h3>
              <span className="flex items-center gap-1 text-xs font-normal tracking-tighter text-zinc-500">
                <User className="h-3 w-3" />
                51 anos, Homem
              </span>
              <span className="flex items-center gap-1 text-xs font-normal tracking-tighter text-zinc-500"></span>
            </div>
            <div className="flex items-center gap-x-3 font-sans text-xs font-normal tracking-tighter text-zinc-500 [&>div]:flex [&>div]:items-center [&>div]:gap-x-1">
              <div>
                <User className="h-3 w-3" />
                <span>22/03/2025 - 10:21am</span>
              </div>

              <div>
                <User className="h-3 w-3" />
                <span>38m22s</span>
              </div>

              <div>
                <User className="h-3 w-3" />
                <span>Usuário padrão</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mr-3 flex h-10 w-[101px] items-center justify-between">
          <Badge
            variant="secondary"
            className="mr-[10px] h-5 w-[49px] rounded-full text-xs tracking-tighter text-zinc-900"
          >
            Ativo
          </Badge>

          <Button
            variant={'ghost'}
            title="options"
            className="h-10 w-10 rounded-full bg-transparent"
          >
            <EllipsisVertical />
          </Button>
        </div>
      </div>

      <div className="flex h-20 w-full items-center justify-between rounded-lg border p-3 font-sans">
        <div className="flex w-full items-center">
          <div className="flex h-14 w-14 items-center justify-center space-x-2 rounded-full bg-zinc-100 p-[10px]">
            <span className="text-[16px] font-medium tracking-tighter text-teal-950">
              JG
            </span>
          </div>

          <div className="ml-3 h-10 w-full space-y-2">
            <div className="flex items-center gap-x-3">
              <h3 className="text-sm font-medium text-zinc-900">
                José Ricardo Gomes
              </h3>
              <span className="flex items-center gap-1 text-xs font-normal tracking-tighter text-zinc-500">
                <User className="h-3 w-3" />
                51 anos, Homem
              </span>
              <span className="flex items-center gap-1 text-xs font-normal tracking-tighter text-zinc-500"></span>
            </div>
            <div className="flex items-center gap-x-3 font-sans text-xs font-normal tracking-tighter text-zinc-500 [&>div]:flex [&>div]:items-center [&>div]:gap-x-1">
              <div>
                <User className="h-3 w-3" />
                <span>22/03/2025 - 10:21am</span>
              </div>

              <div>
                <User className="h-3 w-3" />
                <span>38m22s</span>
              </div>

              <div>
                <User className="h-3 w-3" />
                <span>Usuário padrão</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mr-3 flex h-10 w-[101px] items-center justify-between">
          <Badge
            variant="secondary"
            className="mr-[10px] h-5 w-[49px] rounded-full text-xs tracking-tighter text-zinc-900"
          >
            Ativo
          </Badge>

          <Button
            variant={'ghost'}
            title="options"
            className="h-10 w-10 rounded-full bg-transparent"
          >
            <EllipsisVertical />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
