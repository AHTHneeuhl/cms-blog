export type TPost = {
  author: {
    bio: string
    id: string
    name: string
    photo: {
      url: string
    }
  }
  categories: [{}]
  createdAt: string
  excerpt: string
  featuredImage: {
    url: string
  }
  slug: string
  title: string
}
