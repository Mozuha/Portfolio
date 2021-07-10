import React, { useState } from 'react'
import { 
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Collapse,
  Fade
} from '@material-ui/core'
import { MdExpandLess } from 'react-icons/md'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import { SiQiita } from 'react-icons/si'
import clsx from 'clsx'

import { ProjectInfo } from './types'
import { textEn } from '../../texts/textEn'
import { textJa } from '../../texts/textJa'

type Props = {
  id: number
  projectInfo: ProjectInfo
  language: string
}

const ProjectWrapper = ({ id, projectInfo, language }: Props): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => setExpanded(!expanded)
  const handleLinkClick = (link: string | undefined) => window.open(link, '_blank')

  // change only info available in other language
  const t = language === 'ja' ? textJa : textEn
  projectInfo.description = t.PROJECTS[id]!.DESCRIPTION
  projectInfo.purpose = t.PROJECTS[id]!.PURPOSE
  projectInfo.note = t.PROJECTS[id]!.NOTE

  return (
    <Card className={classes.card}>
      <Collapse in={!expanded} mountOnEnter unmountOnExit>
        <CardMedia
          className={classes.media}
          image={projectInfo.image}
        />
      </Collapse>
      <CardContent className={classes.content}>
        <Typography className={classes.title} gutterBottom variant='h5' component='h3'>
          {projectInfo.title}
        </Typography>
        <CardActions className={classes.action} disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <MdExpandLess />
          </IconButton>
        </CardActions>
        <Typography className={classes.description} variant='body1' color='textSecondary' component='div'>
          {projectInfo.description}
          <Fade in={expanded} timeout={375} mountOnEnter unmountOnExit>
            <div className={classes.detail}>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
              >
                <b>Purpose:</b><br />
                {projectInfo.purpose}
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
              >
                <b>Tech Stack:</b><br />
                {projectInfo.techStack}
              </Typography>
              {/* show note only if the it is existing */}
              { projectInfo.note &&
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  <b>Note:</b><br />
                  {projectInfo.note}
                </Typography>
              }
            </div>
          </Fade>
        </Typography>
        <Fade in={expanded} timeout={375} mountOnEnter unmountOnExit>
          <CardActions
            className={classes.link}
            disableSpacing
          >
            {/* show icon only if the link is existing */}
            {projectInfo.link && 
              <IconButton
                className={classes.linkIcon}
                onClick={() => handleLinkClick(projectInfo.link)}
                title='Jump to the site'
              >
                <BiLinkExternal size={28} />
              </IconButton>
            }
            {projectInfo.github &&
              <IconButton
                className={classes.githubIcon}
                onClick={() => handleLinkClick(projectInfo.github)}
                title='Jump to the repository'
              >
                <AiOutlineGithub size={28} />
              </IconButton>
            }
            {/* show icon only if the language is set to japanese and
                the link is existing since it is an article in Japanese */}
            {(language === 'ja' && projectInfo.qiita) &&
              <IconButton
                className={classes.qiitaIcon}
                onClick={() => handleLinkClick(projectInfo.qiita)}
                title='Jump to the article'
              >
                <SiQiita size={28} />
              </IconButton>
            }
          </CardActions>
        </Fade>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[5],
      width: 305,
      height: 400,
    },
    media: {
      height: 0,
      paddingTop: '70%',
    },
    content: {
      display: 'grid',
      gridTemplateRows: '50px 1fr',
      gridTemplateColumns: '245px 1fr',
      padding: 12,
      '&:last-child': {
        paddingBottom: 8,
      },
    },
    title: {
      margin: 0,
      gridRow: '1 / 2',
      gridColumn: '1 / 2',
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
    },
    action: {
      width: '50px',
      height: '50px',
      gridRow: '1 / 2',
      gridColumn: '2 / 3',
      padding: 0,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    description: {
      gridRow: '2 / 3',
      gridColumn: '1 / 3',
      padding: '8px 12px 0 0',
    },
    detail: {
      '& p': { 
        margin: '4px 0', 
      },
    },
    link: {
      paddingTop: 4,
      transform: 'translateX(-12px)',
      '& .MuiIconButton-root': {
        padding: '4px',
      },
    },
    linkIcon: {
      '&:hover': {
        color: '#346751',
      },
    },
    githubIcon: {
      '&:hover': {
        color: '#333',
      },
    },
    qiitaIcon: {
      '&:hover': {
        color: '#55c500',
      },
    },
  })
)

export default ProjectWrapper