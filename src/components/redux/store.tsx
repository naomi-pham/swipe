import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '@/components/redux/features/cart/cartSlice';

export const store = configureStore({
  reducer: cartReducer,
});
