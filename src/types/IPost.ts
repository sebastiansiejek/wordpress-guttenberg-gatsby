export interface IPostLoop {
  content: string
  id: string
  title: string
}

export interface IPostsLoop {
  posts: [IPostLoop]
}
