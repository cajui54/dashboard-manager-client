import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="flex h-[72px] w-[1040px] items-center justify-between border-b border-custom-grey p-4 py-5 pl-6">
      <Button
        variant={'ghost'}
        size={'icon'}
        className="mr-4 h-10 w-10 rounded-full bg-transparent"
        title="menu open"
      >
        <Image
          src="/icon-menu.png"
          alt="logo menu"
          width={12}
          height={12}
          className="boder-zinc-900 h-3 w-3 border-[1.33px]"
        />
      </Button>

      <div className="flex h-[40px] w-[144px] items-center justify-between gap-x-3">
        <Button
          variant={'outline'}
          size="icon"
          className="h-10 w-10 border-spacing-1 rounded-full border border-zinc-200"
          title="circle help"
        >
          <Image
            src="/circle-help.png"
            alt="logo help"
            width={13.33}
            height={13.33}
            className="h-4 w-4 text-center"
          />
        </Button>

        <Button
          variant={'outline'}
          size="icon"
          className="h-10 w-10 border-spacing-1 rounded-full border border-zinc-200"
          title="circle help"
        >
          <Image
            src="/bell.png"
            alt="logo bell"
            width={16}
            height={16}
            className="h-4 w-4 text-center"
          />
        </Button>

        <Avatar className="cursor-pointer">
          <AvatarImage src="/profile.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
