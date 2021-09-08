import { backendApi } from '@/app/backendApi';
import { Session, SignupValues } from '../types';

export const signupApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<Session, SignupValues>({
      query: ({ ...patch }) => ({
        url: `/auth/signup`,
        method: `POST`,
        body: patch,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: Session }) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const { useSignupMutation } = signupApi;
