
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
        <p>As a Software Developer I'm always interested in learning more about new and creative ways to write code. College has given me a good introduction butI would like to take my skills and abilities to a higher level. I have a passion for Front-End Development and love making unique and seemless designs and functionality. I enjoy working on Mobile Applications and Web Apps/Sites. </p>
        <p>As an Entrepreneur I want to creative professional level designs and release products users can enjoy and share. I intend on starting my own business to help others who want to become entrepreneurs who need business marketing assests. I also want to make a difference in the industry by opening doors for those who may not have many opportunies to progress in Tech.</p>
      </Paper>
    </div>
  );
}