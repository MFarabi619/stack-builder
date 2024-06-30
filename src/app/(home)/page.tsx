import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">
        <Button asChild>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">Next.js</a>
        </Button>
        {' '}
        Starter Template by
        {' '}
        <Button asChild variant="secondary">
          <a href="https://github.com/mfarabi619" target="_blank" rel="noreferrer noopener">Mumtahin Farabi</a>
        </Button>
      </h1>
      <p className="text-muted-foreground">
        You can see the documentation at
        {' '}
        <Link href="/docs" className="text-foreground font-semibold underline">
          /docs
        </Link>
        {' '}
        .
      </p>
    </main>
  )
}
