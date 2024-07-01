import './global.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Stack Builder',
  description: 'Build your dream stack, your way.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
