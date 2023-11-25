'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  { id: 'world', content: 'World', label: 'World' },
  { id: 'ny', content: 'New York City', label: 'N.Y.' },
  { id: 'business', content: 'Business', label: 'Business' },
  { id: 'arts', content: 'Arts', label: 'Arts' },
  { id: 'science', content: 'Science', label: 'Science' },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className='relative flex max-w-lg space-x-16 p-4'>
      {tabs.map((tab) => (
        <div key={tab.id}>
          <button
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? '' : 'hover:text-blue-400/60'
            } relative rounded-full py-1.5 font-medium text-blue-400 outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId='underline'
                className='absolute inset-0 z-10 border-spacing-1 border-b-2 border-blue-500 mix-blend-difference'
                transition={{ type: 'spring', bounce: 0.1, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>

          {activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className='absolute inset-0 top-20 h-fit w-full px-4'
              transition={{ type: 'spring', duration: 0.6 }}
            >
              {tab.content}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
