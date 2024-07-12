import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export interface HomePageButtonType {
  href: string
  imgSrc: string
  imgAlt: string
  text: string
  className: string
  target: string
  rel: string
}

export function HomePageButton({ href = '', imgSrc, imgAlt = 'Image', text, className, target, rel }: Partial<HomePageButtonType>) {
  return (
    <Button className={clsx('space-x-2 text-white font-semibold transition-all duration-500 ease-in-out hover:scale-105 hover:text-black', className)} asChild>
      <Link href={href} target={target} rel={rel}>
        {imgSrc && <Image alt={imgAlt} src={imgSrc} width={24} height={24} />}
        <span>{text}</span>
      </Link>
    </Button>
  )
}
