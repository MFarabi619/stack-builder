import { createPreset } from 'fumadocs-ui/tailwind-plugin'
import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  prefix: '',
  content: [
    './src/app/docs/**/*.{ts,tsx}',
    './src/content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset({
    preset: 'default',
    // preset: 'neutral',
    // preset: 'dusk',
    // preset: 'purple',
    // preset: 'ocean',
    // preset: 'catppuccin',
  })],
} satisfies Config

export default config
