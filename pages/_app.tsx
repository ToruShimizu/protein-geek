import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import 'modern-css-reset/dist/reset.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
