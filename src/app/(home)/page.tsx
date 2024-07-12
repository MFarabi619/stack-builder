import { HomePageButton, type HomePageButtonType } from '@/components/ui/home-button'

const buttons = [
  {
    href: 'https://github.com/MFarabi619/stack-builder',
    imgSrc: '',
    imgAlt: 'Stack Builder Button',
    text: 'Stack Builder',
    className: 'text-2xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 w-full mb-4 hover:text-white',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  {
    href: '/storybook/index.html?path=/docs/configure-your-project--docs',
    imgSrc: 'https://github.com/storybookjs/brand/raw/main/icon/icon-storybook-default.svg',
    imgAlt: 'Storybook Logo',
    text: 'Storybook',
    className: 'bg-violet-950',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  {
    href: '/eslint-config-inspector/rules',
    imgSrc: 'https://eslint-config.antfu.me/favicon.svg',
    imgAlt: 'ESLint Logo',
    text: 'Style Guide',
    className: 'bg-gray-900',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  {
    href: 'https://github.com/MFarabi619/stack-builder',
    imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    imgAlt: 'GitHub Logo',
    text: 'GitHub',
    className: 'bg-green-600',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  {
    href: '/docs',
    imgSrc: '/fumadocs_logo.svg',
    imgAlt: 'Fumadocs Logo',
    text: 'Docs',
    className: 'bg-slate-600',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
]

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center items-center text-center max-w-lg mx-auto">
      {buttons.slice(0, 1).map(button => (
        <HomePageButton key={button.href} {...(button as HomePageButtonType)} />
      ))}
      <section className="flex space-x-2">
        {buttons.slice(1).map(button => (
          <HomePageButton key={button.href} {...(button as HomePageButtonType)} />
        ))}
      </section>
    </main>
  )
}
