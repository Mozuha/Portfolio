import React from 'react'
import { makeStyles, createStyles, Grid } from '@material-ui/core'
import ContentWrapper from '../ContentWrapper'
import ProjectWrapper from '../ProjectWrapper'
import { projectInfos } from '../infos/project_infos'

const Projects = (): JSX.Element => {
  const classes = useStyles()
  
  return (
    <ContentWrapper id='projects'>
      <Grid container className={classes.root} spacing={5} justify='center'>
        {projectInfos.map(c => (
          <Grid item className={classes.item} xs={12} lg={4} xl={3}>
            <ProjectWrapper projectInfo={c} />
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
      width: 345,
      height: 440,
      maxWidth: 345,
      maxHeight: 440,
      margin: '10px',
    },
  })
)

export default Projects