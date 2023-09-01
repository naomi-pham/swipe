import Image from 'next/image';

import { IconStarOutlined } from '@/components/common/Icons';

interface IPackageCard {
  id: number;
  image: string;
  label: string;
  price: number;
}

const Popular = () => {
  return (
    <section id='popular' className='container mx-auto mt-16 lg:mt-32'>
      <h2 className='text-center text-3xl font-semibold capitalize md:text-left md:text-4xl'>
        Most popular packages
      </h2>

      <ul className='mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4'>
        {packages.map((item) => (
          <PackageCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export const PackageCard = ({ item }: { item: IPackageCard }) => {
  return (
    <li className='card-linear group p-4'>
      <div className='overflow-hidden rounded-lg'>
        <Image
          src={item.image}
          alt={item.label}
          width={200}
          height={150}
          className='w-full transition-all ease-in-out group-hover:scale-110'
        />
      </div>

      <div className='mt-6 flex w-full items-end justify-between p-1'>
        <div>
          <p className='font-semibold'>{item.label}</p>
          <p className='mt-2'>${item.price}</p>
        </div>
        <i>
          <IconStarOutlined />
        </i>
      </div>
    </li>
  );
};

export const packages = [
  {
    id: 0,
    price: 50,
    label: 'Bana Hills',
    image: '/images/viet-travels/bana-hills.png',
  },
  {
    id: 1,
    price: 50,
    label: 'Hoi An',
    image: '/images/viet-travels/hoi-an.png',
  },
  {
    id: 2,
    price: 50,
    label: 'Hue city',
    image: '/images/viet-travels/hue-city.png',
  },
  {
    id: 3,
    price: 50,
    label: 'Ha Long Bay',
    image: '/images/viet-travels/ha-long-bay.png',
  },
  {
    id: 4,
    price: 50,
    label: 'Ninh Binh',
    image: '/images/viet-travels/ninh-binh.png',
  },
  {
    id: 5,
    price: 50,
    label: 'Da Lat',
    image: '/images/viet-travels/da-lat.png',
  },
  {
    id: 6,
    price: 50,
    label: 'Sapa',
    image: '/images/viet-travels/sapa.png',
  },
  {
    id: 7,
    price: 50,
    label: 'Ho Chi Minh City',
    image: '/images/viet-travels/ho-chi-minh.png',
  },
];

export default Popular;
