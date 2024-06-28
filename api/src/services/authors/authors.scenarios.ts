import type { Prisma, Author } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AuthorCreateArgs>({
  author: {
    one: { data: { uuid: 'String1201630' } },
    two: { data: { uuid: 'String9505772' } },
  },
})

export type StandardScenario = ScenarioData<Author, 'author'>
