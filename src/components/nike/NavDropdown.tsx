import Link from 'next/link';
import React from 'react';

export interface DropdownList {
  label: string;
  link: string;
  list: Array<NavLink>;
}

export interface NavLink {
  label: string;
  link: string;
}

const NavDropdown = ({
  list,
  isShow,
}: {
  list: Array<DropdownList>;
  isShow: boolean;
}) => {
  return (
    <div
      className={`absolute inset-0 -z-10 h-fit w-full transform bg-zinc-800 py-10 shadow-sm duration-700 ease-in-out ${
        isShow ? 'translate-y-28' : '-translate-y-full'
      }`}
    >
      <div className='container mx-auto'>
        <ul className='inline-flex w-full justify-around'>
          {list.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className='font-semibold text-zinc-400 hover:opacity-80'
              >
                {item.label}
              </Link>
              <ul className='mt-4 flex flex-col gap-2'>
                {item.list.map((item, ind) => (
                  <Link
                    key={ind}
                    href={item.link}
                    className='text-sm text-zinc-500 hover:text-zinc-400'
                  >
                    {item.label}
                  </Link>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDropdown;
