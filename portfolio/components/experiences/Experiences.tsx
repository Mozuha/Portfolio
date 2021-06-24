import React from 'react'
import { makeStyles, createStyles, Grid } from '@material-ui/core'
import ContentWrapper from '../ContentWrapper'
import ExperienceWrapper from './ExperienceWrapper'
import { experiencesInfos } from './experience_infos'
import theme from '../theme'

const Experiences = (): JSX.Element => {
  const classes = useStyles(theme)

  return (
    <ContentWrapper id='experiences'>
      <Grid container className={classes.root} spacing={5} justify='center'>
        {experiencesInfos.map((c, idx) => (
          <Grid key={idx} item className={classes.item}>
            <ExperienceWrapper experiencesInfo={c} />
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
      width: 765,
      height: 340,
      maxWidth: 765,
      maxHeight: 340,
      margin: '10px',
    },
  })
)

export default Experiences