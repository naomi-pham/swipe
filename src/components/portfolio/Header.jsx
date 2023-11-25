'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='container mx-auto flex items-center justify-between py-4'>
      <div className='inline-flex gap-3'>
        <p className='text-2xl font-bold text-[#636A5F]'>NP</p>
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

        {/* <Button label='Sign in' /> */}
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
    label: 'Work',
    link: '/viet-travels/packages',
  },
  {
    id: 2,
    label: 'Contact',
    link: '/viet-travels/community',
  },
];

export default Header;
