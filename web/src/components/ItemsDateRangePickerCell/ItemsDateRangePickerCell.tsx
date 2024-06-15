import { Dispatch } from 'react'

import type {
  FindItemsDateRangePickerQuery,
  FindItemsDateRangePickerQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import DateRangePicker from '../DateRangePicker/DateRangePicker'

export const QUERY: TypedDocumentNode<
  FindItemsDateRangePickerQuery,
  FindItemsDateRangePickerQueryVariables
> = gql`
  query FindItemsDateRangePickerQuery {
    itemsDateRange {
      min
      max
    }
  }
`

export const Loading = () => (
  <div className="flex animate-pulse gap-2 *:h-8 *:rounded-md *:bg-slate-200">
    <div className="w-3/4"></div>
    <div className="w-1/4"></div>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindItemsDateRangePickerQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

type DateRange = {
  from: Date
  to: Date
}

type SuccessProps = {
  dateRange: DateRange
  setDateRange: Dispatch<DateRange>
}

export const Success = ({
  itemsDateRange,
  setDateRange,
}: CellSuccessProps<
  FindItemsDateRangePickerQuery,
  FindItemsDateRangePickerQueryVariables
> &
  SuccessProps) => {
  const minDate = new Date(itemsDateRange.min)
  const maxDate = new Date(itemsDateRange.max)

  return (
    <DateRangePicker
      minDate={minDate}
      maxDate={maxDate}
      onChange={setDateRange}
    ></DateRangePicker>
  )
}
