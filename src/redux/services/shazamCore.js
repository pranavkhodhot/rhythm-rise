import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e66c50beb3msh0af92f2d0ae1f3ep1cece5jsnee79b5f27324',
      'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
    }
  };
  
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key','e66c50beb3msh0af92f2d0ae1f3ep1cece5jsnee79b5f27324');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;
