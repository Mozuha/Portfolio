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
  Typography
} from '@material-ui/core'
import { MdExpandLess } from 'react-icons/md'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import clsx from 'clsx'
import theme from './theme'
import { ProjectInfo } from '../interfaces/project'

type Props = {
  projectInfo: ProjectInfo
}

const ProjectWrapper = ({ projectInfo }: Props): JSX.Element => {
  const classes = useStyles(theme)
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => setExpanded(!expanded)
  const handleLinkClick = (link: string | undefined) => window.open(link, '_blank')

  return (
    <Card className={classes.card}>
      <CardMedia
        className={clsx(classes.media, {
          [classes.mediaClose]: expanded,
        })}
        image={projectInfo.image}
      />
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
        <Typography className={classes.description} variant='body2' color='textSecondary' component='p'>
          {projectInfo.description}
          <Typography 
            className={clsx(classes.detail, {
              [classes.detailVisible]: expanded,
            })}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {projectInfo.detail}
          </Typography>
        </Typography>
        <CardActions
          className={clsx(classes.link, {
            [classes.linkVisible]: expanded,
          })}
          disableSpacing
        >
          {/* show icon only if the link is existing */}
          {typeof projectInfo.link === 'string' && 
            <IconButton onClick={() => handleLinkClick(projectInfo.link)}>
              <BiLinkExternal size={30}/>
            </IconButton>
          }
          {typeof projectInfo.github === 'string' &&
            <IconButton onClick={() => handleLinkClick(projectInfo.github)}>
              <AiOutlineGithub size={30}/>
            </IconButton>
          }
        </CardActions>
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
      transitionProperty: 'padding-top',
      transitionDuration: '0.5s',
    },
    mediaClose: {
      paddingTop: 0,
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
      padding: '12px 0',
    },
    detail: {
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.complex,
      }),
    },
    detailVisible: {
      opacity: 1,
    },
    link: {
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.complex,
      }),
      paddingLeft: 0,
      transform: 'translateX(-12px)',
    },
    linkVisible: {
      opacity: 1,
    },
  })
)

export default ProjectWrapper