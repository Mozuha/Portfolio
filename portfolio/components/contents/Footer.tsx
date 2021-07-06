import React from 'react'
import { Divider } from '@material-ui/core'
import styled from 'styled-components'

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Divider variant='middle' /> 
      <p>© 2021 Mizuki Hashimoto</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 96px;
  width: 100%;
  hr { margin-top: 32px; }
  p { margin: auto; }
`

export default Footer