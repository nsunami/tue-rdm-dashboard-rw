import { BarList, Card } from '@tremor/react'
import type { LicensesQuery, LicensesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

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

export const Success = ({ licenseCounts }: CellSuccessProps<LicensesQuery>) => {
  return (
    <>
      <Card>
        <BarList
          color={'slate-300'}
          data={licenseCounts.map((e) => ({ ...e, value: e.count }))}
        />
      </Card>
    </>
  )
}
