import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type {
  FindItemsOverTimeQuery,
  FindItemsOverTimeQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { LICENSES_PALLETTE } from 'src/lib/constants'
import { formatToYYYY } from 'src/lib/formatToYyyy'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const QUERY: TypedDocumentNode<
  FindItemsOverTimeQuery,
  FindItemsOverTimeQueryVariables
> = gql`
  query FindItemsOverTimeQuery($timeFrame: String!, $groupBy: String!) {
    itemsOverTime: itemsOverTime(timeFrame: $timeFrame, groupBy: $groupBy) {
      date
      count
      licenseId
      licenseName
    }
  }
`

export const Loading = () => (
  <Card className="animate-pulse">
    <CardHeader>
      <div className="h-8 w-2/3 rounded-md bg-slate-200"></div>
    </CardHeader>
    <CardContent className="flex max-w-md flex-row items-end justify-center gap-8 *:w-8 *:rounded-md *:bg-slate-200">
      <div className="h-52"></div>
      <div className="h-64"></div>
      <div className="h-72"></div>
      <div className="h-96"></div>
    </CardContent>
  </Card>
)

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
  const dates = [...new Set(itemsOverTime.map((i) => i.date))]
  const formattedData = itemsOverTime.reduce((accumulator, currentValue) => {
    const matchedDate = dates.find((d) => d === currentValue.date)
    return [
      ...accumulator,
      {
        date: matchedDate,
        [currentValue.licenseName]: currentValue.count,
      },
    ]
  }, [])
  const datesWithLicenses = dates.map((date) => {
    const matchedEntries = formattedData.filter((d) => d.date === date)
    const merged = matchedEntries.reduce((acc, entry) => {
      const { date, ...licenses } = entry
      acc.date = formatToYYYY(date)
      Object.assign(acc, licenses)
      return acc
    }, {})
    return merged
  }, {})

  const licenses = [...new Set(itemsOverTime.map((e) => e.licenseName))]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Datasets Over Time</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <BarChart width={400} height={500} data={datesWithLicenses}>
          <Tooltip />
          <CartesianGrid vertical={false} strokeDasharray={5} />
          <YAxis />
          <XAxis dataKey={'date'} />
          {licenses.map((license) => (
            <Bar
              key={license}
              dataKey={license}
              stackId={'a'}
              fill={LICENSES_PALLETTE[license]}
            />
          ))}
          <Legend />
        </BarChart>
      </CardContent>
    </Card>
  )
}
