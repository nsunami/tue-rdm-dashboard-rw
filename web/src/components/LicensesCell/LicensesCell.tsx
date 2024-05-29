import { useState } from 'react'

import { BarList } from '@tremor/react'
import type { LicensesQuery, LicensesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const QUERY: TypedDocumentNode<
  LicensesQuery,
  LicensesQueryVariables
> = gql`
  query licensesCounts {
    licenseCounts {
      name
      count
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  licenseCounts,
  showPercent: defaultShowPercent = false,
}: CellSuccessProps<LicensesQuery>) => {
  const [showPercent, setShowPercent] = useState(defaultShowPercent)
  const itemsTotal = licenseCounts.reduce(
    (accumulator, current) => accumulator + current.count,
    0
  )

  return (
    <>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Licenses</CardTitle>
        </CardHeader>
        <CardContent>
          <BarList
            onClick={() => setShowPercent((c) => !c)}
            color={'secondary'}
            data={licenseCounts.map((e) => {
              if (showPercent)
                return {
                  ...e,
                  value: ((e.count / itemsTotal) * 100).toFixed(1),
                }
              return { ...e, value: e.count }
            })}
            valueFormatter={(v) => {
              if (showPercent) return `${v}%`
              return v
            }}
          />
        </CardContent>
      </Card>
    </>
  )
}
