import { FlipWords } from '@/components/ui/flip-words'
import { HomePageButton } from '@/components/ui/home-button'
import { hero_section_buttons_content } from '@/content/home-page/hero-section-buttons-content'
import { Boxes } from '@/components/ui/background-boxes'

const words = ['vision', 'ideas', 'stack', 'way']

export function Hero() {
  return (
    <main className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="flex flex-col justify-center items-center mx-auto p-4 relative z-20">
        <span className="self-start mb-6 text-4xl sm:text-6xl font-normal text-neutral-600 dark:text-neutral-400">
          Your
          <FlipWords words={words} />
        </span>
        {hero_section_buttons_content.slice(0, 1).map(button => (
          <HomePageButton key={button.href} {...(button)} />
        ))}
        <section className="flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0 w-2/3 sm:w-fit">
          {hero_section_buttons_content.slice(1).map(button => (
            <HomePageButton key={button.href} {...(button)} />
          ))}
        </section>
      </div>
    </main>
  )
}
