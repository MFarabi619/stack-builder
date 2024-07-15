import { withPayload } from '@payloadcms/next/withPayload'
import createMDX from 'fumadocs-mdx/config'
import { fileGenerator, remarkDocGen, remarkInstall } from 'fumadocs-docgen'

const withMDX = createMDX({
  rootContentPath: './src/content',
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [[remarkInstall, { Tabs: 'InstallTabs' }], [remarkDocGen, { generators: [fileGenerator()] }]],
  },
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // For rendering ESLint config inspector, which uses Nuxt for client-side routing
  async rewrites() {
    return [
      {
        source: '/eslint-config-inspector/_nuxt/:path*',
        destination: '/eslint-config-inspector/_nuxt/:path*',
      },
      {
        source: '/eslint-config-inspector/api/:path*',
        destination: '/eslint-config-inspector/api/:path*',
      },
      {
        source: '/eslint-config-inspector/:path*',
        destination: '/eslint-config-inspector/index.html',
      },
    ]
  },
  images: {
    domains: [
      'api.microlink.io', // Microlink Image Preview
    ],
  },
}

export default withPayload(withMDX(config))
