const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
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
        }
      }
    `
  ).then(result => {
    if (result.errors) throw result.errors
    result.data.wpgraphql.pages.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve('./src/templates/Page/Page.jsx'),
        context: node,
      })
    })
  })
}
