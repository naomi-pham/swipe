import Image from 'next/image';
import { useState } from 'react';

import { CartItem } from '@/lib/types';
import { USDollar } from '@/lib/utils';

import ProductDetailDrawer from '@/components/cart/ProductDetailDrawer';
import { IconCart, IconInfo } from '@/components/common/Icons';

interface ProductCardProps {
  item: Omit<CartItem, 'quantity'>;
  handleAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const ProductCard = ({ item, handleAddToCart }: ProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li key={item.id} className='space-y-4 rounded-xl bg-zinc-100 p-6'>
      <Image
        src={item.image}
        alt={item.title}
        width={200}
        height={200}
        loading='lazy'
        className='object-fit aspect-square w-full rounded-xl bg-white p-10'
      />
      <div className=''>
        <p className='line-clamp-2'>{item.title}</p>
        <p className='mt-3 text-xl font-semibold tracking-wide text-zinc-800'>
          {USDollar.format(item.price)}
        </p>

        <div className='mt-4 inline-flex w-full justify-between'>
          <button
            onClick={openModal}
            className='inline-flex w-fit items-center gap-1 text-sm'
          >
            <span>
              <IconInfo size={18} />
            </span>
            Quick view
          </button>
          <button
            onClick={() => handleAddToCart(item)}
            className='group overflow-hidden rounded-full'
          >
            <div className='inline-flex translate-x-7 gap-2.5 rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-3 py-2 text-sm text-rose-50 transition duration-200 ease-in-out group-hover:translate-x-0 group-hover:from-[#ff6366] group-hover:to-[#ff6366]'>
              <p className=''>Add to cart</p>
              <span>
                <IconCart size={16} />
              </span>
            </div>
          </button>

          <ProductDetailDrawer closeModal={closeModal} isOpen={isOpen} />
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
