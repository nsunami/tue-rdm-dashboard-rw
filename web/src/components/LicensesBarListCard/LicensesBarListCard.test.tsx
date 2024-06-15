import { render } from '@redwoodjs/testing/web'

import LicensesBarListCard from './LicensesBarListCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LicensesBarListCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LicensesBarListCard />)
    }).not.toThrow()
  })
})
