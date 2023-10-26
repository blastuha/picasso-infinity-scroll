import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TableCell, TableRow } from '@mui/material'
import { UniversalButton } from '@/shared/ui/'
import { IPost } from '..'
import { useInView } from 'react-intersection-observer'

interface PostCellProps {
  post: IPost
  isLast?: boolean
  loadMorePosts?: () => void
}

export const PostCell: React.FC<PostCellProps> = ({
  post,
  isLast,
  loadMorePosts,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    skip: !isLast,
    threshold: 0.5,
  })

  React.useEffect(() => {
    if (inView && isLast && loadMorePosts) {
      loadMorePosts()
    }
  }, [inView, isLast, loadMorePosts])

  return (
    <TableRow
      ref={isLast ? ref : undefined}
      key={post.id}
      style={{ background: `${inView ? 'green' : 'pink'}` }}
    >
      <TableCell>{post.id}</TableCell>
      <TableCell>{post.title}</TableCell>
      <TableCell>
        {post.content.length > 107
          ? post.content.substring(0, 110) + '...'
          : post.content}
      </TableCell>
      <TableCell>
        <Link to={`post/${post.id}`}>
          <UniversalButton text='Просмотр'></UniversalButton>
        </Link>
      </TableCell>
    </TableRow>
  )
}
