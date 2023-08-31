import Link from 'next/link';

import { IconCart } from '@/components/common/Icons';
import NavItem from '@/components/nike/NavItem';

const Header = () => {
  return (
    <header className='absolute inset-0 z-50 h-28 border-b border-zinc-800 bg-zinc-900 shadow-sm'>
      <div className='h-full bg-zinc-900'>
        <div className='container mx-auto grid h-full w-full grid-cols-3 justify-between'>
          <Link href='/' className='self-center'>
            Nike icon
          </Link>

          <nav className='h-full'>
            <ul className='inline-flex h-full justify-between'>
              {navList.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </ul>
          </nav>

          <div className='inline-flex gap-4 self-center justify-self-end'>
            <input
              type='text'
              placeholder='search'
              className='max-w-[150px] rounded-full bg-zinc-700 py-2'
            />
            <i className='rounded-xl bg-zinc-700 p-2 text-zinc-300'>
              <IconCart />
            </i>
          </div>
        </div>
      </div>
    </header>
  );
};

export const navList = [
  {
    id: 0,
    label: 'Men',
    link: '/shop/men',
    dropdown: [
      {
        label: 'Features',
        link: '/shop/men/features',
        list: [
          {
            label: 'New arrivals for men',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Shoes',
        link: '/shop/men/shoes',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Clothing',
        link: '/shop/men/clothing',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Shop for sports',
        link: '/shop/men/sports',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    label: 'Women',
    link: '/shop/women',
    dropdown: [
      {
        label: 'Features',
        link: '/shop/women/features',
        list: [
          {
            label: 'New arrivals for women',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Shoes',
        link: '/shop/women/shoes',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Clothing',
        link: '/shop/women/clothing',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Shop for sports',
        link: '/shop/women/sports',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Kids',
    link: '/shop/kids',
    dropdown: [
      {
        label: 'Features',
        link: '/shop/kids/features',
        list: [
          {
            label: 'New arrivals for kids',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Shoes',
        link: '/shop/kids/shoes',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Clothing',
        link: '/shop/kids/clothing',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: 'Shop for sports',
        link: '/shop/kids/sports',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'Sales',
    link: '/shop/sales',
    dropdown: [
      {
        label: 'Features',
        link: '/shop/features',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: `Men's Features`,
        link: '/shop/men/features',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: `Women's Features`,
        link: '/shop/women/features',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
      {
        label: `Kids's Features`,
        link: '/shop/features/kids',
        list: [
          {
            label: 'New arrivals',
            link: 'new-arrivals',
          },
          {
            label: 'Latest shoes',
            link: 'latest-shoes',
          },
          {
            label: 'Latest clothing',
            link: 'latest-clothing',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Sneakers',
    link: '/shop/sneakers',
  },
];

export default Header;
