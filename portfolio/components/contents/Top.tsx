import React, { useState, useEffect } from 'react';
import { Slide } from '@mui/material';
import { styled } from '@mui/material/styles';

const Top = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <TopWrapper id="top">
      <Overlay>
        <WelcomeMsgWrapper>
          <Slide direction="left" in={isLoaded} timeout={1000} mountOnEnter unmountOnExit>
            <h1>
              Hello!
              <br />
              I'm Mizuki
            </h1>
          </Slide>
        </WelcomeMsgWrapper>
      </Overlay>
    </TopWrapper>
  );
};

const TopWrapper = styled('div')({
  height: '100vh',
  width: '100%',
  padding: 0,
  margin: 0,
  top: 0,
  background: 'url(/img/arches_high.jpg) no-repeat left/cover',
});

const Overlay = styled('div')({
  height: '100vh',
  width: '100%',
  padding: 0,
  margin: 0,
  top: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
});

const WelcomeMsgWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '0 70px',
  lineHeight: 1.2,
  h1: {
    fontSize: '2.8rem',
    color: '#efbf80',
    textAlign: 'right',
    textShadow: '1px 1px #877fef',
    userSelect: 'none',
  },
});

export default Top;
