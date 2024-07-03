import { map } from '@root/.map'
import { createMDXSource } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { createElement } from 'react'

import {
  Palette as DesignIcon,
  GitPullRequestCreateArrow as DevelopmentIcon,
  Dock as HomeIcon,
  Kanban as ProjectManagementIcon,
  icons,
} from 'lucide-react'

export const pages = [
  {
    title: 'Home',
    description: 'Best decisions start with the best information',
    url: '',
    icon: HomeIcon,
  },
  {
    title: 'Project Management',
    description: 'Turn visions into reality with confidence',
    url: 'project-management',
    icon: ProjectManagementIcon,
  },
  {
    title: 'Design',
    description: 'Deliver outstanding UI/UX at record velocity',
    url: 'design',
    icon: DesignIcon,
  },
  {
    title: 'Development',
    description: 'Architect your solution for scale and longevity',
    url: 'development',
    icon: DevelopmentIcon,
  },
]

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
