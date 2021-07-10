import React, { ReactNode, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core'
import styled, {ThemeProvider as StyledThemeProvider} from 'styled-components'

import theme from './theme'
import Sidebar from './sidebar/Sidebar'
import SidebarMobile from './sidebar/SidebarMobile'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const { locale } = useRouter()
  // set initial language to current locale
  // user can change language through switch on sidebar thereafter
  const [lang, setLang] = useState(locale)
  const [isMediaMatched, setIsMediaMatched] = useState(false)

  const handleLangChange = (language: string) => setLang(language)

  // cloning children with new props to pass language 
  const Parent = ({ children }: Props) => {
    const additionalProps = { language: lang }
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child)) return React.cloneElement(child, additionalProps)
      return child
    })
    return <div>{childrenWithProps}</div>
  }

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
        <Head><title>Mizuki | Portfolio</title></Head>
        {isMediaMatched ? 
          <SidebarMobile handleLangChange={handleLangChange} />
          :
          <Sidebar handleLangChange={handleLangChange} />
        }
        <ContentsWrapper>
          <Parent>{children}</Parent>
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