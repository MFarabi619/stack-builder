import type { MDXComponents } from 'mdx/types'
import defaultComponents from 'fumadocs-ui/mdx'
import type { ReactNode } from 'react'
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { Step, Steps } from 'fumadocs-ui/components/steps'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Tab,
    Tabs,
    Step,
    Steps,
    InstallTabs: ({
      items,
      children,
    }: {
      items: string[]
      children: ReactNode
    }) => (
      <Tabs items={items} id="package-manager">
        {children}
      </Tabs>
    ),
  }
}
