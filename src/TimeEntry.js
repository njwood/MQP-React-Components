import React from 'react';
import { Card, CardContent, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';
import './TimeEntry.css';

let d = new Date();
console.log("Date " + d.getDate() + " " + d.getMonth() + " " + d.getFullYear());

let month = d.getMonth();
let day = d.getDate();
let year = d.getFullYear();

const useStyles = makeStyles(({
    dateHeader: {
        fontWeight: 100,
    },

    cardSize: {
        maxWidth: 500,
        maxHeight: 600,
    }, 

    dateHeaderMargin: {
        marginLeft: 100,
    },
}));

export default function TimeEntry() {

    const classes = useStyles;

    return (
        <div>
            <Card classes={classes.cardSize}>
                <CardContent>
                    <div className="CardTopRow">
                        <IconButton edge="start"><ArrowLeftIcon /></IconButton>
                            <Typography component="h1" varient="h6" color="inheret" className={classes.dateHeader}>
                                Week of {month}/{day}/{year}
                            </Typography>
                        <IconButton><ArrowRightIcon /></IconButton>
                        <Typography className={classes.dateHeaderMargin}> Mon </Typography>
                        <Typography classes={classes.dateHeaderMargin}> Tues </Typography>
                        <Typography classes={classes.dateHeaderMargin}> Wed </Typography>
                        <Typography classes={classes.dateHeaderMargin}> Thurs </Typography>
                        <Typography classes={classes.dateHeaderMargin}> Fri </Typography>
                        <Typography classes={classes.dateHeaderMargin}> Sat </Typography>
                        <Typography classes={classes.dateHeaderMargin}> Sun </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}