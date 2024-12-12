import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import headerSlice from './slices/headerSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const store = configureStore({
  reducer: {
    counter: counterReducer,
    header: headerSlice
  },
});

export default store;
