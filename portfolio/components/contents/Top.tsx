import React from 'react'
import styled from 'styled-components'

const Top = (): JSX.Element => {
  return (
    <TopWrapper id='top'>
      <Overlay>
        <WelcomeMsgWrapper>
          <h1>Hello!<br />I'm Mizuki</h1>
        </WelcomeMsgWrapper>
      </Overlay>
    </TopWrapper>
  )
}

const TopWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  background: url(/img/arches_high.jpg) no-repeat left/auto;
`
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

const WelcomeMsgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 70px;
  h1 {
    font-size: 2.8rem;
    color: #efbf80;
    text-align: right;
    text-shadow: 1px 1px #877fef;
  }
`

export default Top