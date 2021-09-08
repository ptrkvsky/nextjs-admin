import { backendApi } from '@/app/backendApi';
import { Session, SigninValues } from '@/features/auth/types';

export const signinApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation<Session, SigninValues>({
      query: ({ ...patch }) => ({
        url: `/auth/signin`,
        method: `POST`,
        body: patch,
      }),
      // Pick out data and prevent nested properties in a hook or selector
    }),
  }),
  overrideExisting: false,
});

export const { useSigninMutation } = signinApi;
