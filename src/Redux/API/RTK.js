import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://bohdan-back.onrender.com/api/cars`,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["Cars"],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: ({ params }) => ({
        url: `/catalog`,
        params,
      }),
      providesTags: ["Cars"],
    }),
  }),
});
export const { useGetCarsQuery } = API;
