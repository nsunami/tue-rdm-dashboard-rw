import type { License } from '@prisma/client'

import {
  licenses,
  license,
  createLicense,
  updateLicense,
  deleteLicense,
} from './licenses'
import type { StandardScenario } from './licenses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('licenses', () => {
  scenario('returns all licenses', async (scenario: StandardScenario) => {
    const result = await licenses()

    expect(result.length).toEqual(Object.keys(scenario.license).length)
  })

  scenario('returns a single license', async (scenario: StandardScenario) => {
    const result = await license({ id: scenario.license.one.id })

    expect(result).toEqual(scenario.license.one)
  })

  scenario('creates a license', async () => {
    const result = await createLicense({
      input: { value: 7933740, name: 'String', url: 'String' },
    })

    expect(result.value).toEqual(7933740)
    expect(result.name).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a license', async (scenario: StandardScenario) => {
    const original = (await license({ id: scenario.license.one.id })) as License
    const result = await updateLicense({
      id: original.id,
      input: { value: 8348870 },
    })

    expect(result.value).toEqual(8348870)
  })

  scenario('deletes a license', async (scenario: StandardScenario) => {
    const original = (await deleteLicense({
      id: scenario.license.one.id,
    })) as License
    const result = await license({ id: original.id })

    expect(result).toEqual(null)
  })
})
