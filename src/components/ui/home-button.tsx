import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HomePageButton({
  href = '/',
  imgSrc = '',
  imgAlt = 'Image',
  text = '',
  className = '',
}: {
  href?: string
  imgSrc?: string
  imgAlt?: string
  text?: string
  className?: string
}) {
  const buttonClasses = clsx(
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
    <Button
      className={buttonClasses}
      asChild
    >
      <Link
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {imgSrc && (
          <Image
            priority
            alt={imgAlt}
            src={imgSrc}
            width={24}
            height={24}
          />
        )}
        <span>{text}</span>
      </Link>
    </Button>
  )
}
