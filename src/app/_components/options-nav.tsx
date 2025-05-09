'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { optionsNav } from '../constants/options-menu';

interface OptionMenuProps {
  category: 'menu' | 'settings';
}
const OptionsNav = ({ category }: OptionMenuProps) => {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <div className="flex flex-col items-center">
      {optionsNav
        .filter((option) => option.category === category)
        .map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              isActive(link.path)
                ? 'my-[6px] bg-teal-950 text-zinc-100'
                : 'text-zinc-500'
            } leading-<20px> flex h-10 w-52 items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium`}
          >
            <Image
              src={link.icon}
              alt={link.text}
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>{link.label}</span>
          </Link>
        ))}
    </div>
  );
};

export default OptionsNav;
