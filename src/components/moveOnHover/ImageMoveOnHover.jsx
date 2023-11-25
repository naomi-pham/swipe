'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const ImageMoveOnHover = () => {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <div
      onMouseOver={() => setIsMoving(true)}
      onMouseOut={() => setIsMoving(false)}
      className='min-h-[100px] max-w-sm rounded-lg border border-[#3A3947]/20 bg-white/70 p-4 shadow-md'
    >
      <Marquee play={isMoving} speed={100}>
        <div className='mr-5 rounded-2xl bg-[#f2f2f2]/60 px-8 py-2.5'>
          <Image
            src='/images/framer/us.png'
            alt='image'
            width={222}
            height={40}
          />
        </div>

        <div className='mr-5 rounded-2xl bg-[#f2f2f2]/60 px-8 py-2.5'>
          <Image
            src='/images/framer/spiking.png'
            alt='image'
            width={105}
            height={40}
          />
        </div>

        <div className='mr-5 rounded-2xl bg-[#f2f2f2]/60 px-8 py-2.5'>
          <Image
            src='/images/framer/cozycot.png'
            alt='image'
            width={138}
            height={44}
          />
        </div>
      </Marquee>
    </div>
  );
};

export default ImageMoveOnHover;
