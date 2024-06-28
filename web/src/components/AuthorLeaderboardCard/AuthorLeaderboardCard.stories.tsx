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

import AuthorLeaderboardCard from './AuthorLeaderboardCard'

const meta: Meta<typeof AuthorLeaderboardCard> = {
  component: AuthorLeaderboardCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AuthorLeaderboardCard>

export const Primary: Story = {}
