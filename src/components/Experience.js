
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
                    date="Starting in June 2020"
                    iconStyle={{ background: 'rgb(52, 58, 64)', color: '#fff' }}
                    icon={<WorkOutlineOutlinedIcon />}

                >
                    <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
                    <h3 className="vertical-timeline-element-title"  style = {{marginBottom : "5px"}}>Quicken Loans</h3>
                    <h5 className="vertical-timeline-element-subtitle">Detroit, MI</h5>
                    <p>
                        Pending...
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="May 2019 - Aug 2019"
                    iconStyle={{ background: 'rgb(52, 58, 64)', color: '#fff' }}
                    icon={<WorkOutlineOutlinedIcon />}

                >
                    <h3 className="vertical-timeline-element-title">Technology Intern</h3>
                    <h3 className="vertical-timeline-element-title"  style = {{marginBottom : "5px"}}>TD Auto Finance</h3>
                    <h5 className="vertical-timeline-element-subtitle">Farmington Hills, MI</h5>
                    <p>
                        Worked as a junior developer on the company's internal web application
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2019 - May 2019"
                    iconStyle={{ background: 'rgb(52, 58, 64)', color: '#fff' }}
                    icon={<WorkOutlineOutlinedIcon />}

                >
                    <h3 className="vertical-timeline-element-title">Information Technology Intern </h3>
                    <h3 className="vertical-timeline-element-title"  style = {{marginBottom : "5px"}}>United States Steel</h3>
                    <h5 className="vertical-timeline-element-subtitle">Ecorse, MI</h5>
                    <p>
                        Worked indepently on the company's business application
                     </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}