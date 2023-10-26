import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { HomePage } from '@/pages/homePage'
import { PostPage } from '@/pages/postPage/ui/PostPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'post/:id',
        element: <PostPage />,
      },
    ],
  },
])
