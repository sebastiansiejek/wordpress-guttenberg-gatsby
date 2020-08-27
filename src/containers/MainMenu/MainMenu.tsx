import React from 'react'
import 'src/styles/modules/_menu.scss'
import { StaticQuery, graphql, Link } from 'gatsby'
import { IMenu } from 'src/types/IMenu'
import Menu from 'src/components/molecules/Menu'

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
      return nodes && <Menu items={nodes} />
    }}
  ></StaticQuery>
)
