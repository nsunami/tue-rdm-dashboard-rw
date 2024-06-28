import { authors, author } from './authors'
import type { StandardScenario } from './authors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('authors', () => {
  scenario('returns all authors', async (scenario: StandardScenario) => {
    const result = await authors()

    expect(result.length).toEqual(Object.keys(scenario.author).length)
  })

  scenario('returns a single author', async (scenario: StandardScenario) => {
    const result = await author({ id: scenario.author.one.id })

    expect(result).toEqual(scenario.author.one)
  })
})
