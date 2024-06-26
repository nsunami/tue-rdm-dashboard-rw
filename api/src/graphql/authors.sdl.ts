export const schema = gql`
  type Author {
    id: Int!
    uuid: String!
    full_name: String
    is_active: Boolean
    url_name: String
    orcid_id: String
    items: [Item]!
  }
  type AuthorCount {
    author_id: Int
    orcid: String
    full_name: String
    count: Int
  }
  type Query {
    authors: [Author!]! @requireAuth
    author(id: Int!): Author @requireAuth
    authorCounts(from: DateTime, to: DateTime): [AuthorCount] @skipAuth
  }
`
