import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './slices/CounterSlice';
import todoSlice from "../store/slices/TodoSlice"
export const store = configureStore({
  reducer: {
    CounterSlice,
    todoSlice // Add the counter reducer to the store
  },
});
export default store