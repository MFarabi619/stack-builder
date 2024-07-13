import type { Meta, StoryObj } from '@storybook/react'
import Page from '@/app/(home)/page'

const meta = {
  title: 'Stack Builder Website',
  component: Page,
  tags: ['autodocs'],
  argTypes: {},

} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const HomePage: Story = {
  args: {},
}
