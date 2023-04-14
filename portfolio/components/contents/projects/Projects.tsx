import React from 'react';
import { styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import ContentWrapper from '../ContentWrapper';
import ProjectWrapper from './ProjectWrapper';
import { projectsInfo } from './projectsInfo';

const Projects = ({ language }: any): JSX.Element => {
  return (
    <ContentWrapper id="projects">
      <ContainerGrid container spacing={5}>
        {projectsInfo.map((c, idx) => (
          <ItemGrid key={idx} xs={12} lg={4} xl={3}>
            <ProjectWrapper id={idx} projectInfo={c} language={language} />
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
