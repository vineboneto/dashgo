import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ReactNode } from 'react'
import { createContext } from 'react'

type SidebarDrawerContextProps = UseDisclosureReturn

const SidebarDrawerContext = createContext<SidebarDrawerContextProps>({} as UseDisclosureReturn)

type Props = {
  children: ReactNode
}

export function SidebarDrawerProvider({ children }: Props) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return <SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>
}

export function useSidebarDrawer() {
  const context = useContext(SidebarDrawerContext)
  return context
}
