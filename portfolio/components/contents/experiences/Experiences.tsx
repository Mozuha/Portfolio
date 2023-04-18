import React from 'react';

import { styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { experiencesInfo } from './experiencesInfo';
import ExperienceWrapper from './ExperienceWrapper';
import ContentWrapper from '../ContentWrapper';

const Experiences = () => {
  return (
    <ContentWrapper id="experiences">
      <ContainerGrid container spacing={5}>
        {experiencesInfo.map((c, idx) => (
          <ItemGrid key={idx}>
            <ExperienceWrapper experienceInfo={c} />
          </ItemGrid>
        ))}
      </ContainerGrid>
    </ContentWrapper>
  );
};

const ContainerGrid = styled(Grid2)({
  margin: 0,
  width: '100%',
  justifyContent: 'center',
});

const ItemGrid = styled(Grid2)({
  maxWidth: 765,
  margin: '10px',
});

export default Experiences;
