import { Box, Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './nav-link'
import { NavSection } from './nav-section'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink icon={RiDashboardLine} children="Dashboard" />
          <NavLink icon={RiContactsLine} children="Usuários" />
        </NavSection>
        <NavSection title="Automação">
          <NavLink icon={RiInputMethodLine} children="Formulários" />
          <NavLink icon={RiGitMergeLine} children="Automação" />
        </NavSection>
      </Stack>
    </Box>
  )
}
