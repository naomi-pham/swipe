import Image from 'next/image';
import React from 'react';

import { Post } from '@/lib/types';

const CarouselCard = ({
  post,
  postsPerSlide,
}: {
  post: Post;
  postsPerSlide: number;
}) => {
  return (
    <div
      className='min-w-full px-4'
      style={{ minWidth: `calc(100% / ${postsPerSlide})` }}
    >
      <div className='rounded-xl border border-zinc-200'>
        {post?.images?.length && (
          <Image
            src={post?.images[0]}
            alt={post?.title}
            width={200}
            height={200}
            unoptimized
            className='aspect-[2/1] w-full rounded-t-xl object-cover object-center'
          />
        )}
        <div className='flex flex-col items-center justify-center gap-1 px-6 py-10 text-center'>
          <p className='line-clamp-1 text-lg font-semibold text-zinc-800'>
            {post?.title}
          </p>
          <p className='text-semibold text-zinc-500'>{post?.category?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
