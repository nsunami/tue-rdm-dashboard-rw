import type { ItemsQuery, ItemsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Item from '../Item/Item'

export const QUERY: TypedDocumentNode<ItemsQuery, ItemsQueryVariables> = gql`
  query ItemsQuery {
    items: Items {
      id
      uuid
      title
      doi
      description
      url_public_html
      published_date
      license {
        name
      }
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
    <>
      {items.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </>
  )
}
