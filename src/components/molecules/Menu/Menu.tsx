import React from 'react'
import { Link } from 'gatsby'

interface Iitem {
  id: number
  path: string
  label: string
}

interface IItems {
  items: [Iitem]
}

export default ({ items }: IItems) =>
  items && (
    <nav className="main-navigation bg-blue-500">
      <ul className="flex p-5">
        {items.map((item: Iitem) => (
          <li key={item.id}>
            <Link className="p-3 text-white hover:text-blue-900" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
