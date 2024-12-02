import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import { styled } from '@mui/material/styles';

import theme from './theme';

type Props = {
  children?: ReactNode;
};

// this reduced bundle size (first load js) from 154kB to 124kB (reduced by 19.5%)
const Sidebar = dynamic(() => import('./sidebar/Sidebar'), { loading: () => <p>Loading...</p> });
const SidebarMobile = dynamic(() => import('./sidebar/SidebarMobile'), { loading: () => <p>Loading...</p> });

const Layout = ({ children }: Props) => {
  const [isMediaMatched, setIsMediaMatched] = useState(false);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Georgia, Meiryo UI, serif';
    document.body.style.backgroundColor = theme.palette.primary.main;

    // avoid 'window is not defined' error which probably caused by SSR
    setIsMediaMatched(window.matchMedia('(max-width: 1000px)').matches); // initial check
  }, []);

  useEffect(() => {
    window.matchMedia('(max-width: 1000px)').onchange = (e) => setIsMediaMatched(e.matches);

    // clean up
    return () => {
      window.matchMedia('(max-width: 1000px)').onchange = null;
    };
  });

  return (
    <>
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
      {isMediaMatched ? <SidebarMobile /> : <Sidebar />}
      <ContentsWrapper>{children}</ContentsWrapper>
    </>
  );
};

const ContentsWrapper = styled('div')({
  marginLeft: '200px',
  '@media screen and (max-width: 1000px)': {
    marginLeft: 0,
    marginTop: '64px',
  },
});

export default Layout;
