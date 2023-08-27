import { notFound } from 'next/navigation';
import React from 'react';

import Carousel from '@/components/carousel/Carousel';
import CarouselTab from '@/components/carousel/CarouselTab';

async function getPosts() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=10');

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const CarouselPage = async () => {
  const posts = await getPosts();

  return (
    <div className='content-container flex min-h-screen items-center justify-center'>
      {posts ? (
        <div className='w-full space-y-16'>
          <CarouselTab />
          <Carousel posts={posts} />
        </div>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default CarouselPage;
