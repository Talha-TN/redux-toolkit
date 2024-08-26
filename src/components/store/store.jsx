import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slices/CounterSlice';
export const store = configureStore({
  reducer: {
    counter: CounterSlice, // Add the counter reducer to the store
  },
});
export default store