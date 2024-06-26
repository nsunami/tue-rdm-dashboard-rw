import { BarList } from '@tremor/react'
import type {
  AuthorCountsQuery,
  AuthorCountsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  AuthorCountsQuery,
  AuthorCountsQueryVariables
> = gql`
  query AuthorCountsQuery($from: DateTime, $to: DateTime, $top_n: Int) {
    authorCounts(from: $from, to: $to, top_n: $top_n) {
      author_id
      orcid
      full_name
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  authorCounts,
}: CellSuccessProps<AuthorCountsQuery, AuthorCountsQueryVariables>) => {
  return (
    <BarList
      color={'secondary'}
      data={authorCounts.map((author) => ({
        name: `${author.full_name}`,
        href: author.orcid
          ? `https://orcid.org/${author.orcid}`
          : `https://research.tue.nl/en/searchAll/index/?search=${author.full_name}`,
        value: author.count,
      }))}
    />
  )
}
