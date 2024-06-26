import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shopfever-api.vercel.app',
    credentials: 'include'
  }),
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `/categories`,
      providesTags: ['Category']
    }),
    addNewCategory: builder.mutation({
      query: (data) => ({
        url: `/new/category`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Category']
    }),
  })
})


export const { useGetAllCategoriesQuery, useAddNewCategoryMutation } = categoryApi