import React from 'react';

const GradientWrapper = ({ children }) => {
  return (
    <article className='w-full rounded-3xl border-2 border-[#86937ecc] bg-gradient-to-r from-[#555D50CC] via-[#555D5098] to-[#555D5066] p-6 backdrop-blur-lg'>
      {children}
    </article>
  );
};

export default GradientWrapper;
