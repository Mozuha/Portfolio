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
import clsx from 'clsx'

import { ProjectInfo } from './types'

type Props = {
  projectInfo: ProjectInfo
}

const ProjectWrapper = ({ projectInfo }: Props): JSX.Element => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => setExpanded(!expanded)
  const handleLinkClick = (link: string | undefined) => window.open(link, '_blank')

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
          {projectInfo.detail?.map((c, idx) => (
            <Fade key={idx} in={expanded} timeout={375} mountOnEnter unmountOnExit>
              <Typography
                className={classes.detail}
                variant='body2'
                color='textSecondary'
                component='p'
              >
                {/* seperate term and content */}
                <b>{c.slice(0, c.indexOf(':')+1)}</b><br />
                {c.slice(c.indexOf(':')+1)}
              </Typography>
            </Fade>
          ))}
        </Typography>
        <Fade in={expanded} timeout={375} mountOnEnter unmountOnExit>
          <CardActions
            className={classes.link}
            disableSpacing
          >
            {/* show icon only if the link is existing */}
            {typeof projectInfo.link === 'string' && 
              <IconButton
                className={classes.linkIcon}
                onClick={() => handleLinkClick(projectInfo.link)}
                title='Jump to the site'
              >
                <BiLinkExternal size={28} />
              </IconButton>
            }
            {typeof projectInfo.github === 'string' &&
              <IconButton
                className={classes.githubIcon}
                onClick={() => handleLinkClick(projectInfo.github)}
                title='Jump to the repository'
              >
                <AiOutlineGithub size={28} />
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
      margin: '4px 0',
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
  })
)

export default ProjectWrapper