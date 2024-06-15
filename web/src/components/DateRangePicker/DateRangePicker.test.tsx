import { render } from '@redwoodjs/testing/web'

import DateRangePicker from './DateRangePicker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DateRangePicker', () => {
  it('renders successfully', () => {
    const minDate = new Date('2010-01-01')
    const maxDate = new Date('2022-01-01')

    expect(() => {
      render(
        <DateRangePicker
          minDate={minDate}
          maxDate={maxDate}
          onChange={() => {}}
        />
      )
    }).not.toThrow()
  })
})
