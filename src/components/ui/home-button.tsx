import clsx from 'clsx'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LinkPreview } from '@/components/ui/link-preview'

export function HomePageButton({
  href = '/',
  imgSrc = '',
  logoSrc = '',
  text = '',
  className = '',
}: {
  href?: string
  imgSrc?: string
  imgAlt?: string
  logoSrc?: string
  text?: string
  className?: string
}) {
  const buttonClasses = clsx(
    'w-full',
    'space-x-2',
    'text-white',
    'font-semibold',
    'transition-all',
    'duration-500',
    'ease-in-out',
    'hover:scale-105',
    className,
  )

  return (
    <LinkPreview
      url={href}
      imageSrc={imgSrc}
      isStatic
    >
      <Button
        className={buttonClasses}
        asChild
      >
        <div>
          {imgSrc && (
            <Image
              alt={`${text} logo`}
              src={logoSrc}
              width={24}
              height={24}
              priority
            />
          )}
          <span>{text}</span>
        </div>
      </Button>
    </LinkPreview>
  )
}
