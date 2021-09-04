import { backendApi } from '@/app/backendApi';
import { AuthPayLoad, SignupPayLoad } from '../types';

export const signupApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation<AuthPayLoad, SignupPayLoad>({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ ...patch }) => ({
        url: `signup`,
        method: `POST`,
        body: patch,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: AuthPayLoad }) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const { useSignupMutation } = signupApi;
