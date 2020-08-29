const path = require(`path`)

const pagesQuery = `
query {
  wpgraphql {
    pages {
      edges {
        node {
          id
          title
          slug
          date
          content
        }
      }
    }
    posts {
      edges {
        node {
          slug
          content
          terms {
            edges {
              node {
                name
              }
            }
          }
          author {
            node {
              name
            }
          }
          date
          title
          uri
        }
      }
    }
  }
}
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(pagesQuery).then(result => {
    if (result.errors) throw result.errors

    result.data.wpgraphql.pages.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve('./src/templates/Page/Page.jsx'),
        context: node,
      })
    })

    result.data.wpgraphql.posts.edges.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: path.resolve('./src/components/templates/Post/Post.tsx'),
        context: node,
      })
    })
  })
}
