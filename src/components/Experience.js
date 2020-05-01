
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "100%",
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2019 - Aug 2019"
                    iconStyle={{ background: 'rgb(52, 58, 64)', color: '#fff' }}
                    icon = {<WorkOutlineOutlinedIcon />}
                    
                >
                    <h3 className="vertical-timeline-element-title">Technology Intern - TD Auto Finance</h3>
                    <h4 className="vertical-timeline-element-subtitle">Farmington Hills, MI</h4>
                    <p>
                        Worked as a junior developer on the company's internal web application
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2019 - May 2019"
                    iconStyle={{ background: 'rgb(52, 58, 64)', color: '#fff' }}
                    icon = {<WorkOutlineOutlinedIcon />}
           
                >
                    <h3 className="vertical-timeline-element-title">Information Technology Intern - United States Steel</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ecorse, MI</h4>
                    <p>
                        Worked indepently on the company's business appilication
                     </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Apr 2017 - Dec 2018"
                    iconStyle={{ background: 'rgb(52, 58, 64)', color: '#fff' }}
                    icon = {<WorkOutlineOutlinedIcon />}
                   
                >
                    <h3 className="vertical-timeline-element-title">Sales Assocaite - 7-Eleven</h3>
                    <h4 className="vertical-timeline-element-subtitle">Roseville, MI</h4>
                    <p>
                        Customer service 
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    );
}