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

import { ExperienceInfo } from './types'
import { textEn } from '../../texts/textEn'
import { textJa } from '../../texts/textJa'

type Props = {
  id: number
  experienceInfo: ExperienceInfo
  language: string
}

const ExperienceWrapper = ({ id, experienceInfo, language }: Props): JSX.Element => {
  const classes = useStyles()

  // change only info available in other language
  const t = language === 'ja' ? textJa : textEn
  experienceInfo.position = t.EXPERIENCES[id]!.POSITION
  experienceInfo.description = t.EXPERIENCES[id]!.DESCRIPTION

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div className={classes.header}>
          <Typography variant='h5' component='h3'>
            {experienceInfo.title}
          </Typography>
          <Typography gutterBottom variant='subtitle2' component='h5'>
            {experienceInfo.period} | {experienceInfo.place}
          </Typography>
        </div>
        <Typography gutterBottom variant='subtitle1' component='h4'>
          {experienceInfo.position}
        </Typography>
        <Divider />
        <Typography className={classes.description} variant='body1' color='textSecondary' component='p'>
          <b>Description:</b><br />
          {experienceInfo.description}
        </Typography>
        <Typography className={classes.description} variant='body1' color='textSecondary' component='p'>
          <b>Tech Stack:</b><br />
          {experienceInfo.techStack}
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