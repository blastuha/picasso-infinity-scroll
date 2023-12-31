import { useState, useEffect } from 'react'
import { useGetPostsQuery } from '@/entities/post'
import { PostsTable } from '@/widgets/postsTable'
import { Loader } from '@/shared/ui/'
import styles from './HomePage.module.scss'

export const HomePage: React.FC = () => {
  const [limit, setLimit] = useState(15)
  const [loadingMore, setLoadingMore] = useState(false)
  const { data, isFetching, isError } = useGetPostsQuery({
    page: 1,
    limit,
  })

  const loadMorePosts = () => {
    if (!isFetching && !loadingMore && data && data.length < 26) {
      setLoadingMore(true)
      setLimit((prevLimit) => prevLimit + 5)
    }
  }

  useEffect(() => {
    if (!isFetching) {
      setLoadingMore(false)
    }
  }, [isFetching, data])

  if (isFetching) return <Loader />
  if (isError) return <p>Ошибка при загрузке постов</p>

  return (
    <main className={styles.homePage}>
      <h3>Последние публикации:</h3>
      <PostsTable
        posts={data}
        loadMorePosts={loadMorePosts}
      />
    </main>
  )
}
