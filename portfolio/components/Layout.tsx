import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
import styled, {ThemeProvider as StyledThemeProvider} from 'styled-components'

import theme from './theme'
import Sidebar from './Sidebar'

type Props = { children?: ReactNode }

const Layout = ({ children }: Props) => {
  useEffect(() => {
    document.body.style.margin = '0'
    document.body.style.fontFamily = 'Georgia, serif'
    document.body.style.backgroundColor = theme.palette.primary.main
  })

  return (
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Head><title>Portfolio</title></Head>
        <Sidebar />
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