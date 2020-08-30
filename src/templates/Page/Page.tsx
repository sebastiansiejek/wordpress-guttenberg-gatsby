import React from 'react'
import Layout from 'src/components/Layout'

export default ({ pageContext }) => (
  <Layout>
    <h1 className="text-5xl mb-4">{pageContext.title}</h1>
    <div
      className="page-content"
      dangerouslySetInnerHTML={{
        __html: pageContext.content,
      }}
    ></div>
  </Layout>
)
