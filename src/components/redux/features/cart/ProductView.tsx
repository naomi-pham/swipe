import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CartItem } from '@/lib/types';

import ProductCard from '@/components/cart/ProductCard';
import { Product } from '@/components/cart/ProductPageUI';
import { IconCart, IconHeart } from '@/components/Icons';
import { addItem } from '@/components/redux/features/cart/cartSlice';

const ProductView = ({ products }: { products: Product[] }) => {
  const cart = useSelector((state: { items: CartItem[] }) => {
    return state;
  });
  const [cartTotal, setCartTotal] = useState(0);
  const [cartAdded, setCartAdded] = useState(false);
  const [showTotal, setShowTotal] = useState(true);

  const dispatch = useDispatch();

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartAdded(true);
    setShowTotal(false);

    dispatch(addItem(item));

    setTimeout(() => setCartAdded(false), 600);
    setTimeout(() => setShowTotal(true), 600);
  };

  useEffect(() => {
    if (cart && cart.items) {
      let total = 0;
      cart.items.forEach((item: CartItem) => {
        total += item.quantity;
      });
      setCartTotal(total);
    }
  }, [cart]);

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-0'>
      <div className='flex w-full items-baseline justify-between'>
        <p className='text-3xl font-bold'>Recommended for you</p>

        <div className='relative z-10 overflow-hidden'>
          <i className='text-[#ff6366]'>
            <IconCart size={42} />
          </i>
          <span
            className={`${
              cartAdded
                ? '-translate-y-3/4 opacity-100'
                : '-translate-y-10 opacity-0'
            } absolute left-1/2 top-1/2 z-0 -translate-x-1/2 text-xs text-[#ff6366] transition duration-300`}
          >
            <IconHeart size={14} />
          </span>

          {showTotal && (
            <p className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full text-xs font-bold transition duration-300'>
              {cartTotal}
            </p>
          )}
        </div>
      </div>
      <>
        {products && (
          <ul className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4'>
            {products.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </ul>
        )}
      </>
    </div>
  );
};

export default ProductView;
