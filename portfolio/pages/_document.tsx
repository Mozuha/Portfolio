import React from 'react';

import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import createEmotionServer from '@emotion/server/create-instance';

import createEmotionCache from '../utility/createEmotionCache';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/favicon_package_beige/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon_package_beige/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon_package_beige/favicon-16x16.png" />
          <link rel="manifest" href="img/favicon/favicon_package_beige/site.webmanifest" />
          <link rel="mask-icon" href="img/favicon/favicon_package_beige/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#346751" />
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
          <meta property="og:title" content="Mizuki | Portfolio" />
          <meta name="description" content="Mizuki Hashimoto's portfolio" />
          <meta name="description" content="Mizuki Hashimoto's portfolio" />
          <meta property="og:image" content="/img/portfolio.png" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://portfolio-mozuha.vercel.app/" />
          <meta property="og:site_name" content="Mizuki | Portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
