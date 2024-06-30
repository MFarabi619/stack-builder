import './fumadocs.global.css'
import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { RootProvider } from 'fumadocs-ui/provider'
import { docsOptions } from './layout.config'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>
          <DocsLayout {...docsOptions}>{children}</DocsLayout>
        </RootProvider>
      </body>
    </html>
  )
}
