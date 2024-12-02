import React from 'react';

import Image from 'next/image';

import { Paper, styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { skillInfos } from './skillInfo';
import ContentWrapper from '../ContentWrapper';

const Skills = (): JSX.Element => {
  return (
    <ContentWrapper id="skills">
      <ContainerGrid container>
        {skillInfos.map((c, idx) => (
          <ItemGrid key={idx}>
            <SkillsPaper>
              <Image alt={c.title + '-logo'} src={c.icon} width="42" height="42" />
              <p>{c.title}</p>
            </SkillsPaper>
          </ItemGrid>
        ))}
      </ContainerGrid>
    </ContentWrapper>
  );
};

const ContainerGrid = styled(Grid2)({
  margin: 0,
  padding: 20,
  width: '100%',
  justifyContent: 'center',
});

const ItemGrid = styled(Grid2)({
  width: 110,
  height: 110,
  maxWidth: 110,
  maxHeight: 110,
  margin: 20,
  textAlign: 'center',
});

const SkillsPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: 110,
  height: 110,
  padding: 10,
  '& img': {
    marginTop: 6,
  },
  '& p': {
    margin: 0,
    marginTop: 12,
  },
  borderRadius: '16px',
}));

export default Skills;
