import React, { useState } from 'react';
import Image from 'next/image';
import {
  styled,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
  Fade,
} from '@mui/material';
import { MdExpandLess } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiQiita } from 'react-icons/si';
import clsx from 'clsx';

import { ProjectInfo } from './types';
import { textEn } from '../../texts/textEn';
import { textJa } from '../../texts/textJa';

type Props = {
  id: number;
  projectInfo: ProjectInfo;
  language: string;
};

const ProjectWrapper = ({ id, projectInfo, language }: Props): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => setExpanded(!expanded);
  const handleLinkClick = (link: string | undefined) => window.open(link, '_blank');

  // change only info available in other language
  const t = language === 'ja' ? textJa : textEn;
  projectInfo.description = t.PROJECTS[id]!.DESCRIPTION;
  projectInfo.purpose = t.PROJECTS[id]!.PURPOSE;
  projectInfo.note = t.PROJECTS[id]!.NOTE;

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
          {projectInfo.description}
          <Fade in={expanded} timeout={375} mountOnEnter unmountOnExit>
            <DetailDiv>
              <Typography variant="body2" color="textSecondary" component="p">
                <b>Purpose:</b>
                <br />
                {projectInfo.purpose}
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
                  {projectInfo.note}
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
            {language === 'ja' && projectInfo.qiita && (
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
