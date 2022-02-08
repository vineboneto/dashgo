import { RiMenuLine } from 'react-icons/ri'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { NotificationNav } from './notification-nav'
import { Profile } from './profile'
import { SearchBox } from './search-box'
import { Logo } from './logo'
import { useSidebarDrawer } from '@/contexts'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="open navigation"
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
