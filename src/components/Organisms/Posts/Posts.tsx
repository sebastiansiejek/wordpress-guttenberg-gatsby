import React from 'react'
import { IPostsLoop } from 'src/types/IPost'
import { Link } from 'gatsby'

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
          <Link to={`/post/${post.slug}`}>Czytaj więcej</Link>
        </div>
      ))}
  </div>
)
