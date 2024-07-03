import createMDX from 'fumadocs-mdx/config'
import { remarkInstall } from 'fumadocs-docgen'

const withMDX = createMDX({
  rootContentPath: './src/content',
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [
      [remarkInstall, { Tabs: 'InstallTabs' }],
    ],
  },
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

export default withMDX(config)
