import React from 'react'
import 'src/styles/modules/_menu.scss'
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
          <nav className="main-navigation bg-blue-500">
            <ul className="flex p-5">
              {nodes.map(node => (
                <li key={node.id}>
                  <Link
                    className="p-3 text-white hover:text-blue-900"
                    to={node.path}
                  >
                    {node.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )
      )
    }}
  ></StaticQuery>
)
