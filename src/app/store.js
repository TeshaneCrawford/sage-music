import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { deezerApi } from '../service/deezerApi';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [deezerApi.reducerPath]: deezerApi.reducer,
  },
});
