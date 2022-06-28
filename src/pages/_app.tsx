import type { AppProps } from 'next/app'
import { HomeProvider } from '../context/HomeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomeProvider>
      <Component {...pageProps} />
    </HomeProvider>
  )
}

export default MyApp
