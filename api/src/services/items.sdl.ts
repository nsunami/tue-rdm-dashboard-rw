import { db } from 'src/lib/db'

export function Items() {
  return db.item.findMany({ include: { license: true } })
}
