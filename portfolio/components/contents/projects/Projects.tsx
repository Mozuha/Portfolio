import React from 'react';

import { styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { projectsInfo } from './projectsInfo';
import ProjectWrapper from './ProjectWrapper';
import ContentWrapper from '../ContentWrapper';

const Projects = () => {
  return (
    <ContentWrapper id="projects">
      <ContainerGrid container spacing={5}>
        {projectsInfo.map((c, idx) => (
          <ItemGrid key={idx} xs={12} lg={4} xl={3}>
            <ProjectWrapper projectInfo={c} />
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
  width: 345,
  height: 440,
  maxWidth: 345,
  maxHeight: 440,
  margin: '10px',
});

export default Projects;
