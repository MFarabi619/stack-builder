import type { Metadata } from 'next'
import { DocsBody, DocsPage } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { RollButton } from 'fumadocs-ui/components/roll-button'
import { getPage, getPages } from '@/app/docs/source'

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default

  return (
    <DocsPage toc={page.data.exports.toc} full={page.data.full}>
      <RollButton />
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map(page => ({
    slug: page.slugs,
  }))
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null)
    notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
