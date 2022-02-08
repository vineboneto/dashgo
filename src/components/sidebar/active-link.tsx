import { cloneElement, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = LinkProps & {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...props }: Props) {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactHref && (asPath === props.href || asPath === props.as)) {
    isActive = true
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(props.href)) || asPath.startsWith(String(props.as)))) {
    console.log('Entrei aqui')
    isActive = true
  }

  return (
    <Link {...props}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
