import { MotionGlobalConfig } from 'framer-motion'
import { FlipWords } from '@/components/ui/flip-words'
import { HomePageButton } from '@/components/ui/home-button'
import { buttons } from '@/content/web/buttons'

// MotionGlobalConfig.skipAnimations = true

const words = ['vision', 'ideas', 'stack', 'way']

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center items-center max-w-lg mx-auto p-4">
      <span className="self-start mb-6 text-4xl sm:text-6xl font-normal text-neutral-600 dark:text-neutral-400">
        Your
        <FlipWords words={words} />
      </span>
      {buttons.slice(0, 1).map(button => (
        <HomePageButton key={button.href} {...(button)} />
      ))}
      <section className="flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0 w-1/2 sm:w-fit">
        {buttons.slice(1).map(button => (
          <HomePageButton key={button.href} {...(button)} />
        ))}
      </section>
    </main>
  )
}
