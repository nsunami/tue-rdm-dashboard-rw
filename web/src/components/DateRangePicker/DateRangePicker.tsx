import { ChangeEvent, useEffect, useState } from 'react'

import { endOfYear, format, startOfYear, subYears } from 'date-fns'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select'

import { Input } from '../ui/input'

type DateRangePickerProps = {
  minDate: Date
  maxDate: Date
  onChange: (date: DateRange) => void
}

type DateRange = {
  from: Date | undefined | ''
  to?: Date | undefined | ''
}

const DateRangePicker = ({
  minDate,
  maxDate,
  onChange,
}: DateRangePickerProps) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: minDate,
    to: maxDate,
  })

  useEffect(() => {
    onChange(date)
  }, [onChange, date])

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

  function renderDateValue({
    date,
    fallbackDate,
  }: {
    date: Date | ''
    fallbackDate: Date
  }) {
    return date == ''
      ? format(fallbackDate, 'yyyy-MM-dd')
      : format(date, 'yyy-MM-dd')
  }

  function handleDateChange(
    e: ChangeEvent<HTMLInputElement>,
    {
      type,
      minDate,
      maxDate,
    }: { type: 'from' | 'to'; minDate?: Date; maxDate?: Date }
  ) {
    const fallbackDate = type === 'from' ? minDate : maxDate
    const newDate =
      e.target.value == '' ? fallbackDate : new Date(e.target.value)

    if (type === 'from') {
      setDate((d) => ({ ...d, from: newDate }))
    }
    if (type === 'to') {
      setDate((d) => ({ ...d, to: newDate }))
    }
  }

  return (
    <div className="flex">
      <div className="flex w-auto flex-row">
        <Input
          type="date"
          required={true}
          value={renderDateValue({ date: date.from, fallbackDate: minDate })}
          onChange={(e) => handleDateChange(e, { type: 'from', minDate })}
        />
        <Input
          type="date"
          value={renderDateValue({ date: date.to, fallbackDate: maxDate })}
          onChange={(e) => handleDateChange(e, { type: 'to', maxDate })}
        ></Input>
      </div>
      <Select
        onValueChange={(value) => {
          const selectedOption = rangeOptions.find((d) => d.name === value)
          setDate({ from: selectedOption.from, to: selectedOption.to })
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="popper">
          {rangeOptions.map((option) => (
            <SelectItem value={option.name} key={option.name}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DateRangePicker
