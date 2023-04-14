import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

type Props = {
  id: string;
  children?: ReactNode;
};

const ContentWrapper = ({ id, children }: Props) => {
  return (
    <div id={id}>
      <SubtitleWrapper>{id.toUpperCase()}</SubtitleWrapper>
      {children}
    </div>
  );
};

const SubtitleWrapper = styled('h2')(({ theme }) => ({
  fontWeight: 200,
  padding: '30px 25px',
  margin: 0,
  color: theme.palette.primary.main,
  //backgroundColor: '#008073',
  backgroundColor: '#346751',
}));

export default ContentWrapper;
