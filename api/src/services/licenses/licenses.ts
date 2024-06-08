import type {
  QueryResolvers,
  MutationResolvers,
  LicenseRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { itemsDateRange } from '../items.sdl'

export const licenses: QueryResolvers['licenses'] = () => {
  return db.license.findMany()
}

export const license: QueryResolvers['license'] = ({ id }) => {
  return db.license.findUnique({
    where: { id },
  })
}

type LicenseCountsProps = {
  from: Date
  to: Date
}

export const licenseCounts = async ({ from, to }: LicenseCountsProps) => {
  if (from == null && to == null) {
    const dateRange = await itemsDateRange()
    from = dateRange.min
    to = dateRange.max
  }

  const licenseCounts = await db.license.findMany({
    where: { items: { some: { published_date: { gte: from, lte: to } } } },
    include: {
      _count: {
        select: { items: true },
      },
      items: {
        where: { published_date: { gte: from, lte: to } },
        select: { id: true },
      },
    },
  })

  const itemsTotal = licenseCounts.reduce(
    (accumulator, current) => accumulator + current._count.items,
    0
  )

  return licenseCounts.map((e) => {
    return {
      name: e.name,
      count: e.items.length,
      prop: e.items.length / itemsTotal,
      value: e.value,
    }
  })
}

export const createLicense: MutationResolvers['createLicense'] = ({
  input,
}) => {
  return db.license.create({
    data: input,
  })
}

export const updateLicense: MutationResolvers['updateLicense'] = ({
  id,
  input,
}) => {
  return db.license.update({
    data: input,
    where: { id },
  })
}

export const deleteLicense: MutationResolvers['deleteLicense'] = ({ id }) => {
  return db.license.delete({
    where: { id },
  })
}

export const License: LicenseRelationResolvers = {
  items: (_obj, { root }) => {
    return db.license.findUnique({ where: { id: root?.id } }).items()
  },
}
