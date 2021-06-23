import { useEffect } from 'react'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles)
  }, [])

  return <Component {...pageProps} />
}

export default App