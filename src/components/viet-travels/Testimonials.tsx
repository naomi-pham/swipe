import Image from 'next/image';
import React from 'react';

import { IconStarFilled, IconStarOutlined } from '@/components/common/Icons';

const Testimonials = () => {
  return (
    <section className='container mx-auto mt-20 lg:mt-32'>
      <h2 className='text-center text-3xl font-bold md:text-left md:text-4xl'>
        What our customers say
      </h2>

      <ul className='mt-10 grid w-full grid-cols-1 gap-10 lg:grid-cols-3'>
        {reviews.map((review) => (
          <li key={review.id} className='group flex-1'>
            <div className='relative h-[232px] rounded-2xl'>
              <Image
                src={review.avatar}
                alt={review.name}
                width={367}
                height={232}
                className='w-full rounded-2xl object-cover shadow-xl group-hover:opacity-30 group-hover:blur-sm'
                unoptimized
              />

              <div className='card-linear group-hover:text-viet-travels-accent-200 transition- absolute inset-0 flex translate-y-2 transform flex-col items-center justify-center gap-4 rounded-2xl p-6 text-center opacity-0 transition duration-300 ease-in-out group-hover:-translate-y-1.5 group-hover:cursor-pointer group-hover:opacity-100'>
                <p className='line-clamp-5'>{review.content}</p>
                <div className='text-viet-travels-accent-200 mt-2 inline-flex items-center gap-1'>
                  <i>
                    <IconStarFilled />
                  </i>
                  <i>
                    <IconStarFilled />
                  </i>
                  <i>
                    <IconStarFilled />
                  </i>
                  <i>
                    <IconStarFilled />
                  </i>
                  <i>
                    <IconStarOutlined />
                  </i>
                </div>
              </div>
            </div>

            <p className='z-10 mt-6 text-center font-medium group-hover:text-yellow-50'>
              {review.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const reviews = [
  {
    id: 0,
    name: 'David Smith',
    avatar: '/images/viet-travels/avatar-1.png',
    content:
      'Super user-friendly site. Found great deals on flights and hotels. Instant updates on prices. Quick and helpful customer support. Made my trip smooth. Will use again!',
  },
  {
    id: 1,
    name: 'Emily Johnson',
    avatar: '/images/viet-travels/avatar-1.png',
    content:
      'Go-to platform for all bookings. Flights, hotels, cars, all-in-one. Mobile-friendly. Real-time deals are a win. Time and money saver.',
  },
  {
    id: 2,
    name: 'Lauren Davis',
    avatar: '/images/viet-travels/avatar-1.png',
    content:
      'Family vacation made easy. Kid-friendly filters. Compare options hassle-free. Local activities for all ages. Unforgettable trip tailored for families.',
  },
];

export default Testimonials;
