import createMDX from 'fumadocs-mdx/config'

const withMDX = createMDX({ rootContentPath: './src/content', mdxOptions: { lastModifiedTime: 'git' } })

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

export default withMDX(config)
