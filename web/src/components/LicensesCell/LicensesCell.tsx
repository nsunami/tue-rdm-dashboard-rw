import { BarList } from '@tremor/react'
import type { LicensesQuery, LicensesQueryVariables } from 'types/graphql'

import { routes } from '@redwoodjs/router'
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
      prop
      value
    }
  }
`

export const Loading = () => (
  <Card className="animate-pulse">
    <CardHeader>
      <div className="h-8 w-full rounded-md bg-slate-200"></div>
    </CardHeader>
    <CardContent className="mt-4 flex max-w-md flex-col justify-center gap-8 *:h-8 *:rounded-md *:bg-slate-200">
      <div className="w-full"></div>
      <div className="w-3/4"></div>
      <div className="w-1/2"></div>
      <div className="w-1/4"></div>
    </CardContent>
  </Card>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ licenseCounts }: CellSuccessProps<LicensesQuery>) => {
  const itemsTotal = licenseCounts.reduce(
    (accumulator, currentLicense) => accumulator + currentLicense.count,
    0
  )
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Licenses</CardTitle>
        </CardHeader>
        <CardContent>
          <BarList
            color={'secondary'}
            data={licenseCounts.map((e) => {
              return {
                ...e,
                value: e.count,
                href: routes.datasets({ license: e.name }),
                target: '_self',
              }
            })}
            valueFormatter={(v) => {
              return `${v} (${((v / itemsTotal) * 100).toFixed(1)}%)`
            }}
          />
        </CardContent>
      </Card>
    </>
  )
}
