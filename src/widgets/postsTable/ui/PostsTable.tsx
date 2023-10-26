import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
} from '@mui/material'
import { PostCell } from '@/entities/post'
import { IPost } from '@/entities/post'

interface PostsTableProps<T> {
  posts: T[] | undefined
  loadMorePosts: () => void
}

export const PostsTable: React.FC<PostsTableProps<IPost>> = ({
  posts,
  loadMorePosts,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead></TableHead>
        <TableBody>
          {posts?.map((post, index) => (
            <PostCell
              post={post}
              key={post.id}
              isLast={index === posts.length - 1}
              loadMorePosts={loadMorePosts}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
