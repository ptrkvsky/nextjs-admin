import { backendApi } from '@/app/backendApi';

export const confirmationApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    confirm: build.query<boolean, string>({
      query: (token) => ({
        url: `/auth/confirmation`,
        method: `GET`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useConfirmQuery } = confirmationApi;
