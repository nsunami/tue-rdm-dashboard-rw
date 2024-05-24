import { render } from '@redwoodjs/testing/web'

import Item from './Item'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Item', () => {
  const DEFAULT_ITEM = {
    title: 'test title',
    description: 'test description',
    url_public_html:
      'https://data.4tu.nl/datasets/ae8223fa-4960-47e8-8bbb-f3a3176bec20/3',
    license: {
      name: 'license name',
    },
  }
  it('renders successfully', () => {
    expect(() => {
      render(<Item item={DEFAULT_ITEM} />)
    }).not.toThrow()
  })
})
