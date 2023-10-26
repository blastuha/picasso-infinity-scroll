import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '..'

export const postApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://653a123be3b530c8d9e91bc8.mockapi.io/posts/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], { page: number; limit: number }>({
      query: ({ page, limit }) => `posts?page=${page}&limit=${limit}`,
    }),
    getPostById: builder.query<IPost, string | undefined>({
      query: (id) => `posts/${id}`,
    }),
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi
