import { Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import { NavLink } from './nav-link'
import { NavSection } from './nav-section'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink href="/dashboard" icon={RiDashboardLine} children="Dashboard" />
        <NavLink href="/users" icon={RiContactsLine} children="Usuários" />
      </NavSection>
      <NavSection title="Automação">
        <NavLink href="/forms" icon={RiInputMethodLine} children="Formulários" />
        <NavLink href="/automation" icon={RiGitMergeLine} children="Automação" />
      </NavSection>
    </Stack>
  )
}
