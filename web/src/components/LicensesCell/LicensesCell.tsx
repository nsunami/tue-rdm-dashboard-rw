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
      prop
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
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Licenses</CardTitle>
        </CardHeader>
        <CardContent>
          <BarList
            color={'secondary'}
            data={licenseCounts.map((e) => {
              return {
                ...e,
                value: `${e.count} (${(e.prop * 100).toFixed(2)}%)`,
              }
            })}
          />
        </CardContent>
      </Card>
    </>
  )
}
