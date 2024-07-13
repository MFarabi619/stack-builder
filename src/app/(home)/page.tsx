import { HomePageButton } from '@/components/ui/home-button'
import { buttons } from '@/content/web/buttons'

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center items-center text-center max-w-lg mx-auto">
      {buttons.slice(0, 1).map(button => (
        <HomePageButton key={button.href} {...(button)} />
      ))}
      <section className="flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0">
        {buttons.slice(1).map(button => (
          <HomePageButton key={button.href} {...(button)} />
        ))}
      </section>
    </main>
  )
}
