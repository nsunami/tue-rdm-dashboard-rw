import { useState } from 'react'

import AuthorCountsCell from '../AuthorCountsCell'
import ItemsDateRangePickerCell from '../ItemsDateRangePickerCell'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const AuthorLeaderboardCard = () => {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: new Date(),
    to: new Date(),
  })
  const DEFAULT_TOP_N_AUTHORS = 10
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <CardTitle>Top 10 Authors</CardTitle>
          <ItemsDateRangePickerCell
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </div>
      </CardHeader>
      <CardContent>
        <AuthorCountsCell
          from={dateRange.from.toISOString()}
          to={dateRange.to.toISOString()}
          top_n={DEFAULT_TOP_N_AUTHORS}
        />
      </CardContent>
    </Card>
  )
}

export default AuthorLeaderboardCard
