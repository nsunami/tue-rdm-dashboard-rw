import { db } from 'src/lib/db'

export function Items() {
  return db.item.findMany({
    include: { license: true },
    orderBy: { published_date: 'desc' },
  })
}

type TimeFrameType = 'week' | 'month' | 'year'

export function itemsOverTime({
  timeFrame = 'week',
}: {
  timeFrame: TimeFrameType
}) {
  const result = db.$queryRaw`
  SELECT
    DATE_TRUNC(${timeFrame}, published_date) AS date,
    COUNT(*) as count
  FROM "Item"
  GROUP BY date ORDER BY date
  `

  return result
}

export function itemsTotal() {
  return db.item.count()
}
