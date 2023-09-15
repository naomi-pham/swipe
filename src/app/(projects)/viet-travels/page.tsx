import Image from 'next/image';
import React, { Fragment } from 'react';

import Banner from '@/components/viet-travels/Banner';
import Footer from '@/components/viet-travels/Footer';
import Header from '@/components/viet-travels/Header';
import Popular from '@/components/viet-travels/Popular';
import Stats from '@/components/viet-travels/Stats';
import Testimonials from '@/components/viet-travels/Testimonials';
import TopValues from '@/components/viet-travels/TopValues';

const VietTravels = () => {
  return (
    <main className='text-sm text-white/80 sm:text-base'>
      {/* bg */}
      <Fragment>
        <Image
          src='/images/viet-travels/bg.png'
          alt='viet-travels-background'
          width={1440}
          height={1024}
          className='fixed inset-0 -z-10 min-h-screen w-full'
        />
        <div className='fixed inset-0 -z-10 bg-[#d9d9d9]/10 backdrop-blur-2xl' />
      </Fragment>

      <Header />

      <Banner />
      <Popular />
      <TopValues />
      <Stats />
      <Testimonials />

      <Footer />
    </main>
  );
};

export default VietTravels;
