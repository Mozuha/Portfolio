import React from 'react'
import { makeStyles, createStyles, Grid } from '@material-ui/core'

import ContentWrapper from '../ContentWrapper'
import ExperienceWrapper from './ExperienceWrapper'
import { experiencesInfo } from './experiencesInfo'

const Experiences = ({ language }: any): JSX.Element => {
  const classes = useStyles()

  return (
    <ContentWrapper id='experiences'>
      <Grid container className={classes.root} spacing={5} justify='center'>
        {experiencesInfo.map((c, idx) => (
          <Grid key={idx} item className={classes.item}>
            <ExperienceWrapper id={idx} experienceInfo={c} language={language} />
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: 0,
      width: '100%',
    },
    item: {
      maxWidth: 765,
      margin: '10px',
    },
  })
)

export default Experiences