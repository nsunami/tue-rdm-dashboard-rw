import { BarList } from '@tremor/react'
import type { licensesCounts, licensesCountsVariables } from 'types/graphql'

import { routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import NoDataFound from '../NoDataFound/NoDataFound'
import { CardContent } from '../ui/card'

export const QUERY: TypedDocumentNode<
  licensesCounts,
  licensesCountsVariables
> = gql`
  query ($from: DateTime, $to: DateTime) {
    licenses: licenseCounts(from: $from, to: $to) {
      name
      count
      prop
      value
    }
  }
`

export const Loading = () => (
  <CardContent className="mt-4 flex max-w-md animate-pulse flex-col justify-center gap-8 *:h-8 *:rounded-md *:bg-slate-200">
    <div className="w-full"></div>
    <div className="w-3/4"></div>
    <div className="w-1/2"></div>
    <div className="w-1/4"></div>
  </CardContent>
)

export const Empty = () => <NoDataFound />

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  licenses,
}: CellSuccessProps<licensesCounts, licensesCountsVariables>) => {
  const itemsTotal = licenses.reduce(
    (accumulator, currentLicense) => accumulator + currentLicense.count,
    0
  )

  return (
    <>
      <BarList
        color={'secondary'}
        data={licenses.map((e) => {
          return {
            value: e.count,
            name: e.name,
            href: routes.datasets({ license: e.name }),
            target: '_self',
          }
        })}
        valueFormatter={(v) => {
          return `${v} (${((v / itemsTotal) * 100).toFixed(1)}%)`
        }}
      />
    </>
  )
}
