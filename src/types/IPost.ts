export interface IPostLoop {
  content: string
  id: string
  title: string
  slug: string
  excerpt: string
}

export interface IPostsLoop {
  posts: [IPostLoop]
}
