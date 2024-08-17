import type { Meta, StoryObj } from '@storybook/react'
import { Features } from '@/components/sections/home-page/features'
import { FEATURES_CONTENT } from '@/content/home-page/features'

const meta = {
  title: 'Stack Builder Website/Features Section',
  component: Features,
  tags: ['autodocs'],
  parameters: {
    // design: {
    //   type: 'figma',
    //   url: '',
    //   allowFullscreen: true,
    // },
  },
  argTypes: {
    features: { description: 'Features content', control: { type: 'object' } },
    // title: {
    //   description: 'Short title for the feature',
    //   control: { type: 'text' },
    // },
    // description: {
    //   description: 'Short feature description',
    //   control: { type: 'text' },
    // },
    // icon: {
    //   description: 'The React icon component name from Lucide you\'d like to use',
    //   control: { type: 'text' },
    // },
  },

} satisfies Meta<typeof Features>

export default meta
type Story = StoryObj<typeof meta>

export const FeaturesSection: Story = {
  args: {
    features: {
      ...FEATURES_CONTENT,
    },
  },
}
