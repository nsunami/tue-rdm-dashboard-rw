import { render } from '@redwoodjs/testing/web'

import AuthorsPage from './AuthorsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AuthorsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthorsPage />)
    }).not.toThrow()
  })
})
