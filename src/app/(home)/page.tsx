import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">
        Welcome to
        {' '}
        <a href="https://github.com/MFarabi619/stack-builder" target="_blank" rel="noreferrer noopener" className="underline inline-flex transition-all duration-300 ease-in-out hover:scale-105">Stack Builder</a>
      </h1>
      <p className="text-muted-foreground">
        <Button asChild>
          <Link
            href="/docs"
            className="text-foreground font-semibold transition-transform duration-500 ease-in-out hover:scale-105"
          >
            Read the Docs
          </Link>
        </Button>
      </p>
    </main>
  )
}
