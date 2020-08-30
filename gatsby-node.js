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
      nodes {
        content
        id
        title
        slug
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
      const isBlog = node.slug == 'blog' ? true : false

      createPage({
        path: `/${node.slug}`,
        component: isBlog
          ? path.resolve('./src/templates/Blog/Blog.tsx')
          : path.resolve('./src/templates/Page/Page.tsx'),
        context: isBlog
          ? { node: node, posts: result.data.wpgraphql.posts.nodes }
          : node,
      })
    })

    result.data.wpgraphql.posts.nodes.forEach(node => {
      createPage({
        path: `/post/${node.slug}`,
        component: path.resolve('./src/components/templates/Post/Post.tsx'),
        context: node,
      })
    })
  })
}
