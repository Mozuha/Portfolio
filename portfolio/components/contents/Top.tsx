import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

const Top = (): JSX.Element => {
  return (
    <TopBox id='top'>
      <OverlayBox>
        <p>Landing page</p>
      </OverlayBox>
    </TopBox>
  )
}

const TopBox = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  background: url(/img/arches_high.jpg) no-repeat top left/auto;
`
const OverlayBox = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
`

export default Top