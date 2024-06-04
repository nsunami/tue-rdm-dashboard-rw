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

export const Loading = () => (
  <Card className="animate-pulse">
    <CardHeader>
      <div className="h-8 w-2/3 rounded-md bg-slate-200"></div>
    </CardHeader>
    <CardContent className="flex flex-col items-center">
      <div className="h-8 w-1/2 bg-slate-200"></div>
    </CardContent>
  </Card>
)

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
