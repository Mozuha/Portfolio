import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

import { experiencesInfo } from './experiencesInfo';
import ExperienceWrapper from './ExperienceWrapper';
import ContentWrapper from '../ContentWrapper';

const Experiences = () => {
  return (
    <ContentWrapper id="experiences">
      <ContainerGrid container spacing={5}>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {experiencesInfo.map((c, idx) => (
            <TimelineItem key={idx}>
              <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                <></>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: 'darkGreen.light' }} />
                <TimelineDot sx={{ backgroundColor: 'darkGreen.main' }} />
                <TimelineConnector sx={{ backgroundColor: 'darkGreen.light' }} />
              </TimelineSeparator>
              <TimelineContent>
                <ItemGrid>
                  <ExperienceWrapper experienceInfo={c} />
                </ItemGrid>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ContainerGrid>
    </ContentWrapper>
  );
};

const ContainerGrid = styled(Grid2)({
  margin: 0,
  width: '100%',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
});

const ItemGrid = styled(Grid2)({
  maxWidth: 765,
  margin: '10px',
});

export default Experiences;
