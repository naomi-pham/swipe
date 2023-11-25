import React from 'react';

import ImageMoveOnHover from '@/components/moveOnHover/ImageMoveOnHover';
import Tabs from '@/components/tabs/Tabs';

const page = () => {
  return (
    <div className='space-y-20'>
      <Tabs />

      <ImageMoveOnHover />
    </div>
  );
};

export default page;
