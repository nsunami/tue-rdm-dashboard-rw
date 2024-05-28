import type { ItemsQuery, ItemsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Item from 'src/components/Item'

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
      <div className="md:m-2 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
        {items.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </div>
    </>
  )
}
