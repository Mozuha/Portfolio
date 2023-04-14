import React from 'react';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <Divider variant="middle" />
      <p>© 2022 Mizuki Hashimoto</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '96px',
  width: '100%',
  hr: { marginTop: '32px' },
  p: { margin: 'auto' },
});

export default Footer;
