import React from 'react'
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Paper,
  Typography,
  Avatar,
  Divider
} from '@material-ui/core'

import ContentWrapper from '../ContentWrapper'
import { textEn } from '../../texts/textEn'
import { textJa } from '../../texts/textJa'


const About = ({ language }: any): JSX.Element => {
  const classes = useStyles()

  // change only info available in other language
  const t = language === 'ja' ? textJa : textEn

  return (
    <ContentWrapper id='about'>
      <Grid container className={classes.root} spacing={5} justify='center'>
        <Grid item className={classes.item}>
          <Paper className={classes.paper}>
            <Avatar alt='Mizuki Hashimoto' src='/img/profpic.jpg' className={classes.avatar} />
            <Divider />
            <Typography variant='h6' component='p'>{t.ABOUT.DESCRIPTION1}</Typography>
            <Typography variant='h6' component='p'>{t.ABOUT.DESCRIPTION2}</Typography>
            <Typography variant='h6' component='p'>{t.ABOUT.DESCRIPTION3}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </ContentWrapper>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      width: '100%',
    },
    item: {
      margin: 10,
      maxWidth: 900,
    },
    paper: {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[5],
      padding: 50,
      '& p': {
        margin: '20px 0',
      },
    },
    avatar: {
      margin: 'auto',
      marginBottom: 30,
      width: 250,
      height: 250,
      boxShadow: theme.shadows[10],
      transition: 'transform 0.5s',
      '&:hover': {
        transform: 'rotate(-5deg) scale(1.1)',
      },
    },
  })
)

export default About