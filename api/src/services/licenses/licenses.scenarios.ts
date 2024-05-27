import type { Prisma, License } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LicenseCreateArgs>({
  license: {
    one: { data: { value: 1815528, name: 'String', url: 'String' } },
    two: { data: { value: 1742804, name: 'String', url: 'String' } },
  },
})

export type StandardScenario = ScenarioData<License, 'license'>
