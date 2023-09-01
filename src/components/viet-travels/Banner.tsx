import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section
      id='banner'
      className='container mx-auto mt-10 flex w-full flex-col items-center justify-between gap-y-4 sm:mt-16 lg:flex-row xl:gap-x-16'
    >
      <div className='space-y-6 lg:max-w-lg xl:max-w-2xl'>
        <h1 className='text-4xl font-bold leading-snug sm:text-5xl sm:leading-snug xl:text-5xl xl:leading-snug'>
          Your Gateway to{' '}
          <span className='decoration-viet-travels-accent-100 underline'>
            Unforgettable
          </span>{' '}
          Vietnam Adventures
        </h1>
        <p className='leading-relaxed lg:max-w-md xl:max-w-xl'>
          Embark on a journey of discovery and delight with our tailored travel
          packages, guiding you through the magnificent landscapes, rich
          heritage, and exquisite flavours of Vietnam.
        </p>
      </div>

      <div className='relative h-[400px] w-full max-w-sm sm:h-[496px] sm:max-w-[465px]'>
        <Image
          src={bannerImages.image2.url}
          alt={bannerImages.image2.label}
          width={250}
          height={320}
          className='absolute inset-0 top-1/2 w-auto -translate-y-1/2 scale-[65%] shadow-2xl sm:scale-100'
          priority
        />

        <Image
          src={bannerImages.image1.url}
          alt={bannerImages.image1.label}
          width={250}
          height={320}
          className='absolute inset-0 left-1/2 z-10 w-auto -translate-x-1/2 scale-[65%] shadow-2xl sm:scale-100'
        />

        <Image
          src={bannerImages.image3.url}
          alt={bannerImages.image3.label}
          width={250}
          height={320}
          className='absolute bottom-0 right-0 w-auto scale-[65%] shadow-2xl sm:scale-100'
        />
      </div>
    </section>
  );
};

export const bannerImages = {
  image1: { label: 'Image 1', url: '/images/viet-travels/banner-image-1.png' },
  image2: { label: 'Image 2', url: '/images/viet-travels/banner-image-2.png' },
  image3: { label: 'Image 3', url: '/images/viet-travels/banner-image-3.png' },
};

export default Banner;
