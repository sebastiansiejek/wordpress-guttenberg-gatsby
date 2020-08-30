import React from 'react'
import SEO from 'src/components/Seo'
import Layout from 'src/components/Layout'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-5xl">Page not found</h2>
    </div>
  </Layout>
)

export default NotFoundPage
