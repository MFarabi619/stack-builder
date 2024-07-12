import type { Preview } from '@storybook/react'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ThemeProvider } from 'next-themes'
import type { ThemeVars } from '@storybook/theming'
import { themes } from '@storybook/theming'
import { withThemeByClassName } from '@storybook/addon-themes'// Wide button with a pen and text. Toggles both Preview Components and Preview Background

import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'
import React from 'react'
import { DocsContainer, type DocsContextProps } from '@storybook/blocks'

import { commonTheme, darkUIStorybook, lightUIStorybook } from './themes-storybook-ui'

import './globals.css'

const customViewports = {
  '720p': {
    name: '720p',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  '1080p': {
    name: '1080p',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  '2k': {
    name: '2K',
    styles: {
      width: '2560px',
      height: '1440px',
    },
  },
  '4k': {
    name: '4K',
    styles: {
      width: '3840px',
      height: '2160px',
    },
  },
  '21/9': {
    name: '21/9',
    styles: {
      width: '2560px',
      height: '1080px',
    },
  },
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
    // globalTypes: {
    //   theme: {
    //     description: 'Global theme for components',
    //     defaultValue: 'light',
    //     toolbar: { // Requires @storybook/addon-toolbars, included in @storybook/addon-essentials. Imported separately in main.ts.
    //       // The label to show for this toolbar item
    //       title: 'Theme',
    //       icon: 'medium',
    //       // Array of plain string values or MenuItem shape (see below)
    //       items: ['light', 'dark'],
    //       // Change title based on selected value
    //       dynamicTitle: true,
    //     },
    //   },
    // },
    // https://storybook.js.org/addons/storybook-dark-mode
    darkMode: {
      classTarget: 'html',
      stylePreview: true,
      darkClass: 'dark',
      lightClass: 'light',
      // Set the initial theme
      current: 'dark',
      // Override the default dark theme
      dark: {
        ...themes.dark,
        ...darkUIStorybook,
        ...commonTheme,
      },
      // Override the default light theme
      light: {
        ...themes.normal,
        ...lightUIStorybook,
        ...commonTheme,
      },
    },
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Configure your project', 'Introduction', 'Examples', 'Shadcn', 'Colors', 'Typography'],
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
    },
    // fix for theming docs page found here: https://github.com/hipstersmoothie/storybook-dark-mode/issues/282#issuecomment-2208816632
    docs: {
      container: (props: {
        children: React.ReactNode
        context: DocsContextProps
        theme?: ThemeVars
      }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [isDark, setDark] = React.useState(true)
        props.context.channel.on(DARK_MODE_EVENT_NAME, state =>
          setDark(state))
        const currentProps = { ...props }
        // currentProps.theme = isDark ? themes.dark : themes.light
        currentProps.theme = isDark ? darkUIStorybook as ThemeVars : themes.light
        // console.log('Current Props Theme:', currentProps.theme)
        // console.log('Themes Dark:', themes.dark)
        // console.log('Dark UI Storybook:', darkUIStorybook)
        // console.log('Merged Theme:', { ...themes.dark, ...darkUIStorybook, ...commonTheme })
        return <DocsContainer {...currentProps} />
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Story />
        </ThemeProvider>
      )
    },
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
}

export default preview
