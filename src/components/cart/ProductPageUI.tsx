'use client';

import { Provider } from 'react-redux';

import ProductView from '@/components/redux/features/cart/ProductView';
import { store } from '@/components/redux/store';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

const ProductPageUI = ({ products }: { products: Product[] }) => {
  return (
    <Provider store={store}>
      <ProductView products={products} />
    </Provider>
  );
};

export default ProductPageUI;
