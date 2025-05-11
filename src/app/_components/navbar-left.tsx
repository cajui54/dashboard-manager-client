import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import OptionsNav from './options-nav';

const NavbarLeft = () => {
  return (
    <nav className="relative h-[920px] w-60 border-r border-custom-grey">
      <header className="h-[72px] w-60 border-b border-custom-grey py-5 pl-6">
        <Button className="font-[family-name:var(--font-inter) h-8 w-24 text-xs font-bold">
          Logo
        </Button>
      </header>

      <div className="mx-auto mt-4 h-[310px] w-52 font-sans tracking-[-0.4px]">
        <div className="mb-2 ml-2 mt-4 flex h-12 w-52 cursor-pointer items-center justify-between rounded-md font-semibold text-teal-950">
          <div className="flex h-8 w-8 items-center rounded-lg bg-custom-white p-[10px] text-xs">
            FA
          </div>
          <span className="mx-3 h-[14px] w-[120px] text-sm">Filia A</span>
          <Image
            src="/CollapseIcon.png"
            alt="CollapseIcon"
            width={16}
            height={16}
            className="h-4 w-4"
          />
        </div>

        <div>
          <div className="h-8 w-52 rounded-md p-2 text-xs opacity-70">
            <p>Menu</p>
          </div>
          <OptionsNav category="menu" />
        </div>
        <div>
          <div className="h-8 w-52 rounded-md p-2 text-xs opacity-70">
            <p>Configurações</p>
          </div>
          <div className="flex flex-col items-center">
            <OptionsNav category="settings" />
          </div>
        </div>
      </div>

      <Button
        variant={'ghost'}
        className="absolute bottom-4 left-4 flex h-10 w-52 items-center justify-between rounded-full border pl-4 pr-3 font-sans font-normal"
      >
        <span className="leading-<20px> text-sm tracking-[-0.4px] text-teal-950">
          Precisa de ajuda?
        </span>
        <Image
          src="/vector-headphone.png"
          alt="Headphone help Icon"
          width={12}
          height={13.33}
          className="h-[13.33px] w-3"
        />
      </Button>
    </nav>
  );
};

export default NavbarLeft;
