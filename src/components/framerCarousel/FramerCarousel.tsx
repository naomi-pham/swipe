'use client';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { IconArrow } from '@/components/common/Icons';

const images = [
  '/images/framer/spiking.png',
  '/images/framer/cozycot.png',
  '/images/framer/us.png',
];

const collapsedAspectRatio = 1 / 3;
const gap = 4;

const FramerCarousel = () => {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveToRight = () => {
    enableAnimation();

    if (step === images.length - 1) {
      setStep(0);
    } else setStep(step + 1);
  };

  const moveToLeft = () => {
    enableAnimation();

    if (step === 0) {
      setStep(images.length - 1);
    } else setStep(step - 1);
  };

  const cancelAnimation = () => {
    setIsAnimating(false);
  };

  const enableAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
  };

  return (
    <div className='relative max-w-3xl overflow-hidden'>
      <MotionConfig
        transition={{ duration: 0.65, ease: [0.56, 0.03, 0.12, 1.04] }}
      >
        <div className='z-0 mx-16 overflow-hidden'>
          <AnimatePresence
            initial={false}
            mode='popLayout'
            onExitComplete={cancelAnimation}
          >
            <motion.div
              initial={false}
              animate={{
                y: `-${step * 100 * collapsedAspectRatio + step * gap}%`,
              }}
              className='flex flex-col'
            >
              {images.map((image, i) => (
                <motion.div
                  key={image}
                  animate={step === i ? 'active' : 'inactive'}
                  variants={{
                    active: {
                      opacity: 1,
                    },
                    inactive: {
                      opacity: 0.2,
                      marginLeft: 0,
                    },
                  }}
                  className='relative mt-4 aspect-video w-20 outline'
                >
                  <Image
                    src={image}
                    alt='image'
                    fill
                    className='absolute inset-0'
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </MotionConfig>

      <button
        type='button'
        className='absolute left-0 top-1/2 z-20 h-full w-10 -translate-y-1/2 rotate-180 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50'
        onClick={moveToLeft}
      >
        <IconArrow />
      </button>

      <button
        type='button'
        className='absolute right-0 top-1/2 z-20 h-full w-10 -translate-y-1/2 px-2 text-slate-700 disabled:cursor-not-allowed disabled:opacity-50'
        onClick={moveToRight}
      >
        <IconArrow />
      </button>
    </div>
  );
};

export default FramerCarousel;
