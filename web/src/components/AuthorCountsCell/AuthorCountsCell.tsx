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

export const Loading = () => (
  <div className="mt-4 flex max-w-md animate-pulse flex-col justify-center gap-8 *:h-8 *:rounded-md *:bg-slate-200">
    <div className={`w-5/6`}></div>
    <div className={`w-4/6`}></div>
    <div className={`w-3/6`}></div>
    <div className={`w-2/6`}></div>
    <div className={`w-1/6`}></div>
  </div>
)

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
