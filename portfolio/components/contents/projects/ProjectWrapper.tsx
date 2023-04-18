import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Fade,
  IconButton,
  styled,
  Typography,
} from '@mui/material';

import { AiOutlineGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { MdExpandLess } from 'react-icons/md';
import { SiQiita } from 'react-icons/si';

import type { ProjectInfo } from './types';

type Props = {
  projectInfo: ProjectInfo;
};

const ProjectWrapper = ({ projectInfo }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const handleLinkClick = (link: string | undefined) => window.open(link, '_blank');
  const { locale } = useRouter();
  const { t } = useTranslation('projects');

  return (
    <ProjectCard>
      <Collapse in={!expanded} mountOnEnter unmountOnExit>
        <ProjectCardMedia>
          <Image
            alt={projectInfo.title + ' image'}
            src={projectInfo.image}
            sizes="33vw"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ProjectCardMedia>
      </Collapse>
      <ProjectCardContent>
        <TitleTypography gutterBottom variant="h5" component="h3">
          {projectInfo.title}
        </TitleTypography>
        <ProjectCardActions disableSpacing>
          <ExpandIconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <MdExpandLess />
          </ExpandIconButton>
        </ProjectCardActions>
        <DescriptionTypography variant="body1" color="textSecondary" component="div">
          {t(`${projectInfo.title}.description`)}
          <Fade in={expanded} timeout={375} mountOnEnter unmountOnExit>
            <DetailDiv>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Purpose:</b>
                <br />
                {t(`${projectInfo.title}.purpose`)}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Tech Stack:</b>
                <br />
                {projectInfo.techStack}
              </Typography>
              {/* show note only if the it is existing */}
              {projectInfo.note && (
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Note:</b>
                  <br />
                  {t(`${projectInfo.title}.note`)}
                </Typography>
              )}
            </DetailDiv>
          </Fade>
        </DescriptionTypography>
        <Fade in={expanded} timeout={375} mountOnEnter unmountOnExit>
          <LinkCardActions disableSpacing>
            {/* show icon only if the link is existing */}
            {projectInfo.link && (
              <LinkIconButton onClick={() => handleLinkClick(projectInfo.link)} title="Jump to the site">
                <BiLinkExternal size={28} />
              </LinkIconButton>
            )}
            {projectInfo.github && (
              <GitHubIconButton onClick={() => handleLinkClick(projectInfo.github)} title="Jump to the repository">
                <AiOutlineGithub size={28} />
              </GitHubIconButton>
            )}
            {/* show icon only if the language is set to japanese and
                the link is existing since it is an article in Japanese */}
            {locale === 'ja' && projectInfo.qiita && (
              <QiitaIconButton onClick={() => handleLinkClick(projectInfo.qiita)} title="Jump to the article">
                <SiQiita size={28} />
              </QiitaIconButton>
            )}
          </LinkCardActions>
        </Fade>
      </ProjectCardContent>
    </ProjectCard>
  );
};

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  boxShadow: theme.shadows[5],
  width: 305,
  height: 400,
}));

const ProjectCardMedia = styled(CardMedia)({
  paddingTop: '70%',
  position: 'relative',
  width: '100%',
  height: '100%',
});

const ProjectCardContent = styled(CardContent)({
  display: 'grid',
  gridTemplateRows: '50px 1fr',
  gridTemplateColumns: '245px 1fr',
  padding: 12,
  '&:last-child': {
    paddingBottom: 8,
  },
});

const TitleTypography = styled(Typography)({
  margin: 0,
  gridRow: '1 / 2',
  gridColumn: '1 / 2',
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,
}) as typeof Typography; // require 'as typeof' to handle 'component props does not exist' bug

const ProjectCardActions = styled(CardActions)({
  width: '50px',
  height: '50px',
  gridRow: '1 / 2',
  gridColumn: '2 / 3',
  padding: 0,
});

const classes = { expand: 'expand', expandOpen: 'expandOpen' };

const ExpandIconButton = styled(IconButton)(({ theme }) => ({
  [`&.${classes.expand}`]: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    padding: '12px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  [`&.${classes.expandOpen}`]: {
    transform: 'rotate(180deg)',
  },
}));

const DescriptionTypography = styled(Typography)({
  gridRow: '2 / 3',
  gridColumn: '1 / 3',
  padding: '8px 12px 0 0',
}) as typeof Typography;

const DetailDiv = styled('div')({
  '& p': {
    margin: '4px 0',
  },
});

const LinkCardActions = styled(CardActions)({
  paddingTop: 4,
  transform: 'translateX(-12px)',
  '& .MuiIconButton-root': {
    padding: '4px',
  },
});

const LinkIconButton = styled(IconButton)({
  '&:hover': {
    color: '#346751',
  },
});

const GitHubIconButton = styled(IconButton)({
  '&:hover': {
    color: '#333',
  },
});

const QiitaIconButton = styled(IconButton)({
  '&:hover': {
    color: '#55c500',
  },
});

export default ProjectWrapper;
