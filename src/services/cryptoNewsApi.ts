import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
  'X-RapidAPI-Host': import.meta.env.VITE_BINGNEWS_API_HOST
};

const baseUrl = import.meta.env.VITE_BINGNEWS_BASE_URL;

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&fresshenss=Day&count=${count}`
        )
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
