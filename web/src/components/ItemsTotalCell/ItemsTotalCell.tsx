import type {
  FindItemsTotalQuery,
  FindItemsTotalQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const QUERY: TypedDocumentNode<
  FindItemsTotalQuery,
  FindItemsTotalQueryVariables
> = gql`
  query FindItemsTotalQuery {
    itemsTotal
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindItemsTotalQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  itemsTotal,
}: CellSuccessProps<FindItemsTotalQuery, FindItemsTotalQueryVariables>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Datasets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <span className="text-2xl font-bold">{itemsTotal} </span>datasets from
          TU/e
        </div>
      </CardContent>
    </Card>
  )
}
