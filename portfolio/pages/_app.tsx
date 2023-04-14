import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../utility/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  Component: AppProps['Component'];
  emotionCache?: EmotionCache;
  pageProps: AppProps['pageProps'];
}

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
