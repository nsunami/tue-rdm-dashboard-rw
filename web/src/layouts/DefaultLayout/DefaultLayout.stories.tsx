import type { Meta, StoryObj } from '@storybook/react'

import DefaultLayout from './DefaultLayout'

const meta: Meta<typeof DefaultLayout> = {
  component: DefaultLayout,
}

export default meta

type Story = StoryObj<typeof DefaultLayout>

export const Primary: Story = {}
