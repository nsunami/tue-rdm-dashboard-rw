import { AreaChart } from '@tremor/react'
import type {
  FindItemsOverTimeQuery,
  FindItemsOverTimeQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const QUERY: TypedDocumentNode<
  FindItemsOverTimeQuery,
  FindItemsOverTimeQueryVariables
> = gql`
  query FindItemsOverTimeQuery($timeFrame: String!) {
    itemsOverTime: itemsOverTime(timeFrame: $timeFrame) {
      date
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindItemsOverTimeQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  itemsOverTime,
}: CellSuccessProps<
  FindItemsOverTimeQuery,
  FindItemsOverTimeQueryVariables
>) => {
  const formatted = itemsOverTime.map((entry) => {
    return {
      ...entry,
      formattedDate: dateFormatter(entry.date),
    }
  })

  function dateFormatter(date: string) {
    return Intl.DateTimeFormat('en-US', { year: 'numeric' })
      .format(new Date(date))
      .toString()
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Datasets Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <AreaChart
          yAxisWidth={60}
          data={formatted}
          categories={['count']}
          index="formattedDate"
        />
      </CardContent>
    </Card>
  )
}
