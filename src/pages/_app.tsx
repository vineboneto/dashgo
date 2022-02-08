import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '@/contexts'
import { theme } from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawerProvider>
  )
}

export default MyApp
