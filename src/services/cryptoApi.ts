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
      query: () => createRequest('/coins')
    })
  })

  //Store == Central station of truth = entire application state
});

export const { useGetCryptosQuery } = cryptoApi;
