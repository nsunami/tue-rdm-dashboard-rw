import { useState } from 'react'

import ItemsDateRangePickerCell from '../ItemsDateRangePickerCell'
import LicensesCell from '../LicensesCell'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const LicensesBarListCard = () => {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: null,
    to: null,
  })
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <CardTitle>Licenses</CardTitle>
          <ItemsDateRangePickerCell
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>
      </CardHeader>
      <CardContent>
        <LicensesCell to={dateRange.to} from={dateRange.from} />
      </CardContent>
    </Card>
  )
}

export default LicensesBarListCard
