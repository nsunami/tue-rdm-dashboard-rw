import type { ItemsQuery, ItemsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<ItemsQuery, ItemsQueryVariables> = gql`
  query ItemsQuery($type: String!) {
    items: getItems(type: $type) {
      id
      uuid
      title
      doi
      itemUrl
      publishedOn
      type
      typeName
      groupId
      webUrl
      postedOn
      firstOnlineOn
      revisedOn
      resourceTitle
      resourceDoi
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ items }: CellSuccessProps<ItemsQuery>) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
