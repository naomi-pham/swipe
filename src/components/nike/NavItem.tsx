'use client';

import Link from 'next/link';
import { useState } from 'react';

import NavDropdown, { DropdownList } from '@/components/nike/NavDropdown';

interface NavItem {
  id: number;
  label: string;
  link: string;
  dropdown?: Array<DropdownList>;
}

const NavItem = ({ item }: { item: NavItem }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <li
      className='flex h-full min-w-[100px] items-center justify-center bg-zinc-900 px-7'
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
    >
      <Link href={item.link} className='hover:text-zinc-400'>
        {item.label}
      </Link>

      {item.dropdown && <NavDropdown list={item.dropdown} isShow={isShow} />}
    </li>
  );
};

export default NavItem;
