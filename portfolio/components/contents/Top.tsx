import React, { useState, useEffect } from 'react'
import { Slide } from '@material-ui/core'
import styled from 'styled-components'

const Top = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <TopWrapper id='top'>
      <Overlay>
        <WelcomeMsgWrapper>
          <Slide
            direction='left'
            in={isLoaded}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <h1>Hello!<br />I'm Mizuki</h1>
          </Slide>
        </WelcomeMsgWrapper>
      </Overlay>
    </TopWrapper>
  )
}

const TopWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  background: url(/img/arches_high.jpg) no-repeat left/cover;
`
const Overlay = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const WelcomeMsgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 70px;
  h1 {
    font-size: 2.8rem;
    color: #efbf80;
    text-align: right;
    text-shadow: 1px 1px #877fef;
    user-select: none;
  }
`

export default Top