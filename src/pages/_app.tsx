import type { AppProps } from 'next/app'
import OnPageLoading from '../components/Organism/OnPageLoading'
import { HomeProvider } from '../context/HomeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HomeProvider>
      <OnPageLoading >
        <Component {...pageProps} />
      </OnPageLoading>
    </HomeProvider>
  )
}

export default MyApp
