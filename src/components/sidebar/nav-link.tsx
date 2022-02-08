import { ElementType } from 'react'
import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react'
import { ActiveLink } from './active-link'

type Props = LinkProps & {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ icon, children, href, ...props }: Props) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
