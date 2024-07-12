import type { Meta, StoryObj } from '@storybook/react'
import { HomePageButton } from '@/components/ui/home-button'
import { buttons } from '@/content/web/buttons'

const meta = {
  title: 'Zenith Design System/Home Page Buttons',
  component: HomePageButton,
  tags: ['autodocs'],
  args: {
  },
  argTypes: {
    href: { control: { type: 'text' } },
    imgSrc: { control: { type: 'text' } },
    imgAlt: { control: { type: 'text' } },
    text: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
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
