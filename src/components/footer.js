
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import arrowUp from "../images/arrowUp.png"
import ghIcon from "../images/ghIcon.png"
import liIcon from "../images/linkedInIcon.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        '@media only screen and (max-width: 730px)': {
            width: "100%",
        },
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ width: "20%" }}>
                <a href="#home" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img src={arrowUp} alt="arrowDown" style={{ width: "32px" }} /></a>
            </div>
            <div style={{ width: "20%", display: "flex", justifyContent :"center", alignItems :"center", paddingTop :"20px" }}>
                <a href="https://github.com/mohammad0907" style={{ display: "flex", justifyContent :"center", alignItems :"center", paddingRight: "20px"  }}><img src={ghIcon} alt="arrowDown" /></a>
                <a href="https://www.linkedin.com/in/mohammad-rahman-a579a916a/" style={{  display: "flex", justifyContent :"center", alignItems :"center"  }}><img src={liIcon} alt="linkedIn" /></a>
            </div>
        </div>
    );
}