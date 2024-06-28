import { render } from '@redwoodjs/testing/web'

import AuthorLeaderboardCard from './AuthorLeaderboardCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthorLeaderboardCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthorLeaderboardCard />)
    }).not.toThrow()
  })
})
