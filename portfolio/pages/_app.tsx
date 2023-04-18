import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Layout from '../components/layout';
import theme from '../components/theme';
import createEmotionCache from '../utility/createEmotionCache';

import type { EmotionCache } from '@emotion/react';

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
      <Head>
        <title>Mizuki | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(App);
