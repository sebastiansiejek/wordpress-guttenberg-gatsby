import React from 'react'
import { IPostsLoop } from 'src/types/IPost'

export default ({ posts }: IPostsLoop) => (
  <div>
    {posts &&
      posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          ></div>
        </div>
      ))}
  </div>
)
