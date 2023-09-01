'use client';

import { useEffect, useState } from 'react';

import useWindowResize from '@/lib/hooks/useWindowResize';
import { Post } from '@/lib/types';

import CarouselCard from '@/components/carousel/CarouselCard';
import { IconArrow } from '@/components/common/Icons';

const Carousel = ({ posts }: { posts: Array<Post> }) => {
  const totalSlides = posts.length;
  const [postsPerSlide, setPostsPerSlide] = useState<number>(0);
  const [slidePosition, setSlidePosition] = useState(0);

  const windowSize = useWindowResize();

  useEffect(() => {
    if (windowSize.width > 1024) {
      return setPostsPerSlide(3);
    }
    if (windowSize.width > 640) {
      return setPostsPerSlide(2);
    }
    return setPostsPerSlide(1);
  }, [windowSize]);

  const moveToRight = () => {
    setSlidePosition((prevSlidePosition) => prevSlidePosition + 1);
  };

  const moveToLeft = () => {
    setSlidePosition((prevSlidePosition) => prevSlidePosition - 1);
  };

  return (
    <div className='relative'>
      <button
        type='button'
        className='absolute left-0 top-1/2 z-10 h-full w-10 -translate-y-1/2 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50'
        onClick={() => moveToLeft()}
        disabled={slidePosition === 0}
      >
        <IconArrow />
      </button>

      {postsPerSlide && (
        <div className='mx-auto w-[calc(100%-80px)] overflow-hidden'>
          <div
            className='flex transition duration-500'
            style={{
              transform: `translateX(-${
                slidePosition * (100 / postsPerSlide)
              }%)`,
            }}
          >
            {posts && posts.length > 0 ? (
              <>
                {posts.map((post) => (
                  <CarouselCard
                    key={post.id}
                    post={post}
                    postsPerSlide={postsPerSlide}
                  />
                ))}
              </>
            ) : null}
          </div>
        </div>
      )}

      <button
        type='button'
        className='absolute right-0 top-1/2 z-10 h-full w-10 -translate-y-1/2 rotate-180 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50'
        onClick={() => moveToRight()}
        disabled={slidePosition === totalSlides - postsPerSlide}
      >
        <IconArrow />
      </button>
    </div>
  );
};

export default Carousel;
