import type { Meta, StoryObj } from '@storybook/react'
import Page from '@/app/(home)/page'

const meta = {
  title: 'Stack Builder Website',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=26-2341&t=1CoJdZrd9retW6WV-11',
      allowFullscreen: true,
    },
  },
  argTypes: {},

} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const HomePage: Story = {
  args: {},
}
