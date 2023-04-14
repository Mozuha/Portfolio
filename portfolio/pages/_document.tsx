import React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
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
      emotionStyleTags,
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
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Mizuki Hashimoto's portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
