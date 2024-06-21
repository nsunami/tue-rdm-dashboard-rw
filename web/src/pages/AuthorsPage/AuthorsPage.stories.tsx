import type { Meta, StoryObj } from '@storybook/react'

import AuthorsPage from './AuthorsPage'

const meta: Meta<typeof AuthorsPage> = {
  component: AuthorsPage,
}

export default meta

type Story = StoryObj<typeof AuthorsPage>

export const Primary: Story = {}
