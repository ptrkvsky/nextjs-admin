/* eslint-disable import/no-cycle */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { backendApi } from '@/app/backendApi';
import authReducer from '@/features/auth/slices/authSlice';

export const store = configureStore({
  reducer: {
    [backendApi.reducerPath]: backendApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(backendApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
