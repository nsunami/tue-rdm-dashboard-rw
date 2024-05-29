import type {
  QueryResolvers,
  MutationResolvers,
  LicenseRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const licenses: QueryResolvers['licenses'] = () => {
  return db.license.findMany()
}

export const license: QueryResolvers['license'] = ({ id }) => {
  return db.license.findUnique({
    where: { id },
  })
}

export const licenseCounts = () => {
  return db.license
    .groupBy({
      by: ['value', 'name'],
      _count: { name: true },
      orderBy: {
        _count: {
          name: 'desc',
        },
      },
    })
    .then((data) => {
      const totalItems = data.reduce(
        (accumulator, current) => accumulator + current._count.name,
        0
      )

      return data.map((e) => {
        return {
          name: e.name,
          count: e._count.name,
          prop: e._count.name / totalItems,
          value: e.value,
        }
      })
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
