import React from 'react';
import { styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import ContentWrapper from '../ContentWrapper';
import ExperienceWrapper from './ExperienceWrapper';
import { experiencesInfo } from './experiencesInfo';

const Experiences = ({ language }: any): JSX.Element => {
  return (
    <ContentWrapper id="experiences">
      <ContainerGrid container spacing={5}>
        {experiencesInfo.map((c, idx) => (
          <ItemGrid key={idx}>
            <ExperienceWrapper id={idx} experienceInfo={c} language={language} />
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
