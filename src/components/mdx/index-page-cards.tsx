import { Card, Cards } from 'fumadocs-ui/components/card'
import { getPages } from '@/app/docs/source'

// Render cards for each page in the directory
export async function IndexPageCards(meta: { title: string, pages: string[] }) {
  const allPages = getPages()

  // Destructure title and pages from meta
  const { title: INDEX_PAGE_TITLE, pages: INDEX_PAGE_SUBPAGES } = meta

  // Get the index page by title
  const INDEX_PAGE = allPages.find(({ data }) => data.title === INDEX_PAGE_TITLE)
  if (!INDEX_PAGE)
    return null

  // Destructure dirname and slugs from INDEX_PAGE
  const { file: { dirname: INDEX_PAGE_DIRNAME }, slugs: INDEX_PAGE_SLUGS } = INDEX_PAGE

  // Create an order map to sort the filtered pages
  const orderMap = INDEX_PAGE_SUBPAGES.reduce((map, name, index) => {
    map[name] = index
    return map
  }, {} as { [key: string]: number })

  // Filter and sort pages by order in meta.json "pages" array
  const filteredPages = allPages.filter(({ file: { name }, slugs }) => (
    (name === 'index' && slugs.length === INDEX_PAGE_SLUGS.length + 1 && slugs[INDEX_PAGE_SLUGS.length - 1] === INDEX_PAGE_DIRNAME)
    || INDEX_PAGE_SUBPAGES.includes(name)
  )).sort((a, b) => orderMap[a.file.name] - orderMap[b.file.name])

  return (
    <Cards>
      {filteredPages.map(page => (
        <Card
          key={page.file.name}
          title={page.data.title}
          description={page.data.description || 'No description provided'}
          href={page.url}
        />
      ))}
    </Cards>
  )
}
