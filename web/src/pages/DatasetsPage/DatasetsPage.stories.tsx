import type { Meta, StoryObj } from '@storybook/react'

import DatasetsPage from './DatasetsPage'

const meta: Meta<typeof DatasetsPage> = {
  component: DatasetsPage,
}

export default meta

type Story = StoryObj<typeof DatasetsPage>

export const Primary: Story = {}
