import { AddPostForm } from './AddPostForm'
import { PostsList } from './PostsList'

export const PostsMainPage = () => {
  return (
    <section>
      <AddPostForm />
      <PostsList />
    </section>
  )
}