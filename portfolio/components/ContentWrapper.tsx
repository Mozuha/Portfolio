import React, { ReactNode } from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

type Props = { 
  id?: string
  children?: ReactNode 
}

const ContentWrapper = ({ id, children }: Props) => {
  return (
    <StyledBox id={id}>
      <SubtitleWrapper>{id?.toUpperCase()}</SubtitleWrapper>
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  position: relative;
  top: 100vh;
`

const SubtitleWrapper = styled.h2`
  font-weight: 200;
  padding: 30px 25px;
  margin: 0;
  color: ${props => props.theme.palette.primary.main};
  background-color: #008073;
`

export default ContentWrapper