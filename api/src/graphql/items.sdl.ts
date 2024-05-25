export const schema = gql`
  type Item {
    id: String
    uuid: String!
    title: String!
    doi: String!
    license: License!
    description: String!
    url_public_html: String!
    published_date: DateTime!
  }

  type License {
    id: Int
    name: String
  }

  type ItemsPerTime {
    count: BigInt
    date: DateTime
  }

  type Query {
    Items: [Item!] @skipAuth
    itemsOverTime(timeFrame: String!): [ItemsPerTime] @skipAuth
  }
`
