import './fumadocs.global.css'
import { DocsLayout, Layout as HomeLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { RootProvider } from 'fumadocs-ui/provider'
import { docsOptions, homeOptions } from './layout.config'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>
          <HomeLayout {...homeOptions}>
            <DocsLayout {...docsOptions}>{children}</DocsLayout>
          </HomeLayout>
        </RootProvider>
      </body>
    </html>
  )
}
