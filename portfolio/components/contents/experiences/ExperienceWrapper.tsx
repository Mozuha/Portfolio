import React from 'react';
import { styled, Card, CardContent, Divider, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

import { ExperienceInfo } from './types';

type Props = {
  experienceInfo: ExperienceInfo;
};

const ExperienceWrapper = ({ experienceInfo }: Props): JSX.Element => {
  const { t } = useTranslation('experiences');

  return (
    <ExperienceCard>
      <ExperienceCardContent>
        <ExperienceInfoHeader>
          <Typography variant="h5" component="h3">
            {experienceInfo.title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h4">
            {experienceInfo.period} | {experienceInfo.place}
          </Typography>
        </ExperienceInfoHeader>
        <Typography gutterBottom variant="subtitle1" component="h4">
          {t(`${experienceInfo.title}.position`)}
        </Typography>
        <Divider />
        {experienceInfo.description && (
          <Typography variant="body1" color="textSecondary" component="p" padding="8px 0 0 0">
            <b>Description:</b>
            <br />
            {t(`${experienceInfo.title}.description`)}
          </Typography>
        )}
        {experienceInfo.techStack && (
          <Typography variant="body1" color="textSecondary" component="p" padding="8px 0 0 0">
            <b>Tech Stack:</b>
            <br />
            {experienceInfo.techStack}
          </Typography>
        )}
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
