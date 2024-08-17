import type { Meta, StoryObj } from '@storybook/react'
import { HomePageButton } from '@/components/ui/home-button'
import { hero_section_buttons_content } from '@/content/home-page/hero-section-buttons-content'

const meta = {
  title: 'Zenith Design System/Home Page Buttons',
  component: HomePageButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      allowFullscreen: true,
    },
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
    ...hero_section_buttons_content[0],
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=67-2411&t=helPlLiU9UcstWzx-11',
    },
  },
}

export const Figma: Story = {
  args: {
    ...hero_section_buttons_content[1],
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=135-93&t=helPlLiU9UcstWzx-11',
    },
  },
}

export const Storybook: Story = {
  args: {
    ...hero_section_buttons_content[2],
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=67-2413&t=1CoJdZrd9retW6WV-11',
    },
  },
}

export const EslintConfigInspector: Story = {
  args: {
    ...hero_section_buttons_content[3],
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=67-2414&t=1CoJdZrd9retW6WV-11',
    },
  },
}

export const Github: Story = {
  args: {
    ...hero_section_buttons_content[4],
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=67-2416&t=1CoJdZrd9retW6WV-11',
    },
  },
}

export const Fumadocs: Story = {
  args: {
    ...hero_section_buttons_content[5],
  },
  parameters: {
    design: {
      url: 'https://www.figma.com/design/XILd6bWRSYGnvpHzPWqqkE/Zenith-Design-System?node-id=67-2415&t=1CoJdZrd9retW6WV-11',
    },
  },
}
