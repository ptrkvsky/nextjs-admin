import { enterApi } from '@/app/enterApi';

export const signUpSlice = enterApi.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.query({
      query: () => `test`,
    }),
  }),
  overrideExisting: false,
});

export const { useSignUpQuery } = signUpSlice;
