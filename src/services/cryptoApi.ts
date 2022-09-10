import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

//reducerPath: 'crypto',  what is this reduce for? A name

/*Name of the endpoints
endpoints: (builder) => ({
  getCryptos: builder.query({
    query: () => createRequest('/coins')
  })
})*/

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`)
    })
  })

  //Store == Central station of truth = entire application state
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
