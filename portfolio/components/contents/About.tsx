import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'
import ContentWrapper from '../ContentWrapper'

const About = (): JSX.Element => {
  return (
    <ContentWrapper id='about'>
      <p>My about</p>
    </ContentWrapper>
  )
}

// const AboutBox = styled(Box)`
//   position: relative;
//   top: 97.5vh;
// `

export default About