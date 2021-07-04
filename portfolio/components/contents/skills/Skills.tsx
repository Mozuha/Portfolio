import React from 'react'
import { makeStyles, createStyles, Theme, Grid, Paper } from '@material-ui/core'

import ContentWrapper from '../ContentWrapper'
import { skillInfos } from './skillInfo'

const Skills = (): JSX.Element => {
  const classes = useStyles()
  
  return (
    <ContentWrapper id='skills'>
      <Grid container className={classes.root} justify='center'>
        {skillInfos.map((c, idx) => (
          <Grid key={idx} item className={classes.item}>
            <Paper className={classes.paper}>
              <img src={c.icon} alt={c.title + '-logo'} width='42' height='42' />
              <p>{c.title}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 20,
      width: '100%',
    },
    item: {
      width: 100,
      height: 100,
      maxWidth: 100,
      maxHeight: 100,
      margin: 20,
      textAlign: 'center',
    },
    paper: {
      backgroundColor: theme.palette.primary.dark,
      width: 80,
      height: 80,
      padding: 10,
      '& img': {
        marginTop: 6,
      },
      '& p': {
        margin: 0,
        marginTop: 6,
      }
    },
  })
)

export default Skills