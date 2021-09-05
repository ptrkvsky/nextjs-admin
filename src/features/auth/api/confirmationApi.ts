import { backendApi } from '@/app/backendApi';

export const confirmationApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    confirm: build.query<boolean, string>({
      query: (token) => ({
        url: `/auth/confirmation?${token}`,
        method: `GET`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useConfirmQuery } = confirmationApi;
