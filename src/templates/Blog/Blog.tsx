import React from 'react'
import Layout from 'src/components/Layout'
import Posts from 'src/components/organisms/Posts'

export default ({ pageContext }) => (
  <Layout>
    <h1 className="text-5xl mb-4">{pageContext.node.title}</h1>
    <div
      className="page-content"
      dangerouslySetInnerHTML={{
        __html: pageContext.content,
      }}
    ></div>
    {pageContext.posts && <Posts posts={pageContext.posts} />}
  </Layout>
)
