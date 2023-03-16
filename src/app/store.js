import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import logger from 'redux-logger';
import { counterApi } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [counterApi.reducerPath]: counterApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(counterApi.middleware,logger),
});
