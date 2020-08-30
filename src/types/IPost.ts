export interface IPostLoop {
  content: string
  id: string
  title: string
  slug: string
}

export interface IPostsLoop {
  posts: [IPostLoop]
}
