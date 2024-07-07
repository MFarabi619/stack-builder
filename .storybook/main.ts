import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    // '../src/components/**/*.mdx',
    '../src/components/storybook-starters/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  // Did not use @storybook/addon-essentials due to lack of toolbar ordering API
  addons: [
    // --------------- Toolbar Icons ---------------
    // Ruler
    // '@storybook/addon-measure',
    // Phone
    // '@storybook/addon-viewport',
    // Dotted Outline
    // '@storybook/addon-outline',
    // Sun/Moon icon. Toggle Manager, Preview Components, and Preview Background
    // 'storybook-dark-mode',
    // Pen. Toggle both Preview Components and Preview Background
    // '@storybook/addon-themes',
    // Portrait. Toggle only Preview Background. Not affected by other two, use to 'lock' the background.
    // '@storybook/addon-backgrounds',
    // Person inside circle icon. Also 'Accessibility' tab to action bar
    '@storybook/addon-a11y',

    // --------------- Action Bar ---------------
    // '@storybook/addon-designs',
    // '@storybook/addon-interactions',
    // '@storybook/addon-actions',

    // '@chromatic-com/storybook',
    // '@storybook/addon-storysource',
    // '@storybook/addon-links',

    // --------------- No-icons ---------------
    // Onboarding flow
    // '@storybook/addon-onboarding',
    // Custom toolbars
    // '@storybook/addon-toolbars',
    // Auto-generate MDX/React/JSX documentation for components
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
}
export default config
