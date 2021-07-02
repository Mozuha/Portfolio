import React from 'react'
import { 
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core'
import theme from '../theme'
import { ExperiencesInfo } from './types'

type Props = {
  experiencesInfo: ExperiencesInfo
}

const ExperienceWrapper = ({ experiencesInfo }: Props): JSX.Element => {
  const classes = useStyles(theme)

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Typography variant='h5' component='h3'>
            {experiencesInfo.title}
          </Typography>
          <Typography gutterBottom variant='subtitle2' component='h5'>
            {experiencesInfo.period} | {experiencesInfo.place}
          </Typography>
        </div>
        <Typography gutterBottom variant='subtitle1' component='h4'>
          {experiencesInfo.position}
        </Typography>
        <Divider />
        <Typography className={classes.description} variant='body1' color='textSecondary' component='p'>
          <b>Description:</b><br />
          {experiencesInfo.description}
        </Typography>
        <Typography className={classes.description} variant='body1' color='textSecondary' component='p'>
          <b>Tech Stack:</b><br />
          {experiencesInfo.techStack}
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
    },
    content: {
      padding: 12,
      '&:last-child': {
        paddingBottom: 8,
      },
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      lineHeight: 1,
    },
    description: {
      padding: '8px 0 0 0',
    },
  })
)

export default ExperienceWrapper