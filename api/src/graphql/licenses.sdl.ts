export const schema = gql`
  type License {
    id: Int!
    value: Int!
    name: String!
    url: String!
    items: [Item]!
  }

  type Query {
    licenses: [License!]! @requireAuth
    license(id: Int!): License @requireAuth
    licenseCounts: [LicenseCount] @skipAuth
  }
  type LicenseCount {
    count: Int
    prop: Float
    value: Int
    name: String
  }

  input CreateLicenseInput {
    value: Int!
    name: String!
    url: String!
  }

  input UpdateLicenseInput {
    value: Int
    name: String
    url: String
  }

  type Mutation {
    createLicense(input: CreateLicenseInput!): License! @requireAuth
    updateLicense(id: Int!, input: UpdateLicenseInput!): License! @requireAuth
    deleteLicense(id: Int!): License! @requireAuth
  }
`
