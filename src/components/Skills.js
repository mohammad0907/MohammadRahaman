
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import jsLogo from "../images/js.jpg"
import javaLogo from "../images/java.jpg"
import cSharpLogo from "../images/cSharp.png"
import cppLogo from "../images/cpp.png"
import html5Logo from "../images/html5.png"
import css3Logo from "../images/css3logo.png"
import reactLogo from "../images/react.png"
import angularLogo from "../images/angular.png"
import materialUILogo from "../images/materialUI.png"
import bootstrapLogo from "../images/bootstrap.png"
import nodejsLogo from "../images/nodejs.png"
import dotnetLogo from "../images/dotnet.png"
import mySqlLogo from "../images/MySQL-Logo.jpg"
import mongoDbLogo from "../images/mongodb.jpg"
import herokuLogo from "../images/heroku.png"
import awsLogo from "../images/aws.jpg"
import vsLogo from "../images/vs.png"
import vsCodeLogo from "../images/vscode.png"
import netBeansLogo from "../images/netbeans.png"
import asLogo from "../images/as.png"
import gitHubLogo from "../images/gitHub.png"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "100%",
    '@media only screen and (max-width: 730px)':{
        width: "100%",
    },
    '& > *': {

    },
  },
  lang: {
    display : "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems :"center",
    margin: "20px",
    flexWrap : "wrap",
    textAlign :"center"

  },
  itemContainer:{
    display : "flex",
    width : "100%",
    justifyContent: "center",
    alignItems :"center",
    padding: "20px",
    flexWrap : "wrap"
  },
  images : {
      width: "90px",
      height: "90px",
      margin: "15px",
      '@media only screen and (max-width: 400px)':{
       width: "75px",
       height: "75px",
    }
     
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className = {classes.lang}>
        <h5>Programming Languages</h5>
        <div className = {classes.itemContainer} >
            <img src = {javaLogo} alt = "javaLogo" className = {classes.images} />
            <img src = {jsLogo} alt = "jsLogo" className = {classes.images} />
            <img src = {cSharpLogo} alt = "cSharp" className = {classes.images} />
            <img src = {cppLogo} alt = "jsLogo" className = {classes.images} />
            <img src = {html5Logo} alt = "jsLogo" className = {classes.images} />
            <img src = {css3Logo} alt = "jsLogo" className = {classes.images} />
        </div>
      </div>

      <div className = {classes.lang}>
        <h5>Web Development Technologies</h5>
        <div className = {classes.itemContainer} >
            <img src = {reactLogo} alt = "reactLogo" className = {classes.images} />
            <img src = {angularLogo} alt = "angularLogo" className = {classes.images} />
            <img src = {nodejsLogo} alt = "nodejsLogo" className = {classes.images} />
            <img src = {dotnetLogo} alt = "dotnetLogo" className = {classes.images} />
            <img src = {materialUILogo} alt = "materialuiLogo" className = {classes.images} />
            <img src = {bootstrapLogo} alt = "bootstrapLogo" className = {classes.images} />
        </div>
      </div>

      <div className = {classes.lang}>
        <h5>Databases</h5>
        <div className = {classes.itemContainer} >
            <img src = {mySqlLogo} alt = "mySqlLogo" className = {classes.images} />
            <img src = {mongoDbLogo} alt = "mongoDbLogo" className = {classes.images} />
        </div>
      </div>

      <div className = {classes.lang}>
        <h5>Web Hosting</h5>
        <div className = {classes.itemContainer} >
            <img src = {herokuLogo} alt = "herokuLogo" className = {classes.images} />
            <img src = {awsLogo} alt = "awsLogo" className = {classes.images} />
        </div>
      </div>

      <div className = {classes.lang}>
        <h5>Platform & Tools</h5>
        <div className = {classes.itemContainer} >
            <img src = {vsLogo} alt = "vsLogo" className = {classes.images} />
            <img src = {vsCodeLogo} alt = "vsCodeLogo" className = {classes.images} />
            <img src = {netBeansLogo} alt = "netbeansLogo" className = {classes.images} />
            <img src = {asLogo} alt = "asLogo" className = {classes.images} />
            <img src = {gitHubLogo} alt = "vsCodeLogo" className = {classes.images} />
        </div>
      </div>
    </div>
  );
}