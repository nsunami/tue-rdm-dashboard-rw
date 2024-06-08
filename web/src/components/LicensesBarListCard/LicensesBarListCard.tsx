import { useState } from 'react'

import { Divider } from '@tremor/react'
import { DateRange } from 'react-day-picker'

import ItemsDateRangePickerCell from '../ItemsDateRangePickerCell'
import LicensesCell from '../LicensesCell'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const LicensesBarListCard = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: null,
    to: null,
  })
  console.log(dateRange)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Licenses</CardTitle>
      </CardHeader>
      <CardContent>
        <ItemsDateRangePickerCell
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
        <Divider />
        <LicensesCell to={dateRange.to} from={dateRange.from} />
      </CardContent>
    </Card>
  )
}

export default LicensesBarListCard
