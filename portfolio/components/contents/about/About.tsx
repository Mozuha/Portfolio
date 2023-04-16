import React from 'react';
import Image from 'next/image';
import { styled, Paper, Typography, Avatar, Divider } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import ContentWrapper from '../ContentWrapper';
import { textEn } from '../../texts/textEn';
import { textJa } from '../../texts/textJa';

const About = ({ language }: any): JSX.Element => {
  // change only info available in other language
  const t = language === 'ja' ? textJa : textEn;

  return (
    <ContentWrapper id="about">
      <ContainerGrid container spacing={5}>
        <ItemGrid>
          <ProfilePaper>
            <MyAvatar>
              <Image alt="Mizuki Hashimoto" src="/img/profpic.jpg" sizes="25vw" fill style={{ objectFit: 'cover' }} />
            </MyAvatar>
            <Divider />
            <Typography variant="h6" component="p">
              {t.ABOUT.DESCRIPTION1}
            </Typography>
            <Typography variant="h6" component="p">
              {t.ABOUT.DESCRIPTION2}
            </Typography>
            <Typography variant="h6" component="p">
              {t.ABOUT.DESCRIPTION3}
            </Typography>
          </ProfilePaper>
        </ItemGrid>
      </ContainerGrid>
    </ContentWrapper>
  );
};

const ContainerGrid = styled(Grid2)({
  margin: 'auto',
  width: '100%',
  justifyContent: 'center',
});

const ItemGrid = styled(Grid2)({
  margin: 10,
  maxWidth: 900,
});

const ProfilePaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  boxShadow: theme.shadows[5],
  padding: 50,
  '& p': {
    margin: '20px 0',
  },
}));

const MyAvatar = styled(Avatar)(({ theme }) => ({
  margin: 'auto',
  marginBottom: 30,
  width: 250,
  height: 250,
  boxShadow: theme.shadows[10],
  transition: 'transform 0.5s',
  '&:hover': {
    transform: 'rotate(-5deg) scale(1.1)',
  },
}));

export default About;
