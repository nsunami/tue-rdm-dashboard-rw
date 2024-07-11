import { db } from 'src/lib/db'

export function Items() {
  return db.item.findMany({
    include: { license: true, authors: true },
    orderBy: { published_date: 'desc' },
  })
}

type TimeFrameType = 'week' | 'month' | 'year'

export function itemsOverTime({
  timeFrame = 'week',
  groupBy = 'license',
}: {
  timeFrame: TimeFrameType
  groupBy: 'license' | 'none'
}) {
  if (groupBy == 'none') {
    return db.$queryRaw`
  SELECT
    DATE_TRUNC(${timeFrame}, published_date) AS date,
    COUNT(*) as count
  FROM "Item"
  GROUP BY date ORDER BY date
  `
  } else if (groupBy == 'license') {
    return db.$queryRaw`
  SELECT
    DATE_TRUNC(${timeFrame}, published_date) AS date,
    "licenseId",
    COUNT(*) AS count,
    "License".name as "licenseName"
  FROM "Item"
  LEFT JOIN "License" ON "Item"."licenseId" = "License".id
  GROUP BY date, "licenseId", "License".name ORDER BY date
    `
  }
}

export function itemsTotal() {
  return db.item.count()
}

export function itemsDateRange() {
  return db.item
    .aggregate({
      _min: { published_date: true },
      _max: { published_date: true },
    })
    .then((data) => ({
      min: data._min.published_date,
      max: data._max.published_date,
    }))
}
