import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SidebarDrawerProvider } from '@/contexts'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { theme } from '@/styles/theme'
import { makeServer } from '@/services/mirage'
import { queryClient } from '@/services/query-client'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider resetCSS theme={theme}>
          <ReactQueryDevtools />
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
    </QueryClientProvider>
  )
}

export default MyApp
