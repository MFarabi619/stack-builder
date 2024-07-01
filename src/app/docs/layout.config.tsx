import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout'
import { pageTree } from '@/app/docs/source'

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Stack Builder Docs',
  },
  githubUrl: 'https://github.com/MFarabi619/stack-builder',
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
}

// home layout configuration
export const homeOptions: BaseLayoutProps = {
  ...baseOptions,
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
}
