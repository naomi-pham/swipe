import Image from 'next/image';

import About from '../../../components/portfolio/About';
import Contact from '../../../components/portfolio/Contact';
import Header from '../../../components/portfolio/Header';
import Work from '../../../components/portfolio/Work';

const Portfolio = () => {
  return (
    <main className='text-sm text-white sm:text-base'>
      {/* bg */}
      <Image
        src='/images/portfolio/leaf-left.png'
        alt='viet-travels-background'
        width={1440}
        height={1024}
        unoptimized
        className='fixed inset-0 -z-10 min-h-screen w-full object-cover'
      />
      <Header />
      <div className='mt-20 space-y-20 xl:space-y-28'>
        <About />
        <Work />
        <Work />
        <Work />
        <Contact />
      </div>

      <div className='fixed inset-0 -z-10 bg-[#8A8E87]/40'></div>
    </main>
  );
};

export default Portfolio;
