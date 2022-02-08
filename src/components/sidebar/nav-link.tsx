import { ElementType } from 'react'
import { Icon, Link, LinkProps, Text } from '@chakra-ui/react'

type Props = LinkProps & {
  icon: ElementType
  children: string
}

export function NavLink({ icon, children, ...props }: Props) {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
