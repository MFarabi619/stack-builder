import type { BaseLayoutProps, DocsLayoutProps } from 'fumadocs-ui/layout'
import { pageTree } from '@/app/docs/source'

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Stack Builder Docs',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
}

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
}
