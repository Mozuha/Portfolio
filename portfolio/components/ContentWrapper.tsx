import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = { 
  id: string
  children?: ReactNode 
}

const ContentWrapper = ({ id, children }: Props) => {
  return (
    <div id={id}>
      <SubtitleWrapper>{id.toUpperCase()}</SubtitleWrapper>
      {children}
    </div>
  )
}

const SubtitleWrapper = styled.h2`
  font-weight: 200;
  padding: 30px 25px;
  margin: 0;
  color: ${props => props.theme.palette.primary.main};
  //background-color: #008073;
  background-color: #346751;
`

export default ContentWrapper