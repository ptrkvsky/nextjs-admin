import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';
import type { Session } from '@/features/auth/types';

const initialState = { user: null, token: null } as Session;

const slice = createSlice({
  name: `auth`,
  initialState,
  reducers: {
    setSession: (state, { payload: session }: PayloadAction<Session>) => {
      state.user = session.user;
      state.token = session.token;
    },
  },
});

export const { setSession } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
