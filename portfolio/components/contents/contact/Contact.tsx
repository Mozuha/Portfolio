import React from 'react'
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Paper,
  IconButton,
} from '@material-ui/core'
import { MdMailOutline } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

import ContentWrapper from '../ContentWrapper'

const Contact = (): JSX.Element => {
  const classes = useStyles()
  const handleLinkClick = (link: string | undefined) => window.open(link, '_blank')

  return (
    <ContentWrapper id='contact'>
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.container} spacing={5} justify='center'>
          <Grid item className={classes.item}>
            <IconButton
              className={classes.linkedinIcon}
              onClick={() => handleLinkClick('https://www.linkedin.com/in/mizukihashimoto/')}
              title="See Mizuki's linkedin"
            >
              <AiFillLinkedin size={42} />
            </IconButton>
            <a
              className={classes.text}
              aria-label="See Mizuki's linkedin"
              href='https://www.linkedin.com/in/mizukihashimoto/'
            >
              linkedin.com/in/mizukihashimoto
            </a>
          </Grid>
          <Grid item className={classes.item}>
            <IconButton
              className={classes.githubIcon}
              onClick={() => handleLinkClick('https://github.com/Mozuha')}
              title="See Mizuki's github"
            >
              <AiOutlineGithub size={42} />
            </IconButton>
            <a
              className={classes.text}
              aria-label="See Mizuki's github"
              href='https://github.com/Mozuha'
            >
              github.com/Mozuha
            </a>
          </Grid>
          <Grid item className={classes.item}>
            <a
              aria-label='Email Mizuki'
              href='mailto:100zuha.shikitomi@gmail.com'
            >
              <IconButton className={classes.emailIcon} title='Email Mizuki'>
                <MdMailOutline size={42} />
              </IconButton>
            </a>
            <a
              className={classes.text}
              aria-label='Email Mizuki'
              href='mailto:100zuha.shikitomi@gmail.com'
            >
              100zuha.shikitomi@gmail.com
            </a>
          </Grid>
        </Grid>
      </Paper>
      </div>
    </ContentWrapper>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: {
      maxWidth: 900,
      margin: 30,
      padding: 50,
      backgroundColor: theme.palette.primary.dark,
      boxShadow: theme.shadows[5],
    },
    container: {
      margin: 'auto',
      width: '100%',
    },
    item: {
      width: 'inherit',
      '& a': {
        color: theme.palette.text.primary,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
    linkedinIcon: {
      '&:hover': {
        color: '#0077b5',
      },
    },
    githubIcon: {
      '&:hover': {
        color: '#333',
      },
    },
    emailIcon: {
      '&:hover': {
        color: '#ea4335',
      },
    },
    text: {
      paddingLeft: 20,
    },
  })
)

export default Contact