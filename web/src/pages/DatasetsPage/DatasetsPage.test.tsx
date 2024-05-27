import { render } from '@redwoodjs/testing/web'

import DatasetsPage from './DatasetsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DatasetsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DatasetsPage />)
    }).not.toThrow()
  })
})
