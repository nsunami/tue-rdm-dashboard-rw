import type { QueryResolvers, AuthorRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

import { itemsDateRange } from '../items.sdl'

export const authors: QueryResolvers['authors'] = () => {
  return db.author.findMany()
}

export const author: QueryResolvers['author'] = ({ id }) => {
  return db.author.findUnique({
    where: { id },
  })
}
type AuthorsOverTimeProps = {
  from: Date
  to: Date
  top_n: number
}
export const authorCounts = async ({
  from,
  to,
  top_n = 10,
}: AuthorsOverTimeProps) => {
  if (from == null && to == null) {
    const dateRange = await itemsDateRange()
    from = dateRange.min
    to = dateRange.max
  }

  const authorCounts = await db.author.findMany({
    where: {
      items: {
        some: {
          published_date: {
            gte: from,
            lte: to,
          },
        },
      },
    },
    include: {
      _count: {
        select: { items: true },
      },
      items: {
        where: {
          published_date: {
            gte: from,
            lte: to,
          },
        },
        select: { id: true },
      },
    },
  })

  return authorCounts
    .sort((a, b) => b._count.items - a._count.items)
    .slice(0, top_n)
    .map((e) => {
      return {
        author_id: e.id,
        orcid: e.orcid_id,
        full_name: e.full_name,
        count: e.items.length,
      }
    })
}

export const Author: AuthorRelationResolvers = {
  items: (_obj, { root }) => {
    return db.author.findUnique({ where: { id: root?.id } }).items()
  },
}
