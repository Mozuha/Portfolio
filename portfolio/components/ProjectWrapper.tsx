import React from 'react'
import { makeStyles, createStyles, Theme, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import theme from './theme'
import { ProjectInfo } from '../interfaces/project'

type Props = {
  projectInfo: ProjectInfo
}

const ProjectWrapper = ({ projectInfo }: Props): JSX.Element => {
  const classes = useStyles(theme)
  
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={projectInfo.image}
        title={projectInfo.imageTitle}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {projectInfo.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {projectInfo.description}
        </Typography>
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
  })
)

export default ProjectWrapper