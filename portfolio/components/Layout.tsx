import React, { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
import styled, {ThemeProvider as StyledThemeProvider} from 'styled-components'

import theme from './theme'
import Sidebar from './sidebar/Sidebar'
import SidebarMobile from './sidebar/SidebarMobile'

type Props = { children?: ReactNode }

const Layout = ({ children }: Props) => {
  const [isMediaMatched, setIsMediaMatched] = useState(false)

  useEffect(() => {
      document.body.style.margin = '0'
      document.body.style.fontFamily = 'Georgia, serif'
      document.body.style.backgroundColor = theme.palette.primary.main

      // avoid 'window is not defined' error which probably caused by SSR
      setIsMediaMatched(window.matchMedia('(max-width: 1000px)').matches)  // initial check
  }, [])

  useEffect(() => {
    window.matchMedia('(max-width: 1000px)').onchange = (e) =>
        setIsMediaMatched(e.matches)
      
    // clean up
    return () => { window.matchMedia('(max-width: 1000px)').onchange = null }
  })

  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Head>
          <title>Mizuki | Portfolio</title>
          <meta name='description' content="Mizuki Hashimoto's portfolio" />
        </Head>
        {isMediaMatched ? <SidebarMobile /> : <Sidebar />}
        <ContentsWrapper>
          {children}
        </ContentsWrapper>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  )
}

const ContentsWrapper = styled.div`
  margin-left: 200px;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
    margin-top: 64px;
  }
`

export default Layout