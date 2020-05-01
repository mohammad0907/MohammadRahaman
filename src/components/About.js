
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "60%",
    '@media only screen and (max-width: 730px)':{
        width: "100%",
    },
    '& > *': {
      margin: theme.spacing(1),
      width:"100%",
      height: "auto",
      backgroundColor: "white"
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <p>As a Software Developer I'm always interested in learning more about new and creative ways to write code. College has given me a good introduction but I would like to take my skills and abilities to a higher level. 
          I have a passion for Front-End Development and love making unique and seemless designs and functionality. Currently, I have my sight set on Back-end Development. In a couple of month, I want to be fluent in Back-end Development and become a Full Stack Web Developer.I also enjoy working on Mobile Applications and Web Apps/Sites. </p>
      </Paper>
    </div>
  );
}