import { Dispatch } from 'react'

import { DateRangePicker, DateRangePickerItem } from '@tremor/react'
import { endOfYear, startOfYear, subYears } from 'date-fns'
import type {
  FindItemsDateRangePickerQuery,
  FindItemsDateRangePickerQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

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

  const rangeOptions = [
    { name: 'All', from: minDate, to: maxDate },
    { name: 'Year to date', from: startOfYear(new Date()), to: new Date() },
    {
      name: 'Last year',
      from: startOfYear(subYears(new Date(), 1)),
      to: endOfYear(subYears(new Date(), 1)),
    },
    {
      name: 'Last 2 years',
      from: subYears(new Date(), 2),
      to: new Date(),
    },
    {
      name: 'Last 5 years',
      from: subYears(new Date(), 5),
      to: new Date(),
    },
    {
      name: '5 years or older',
      from: minDate,
      to: subYears(new Date(), 5),
    },
  ]

  return (
    <DateRangePicker
      defaultValue={{
        from: minDate,
        to: maxDate,
      }}
      onValueChange={(e) => {
        setDateRange({ from: e.from, to: e.to })
      }}
    >
      {rangeOptions.map((option) => (
        <DateRangePickerItem
          key={option.name}
          value={option.name.toString()}
          to={option.to}
          from={option.from}
        >
          {option.name}
        </DateRangePickerItem>
      ))}
    </DateRangePicker>
  )
}
