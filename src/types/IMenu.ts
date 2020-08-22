export interface IMenu {
  wpgraphql: {
    menu: {
      name: ''
      id: number
      menuItems: {
        nodes: [
          {
            id: number
            label: string
            path: string
          }
        ]
      }
    }
  }
}
