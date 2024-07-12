import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../src/components/**/*.mdx',
    '../src/components/storybook-starters/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['./'],
  docs: {},
  // Did not use @storybook/addon-essentials due to lack of toolbar ordering API
  addons: [
    // --------------- Toolbar Icons ---------------
    // Ruler
    '@storybook/addon-measure',
    // Phone
    '@storybook/addon-viewport',
    // Dotted Outline
    '@storybook/addon-outline',
    // Sun/Moon icon. Toggle Manager, Preview Components, and Preview Background
    'storybook-dark-mode',
    // Pen. Toggle both Preview Components and Preview Background
    '@storybook/addon-themes',
    // Portrait. Toggle only Preview Background. Not affected by other two, use to 'lock' the background.
    '@storybook/addon-backgrounds',
    // Person inside circle icon. Also 'Accessibility' tab to action bar
    '@storybook/addon-a11y',

    // --------------- Action Bar ---------------
    '@storybook/addon-controls',
    // Accessibility tab added by '@storybook/addon-a11y'
    {
      name: '@storybook/addon-designs', // Actually has amazing docs for once: https://storybookjs.github.io/addon-designs/?path=/docs/docs-quick-start--docs
      options: {
        // renderTarget: 'canvas' | 'tab'
      },
    },
    // https://storybook.js.org/docs/essentials/actions
    '@storybook/addon-actions',
    // https://storybook.js.org/docs/essentials/interactions
    '@storybook/addon-interactions', // Must be listed after @storybook/addon-actions or @storybook/addon-essentials

    // '@chromatic-com/storybook',
    // Code for component story
    '@storybook/addon-storysource',
    '@storybook/addon-links',

    // --------------- No-icons ---------------
    // Onboarding flow
    // '@storybook/addon-onboarding',
    // Custom toolbars
    // '@storybook/addon-toolbars',
    // Auto-generate MDX/React/JSX documentation for components
    // https://github.com/storybookjs/storybook/tree/next/code/addons/docs
    {
      name: '@storybook/addon-docs',
      options: {
        // csfPluginOptions: null,
        // mdxPluginOptions: {
        //   mdxCompileOptions: {
        //     remarkPlugins: [],
        //   },
        // },
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
  ],
}
export default config
