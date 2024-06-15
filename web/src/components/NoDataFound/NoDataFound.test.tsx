import { render } from '@redwoodjs/testing/web'

import NoDataFound from './NoDataFound'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NoDataFound', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NoDataFound />)
    }).not.toThrow()
  })
})
