import { useParams, Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'
import Chip from '@mui/material/Chip'
import { useGetPostByIdQuery } from '@/entities/post/api/postApi'
import { UniversalButton, Loader } from '@/shared/ui'

import styles from './PostPage.module.scss'

export const PostPage: React.FC = () => {
  const { id } = useParams()
  const { data: post, isFetching } = useGetPostByIdQuery(id)

  return (
    <main>
      {isFetching ? (
        <Loader />
      ) : (
        <div className={styles.fullPost}>
          <h3 className={styles.fullPost__title}>{post?.title}</h3>
          <div className={styles.fullPost__info}>
            <div className={styles.info__author}>
              <RxAvatar size='24' />
              <span>Boris Shevnin</span>
            </div>
            <Chip
              label={`Post ID: ${id}`}
              size='small'
              className={styles.fullPost__chip}
            />
          </div>
          <p className={styles.fullPost__content}>{post?.content}</p>
          <Link
            to='/'
            className={styles.fullPost__button}
          >
            <UniversalButton text='НАЗАД' />
          </Link>
        </div>
      )}
    </main>
  )
}
