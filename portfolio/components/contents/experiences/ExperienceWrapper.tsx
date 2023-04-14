import React from 'react';
import { styled, Card, CardContent, Divider, Typography } from '@mui/material';

import { ExperienceInfo } from './types';
import { textEn } from '../../texts/textEn';
import { textJa } from '../../texts/textJa';

type Props = {
  id: number;
  experienceInfo: ExperienceInfo;
  language: string;
};

const ExperienceWrapper = ({ id, experienceInfo, language }: Props): JSX.Element => {
  // change only info available in other language
  const t = language === 'ja' ? textJa : textEn;
  experienceInfo.position = t.EXPERIENCES[id]!.POSITION;
  experienceInfo.description = t.EXPERIENCES[id]!.DESCRIPTION;

  return (
    <ExperienceCard>
      <ExperienceCardContent>
        <ExperienceInfoHeader>
          <Typography variant="h5" component="h3">
            {experienceInfo.title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h5">
            {experienceInfo.period} | {experienceInfo.place}
          </Typography>
        </ExperienceInfoHeader>
        <Typography gutterBottom variant="subtitle1" component="h4">
          {experienceInfo.position}
        </Typography>
        <Divider />
        <Typography variant="body1" color="textSecondary" component="p" padding="8px 0 0 0">
          <b>Description:</b>
          <br />
          {experienceInfo.description}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p" padding="8px 0 0 0">
          <b>Tech Stack:</b>
          <br />
          {experienceInfo.techStack}
        </Typography>
      </ExperienceCardContent>
    </ExperienceCard>
  );
};

const ExperienceCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  boxShadow: theme.shadows[5],
}));

const ExperienceCardContent = styled(CardContent)({
  padding: 12,
  '&:last-child': {
    paddingBottom: 8,
  },
});

const ExperienceInfoHeader = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 8,
  lineHeight: 1,
});

export default ExperienceWrapper;
