export const schema = gql`
  type Item {
    id: String
    uuid: String!
    title: String!
    doi: String!
    itemUrl: String!
    publishedOn: String!
    type: String!
    typeName: String!
    groupId: String!
    webUrl: String!
    postedOn: String!
    firstOnlineOn: String!
    revisedOn: String!
    resourceTitle: String
    resourceDoi: String
  }

  type Query {
    getItems(type: String!): [Item!] @skipAuth
  }
`
