import Layout from 'src/components/Layout'
import Posts from 'src/components/Posts'
import React from 'react'
import SEO from 'src/components/Seo'
import { graphql, StaticQuery } from 'gatsby'
import { IPostLoop } from 'src/types/IPost'

interface IData {
  wpgraphql: {
    posts: {
      nodes: [IPostLoop]
    }
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        wpgraphql {
          posts {
            nodes {
              content
              id
              title
            }
          }
        }
      }
    `}
    render={(data: IData) => {
      const posts = data?.wpgraphql?.posts?.nodes

      return (
        <Layout>
          <SEO title="Homepage" />
          <Posts posts={posts} />
        </Layout>
      )
    }}
  />
)
