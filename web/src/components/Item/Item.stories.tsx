// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Item from './Item'

const meta: Meta<typeof Item> = {
  component: Item,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Item>

export const Primary: Story = {}
