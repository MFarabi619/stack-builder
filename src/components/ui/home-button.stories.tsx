import type { Meta, StoryObj } from '@storybook/react'
import { HomePageButton } from '@/components/ui/home-button'
import { buttons } from '@/content/web/buttons'

const meta = {
  title: 'Zenith Design System/Home Page Buttons',
  component: HomePageButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: { description: 'Link to route within the app', control: { type: 'text' } },
    imgSrc: { description: 'Source URL of the image', control: { type: 'text' } },
    imgAlt: { description: 'Alt text for the image', control: { type: 'text' } },
    text: { description: 'Text to display on the button', control: { type: 'text' } },
    className: { description: 'Additional CSS classes to apply', control: { type: 'text' } },
  },
} satisfies Meta<typeof HomePageButton>

export default meta
type Story = StoryObj<typeof meta>

export const StackBuilder: Story = {
  args: {
    ...buttons[0],
  },
}

export const Storybook: Story = {
  args: {
    ...buttons[1],
  },
}

export const EslintConfigInspector: Story = {
  args: {
    ...buttons[2],
  },
}

export const Github: Story = {
  args: {
    ...buttons[3],
  },
}

export const Fumadocs: Story = {
  args: {
    ...buttons[4],
  },
}
