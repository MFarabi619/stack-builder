import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from '@/components/sections/home-page/hero'

const meta = {
  title: 'Stack Builder Website/Hero Section',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=26-2341&t=1CoJdZrd9retW6WV-11',
      allowFullscreen: true,
    },
  },
  argTypes: {},

} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const HeroSection: Story = {
  args: {},
}
