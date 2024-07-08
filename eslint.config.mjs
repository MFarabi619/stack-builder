// This is a flat ESLint config file
// To see all linting rules, run `pnpm lint:inspect` or `npx @eslint/config-inspector`
// To run ESLint on the entire project without applying any fixes, run `pnpm lint`
// To run ESLint on the entire project and apply fixes, run `pnpm lint:fix`

import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    // Enable stylistic formatting rules
    stylistic: true,

    // Or customize the stylistic rules
    // stylistic: {
    //   indent: 2, // 4, or 'tab'
    //   quotes: 'single', // or 'double'
    // },

    react: true,
    // astro: true, // Need `eslint-plugin-astro` and `prettier-plugin-astro`

    // Disable jsonc and yaml support
    // jsonc: false,
    // yaml: false,

    ignores: ['**/public', '**/node_modules'],
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier',
    },
  },

  // Legacy config
  ...compat.config({
    extends: [
      // 'eslint:recommended',
      // Other extends...
    ],
  }),

  // Other flat configs...
)
