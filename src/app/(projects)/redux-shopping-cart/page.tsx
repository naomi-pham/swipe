import { notFound } from 'next/navigation';

import ProductPageUI from '@/components/cart/ProductPageUI';

async function getProducts() {
  const res = await fetch(
    'https://fakestoreapi.com/products/category/electronics?limit=8'
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function ReduxShoppingCart() {
  const products = await getProducts();

  return (
    <div className='py-10'>
      <ProductPageUI products={products} />
    </div>
  );
}

export default ReduxShoppingCart;
