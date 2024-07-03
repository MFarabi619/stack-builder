import { map } from '@root/.map'
import { createMDXSource } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { createElement } from 'react'

import {
  icons,
} from 'lucide-react'

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      // return createElement(HomeIcon)
      return
    }

    if (icon in icons)
      return createElement(icons[icon as keyof typeof icons])
  },

  source: createMDXSource(map),
})
