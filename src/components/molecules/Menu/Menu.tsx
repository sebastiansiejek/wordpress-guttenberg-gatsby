import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { IMenu } from 'src/types/IMenu'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        wpgraphql {
          menu(id: 2, idType: DATABASE_ID) {
            name
            id
            menuItems {
              nodes {
                id
                label
                path
              }
            }
          }
        }
      }
    `}
    render={({ wpgraphql }: IMenu) => {
      const { nodes } = wpgraphql?.menu?.menuItems

      return (
        nodes && (
          <ul>
            {nodes.map(node => (
              <li key={node.id}>
                <Link to={node.path}>{node.label}</Link>
              </li>
            ))}
          </ul>
        )
      )
    }}
  ></StaticQuery>
)
