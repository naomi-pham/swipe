'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IconVietTravelsLogo } from '@/components/common/Icons';
import Button from '@/components/viet-travels/Button';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='container mx-auto mt-6 flex items-center justify-between py-4'>
      <div className='inline-flex gap-3'>
        <i>
          <IconVietTravelsLogo />
        </i>
        <p className='text-xl font-bold italic'>
          Viet
          <span className='text-viet-travels-primary-200'>Travels</span>
        </p>
      </div>

      <nav className='inline-flex items-center gap-10'>
        <ul className='hidden items-center gap-10 md:inline-flex'>
          {navList.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`${
                  pathname === item.link ? 'text-viet-travels-primary-200' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button label='Sign in' />
      </nav>
    </header>
  );
};

const navList = [
  {
    id: 0,
    label: 'Home',
    link: '/viet-travels',
  },
  {
    id: 1,
    label: 'Packages',
    link: '/viet-travels/packages',
  },
  {
    id: 2,
    label: 'Community',
    link: '/viet-travels/community',
  },
  {
    id: 3,
    label: 'Blog',
    link: '/viet-travels/blog',
  },
];

export default Header;
