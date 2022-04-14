type TPost = {
  title: string
  excerpt: string
}

interface IPostCardProps {
  post: TPost
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
