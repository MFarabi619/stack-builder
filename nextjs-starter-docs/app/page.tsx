import Link from 'next/link';
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <p className="text-muted-foreground">
        You can open{' '}
        <Button variant="secondary" asChild>
          <Link href="/docs" className="text-foreground font-semibold underline">
            /docs
          </Link>
        </Button>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
