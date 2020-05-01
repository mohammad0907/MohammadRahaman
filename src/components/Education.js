
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import uniLogo from "../images/uniLogo.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "50%",
    justifyContent: "center",
    '@media only screen and (max-width: 1130px)':{
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  imageCont : {
    width: "25%",
     display :"flex", 
     justifyContent: "center",
     alignItems: "center",
     '@media only screen and (max-width: 715px)':{
        width: "100%;"
     }
  },
  image: {
      width: "147px",
      height: "147px",
      
  },
  description: {
    width: "70%", 
    display : "flex", 
    flexDirection :"column",
    '@media only screen and (max-width: 1130px)':{
        textAlign : "center"
    },
    '@media only screen and (max-width: 715px)':{
        width: "100%;"
     }
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className = {classes.imageCont}>
        <img src = {uniLogo} alt = "uniLogo" className = {classes.image} />
      </div>
      <div className = {classes.description}>
         <h3>University of Michigan - Dearborn</h3>
         <h4>Dearborn, MI</h4>
         <span>2016-2020</span>
         <span>Bachelor of Science in Software Engineering</span>
         <span>Concentration: Web Development</span>
      </div>
    </div>
  );
}