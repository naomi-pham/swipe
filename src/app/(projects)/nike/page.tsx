import React from 'react';

import Carousel from '@/components/nike/Carousel';
import FeaturedProduct from '@/components/nike/FeaturedProduct';
import Header from '@/components/nike/Header';

const NikeLandingPage = () => {
  return (
    <div className='min-h-screen bg-zinc-900 text-zinc-200'>
      <Header />
      <main>
        <FeaturedProduct />
        <Carousel />
      </main>
    </div>
  );
};

export default NikeLandingPage;
