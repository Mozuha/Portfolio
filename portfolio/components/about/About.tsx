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
import theme from '../theme'

const About = (): JSX.Element => {
  const classes = useStyles(theme)

  return (
    <ContentWrapper id='about'>
      <Grid container className={classes.root} spacing={5} justify='center'>
        <Grid item className={classes.item}>
          <Paper className={classes.paper}>
            <Avatar alt='Mizuki Hashimoto' src='/img/profpic.jpg' className={classes.avatar} />
            <Divider />
            <Typography variant='h6' component='p'>
              I am Mizuki Hashimoto, recently graduated from Juniata College
              with a major in Computer Science and a minor in Chemistry.
              I am currently seeking an intern or a beginner role as a software
              engineer, but am open to any opportunity because I enjoy challenging
              new things.
            </Typography>
            <Typography variant='h6' component='p'>
              As a developer, I like to consider software as a set of components
              and think about each component what are they, what they do, and how 
              they interact with each other.
            </Typography>
            <Typography variant='h6' component='p'>
              Besides the computer-related topics, I speak Japanese, English,
              and some basic Mandarin. Also, I like traveling, hiking, and listening
              to music.
            </Typography>
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
    },
  })
)

export default About