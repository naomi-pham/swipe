import Image from 'next/image';
import React from 'react';

const TopValues = () => {
  return (
    <section className='container mx-auto mt-20 flex w-full flex-col items-center justify-between gap-x-20 gap-y-20 lg:mt-32 lg:flex-row'>
      <div className='space-y-6 text-center md:text-left lg:max-w-[214px]'>
        <h2 className='text-3xl font-semibold capitalize md:text-4xl md:leading-[48px]'>
          Top values for you
        </h2>
        <p>Enjoy countless perks when booking our travel packages</p>
      </div>

      <ul className='grid grid-cols-1 items-center gap-x-10 gap-y-20 lg:h-[256px] lg:grid-cols-3'>
        {values.map((value) => (
          <li
            key={value.id}
            className='card-linear relative flex flex-col p-6 text-center even:place-self-end'
          >
            <Image
              src={value.image}
              alt={value.title}
              width={80}
              height={80}
              className='border-viet-travels-primary-200 absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-32 rounded-full border-4'
            />

            <div className='space-y-2.5 pt-10'>
              <p className='text-xl font-semibold'>{value.title}</p>
              <p className=''>{value.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const values = [
  {
    id: 0,
    image: '/images/viet-travels/ho-chi-minh.png',
    title: 'Lots of Choices',
    desc: 'Over 1000+ partners nationwide',
  },
  {
    id: 1,
    image: '/images/viet-travels/guide.png',
    title: 'Best tour guides',
    desc: 'Dedicated & experienced local guides',
  },
  {
    id: 2,
    image: '/images/viet-travels/booking.png',
    title: 'Easy booking',
    desc: 'Simple checkout in few minutes',
  },
];

export default TopValues;
