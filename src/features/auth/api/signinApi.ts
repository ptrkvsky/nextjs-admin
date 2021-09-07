import { backendApi } from '@/app/backendApi';
import { SessionPayload, AuthPayload } from '../types';

export const signinApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation<SessionPayload, AuthPayload>({
      query: ({ ...patch }) => ({
        url: `/auth/signin`,
        method: `POST`,
        body: patch,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: { data: SessionPayload }) => response.data,
    }),
  }),
  overrideExisting: false,
});

export const { useSigninMutation } = signinApi;
