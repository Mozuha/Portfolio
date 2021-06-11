import React, { ReactNode, useEffect } from 'react'
import Head from 'next/head'
import { Box, ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
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
        <LayoutBox>
          <Head><title>Portfolio</title></Head>
          <SidebarBox><Sidebar /></SidebarBox>
          <ContentBox>
            {children}
          </ContentBox>
        </LayoutBox>
      </StyledThemeProvider>
    </MaterialThemeProvider>
  )
}

const LayoutBox = styled(Box)`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 200px 1fr;
  padding: 0;
`

const SidebarBox = styled(Box)`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`

const ContentBox = styled(Box)`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  position: relative;
  box-shadow: inset 2px 0 5px 0 rgba(0, 0, 0, .3);
`

export default Layout