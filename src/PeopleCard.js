import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar , Card, CardActions, CardContent} from '@material-ui/core';
import './PeopleCard.css';

// Data to display here is to be obtained through a JSON through the database per user
// Every instance of the card will make its own db call for the data

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        maxHeight: 400,
    }
});

function PeopleCard(props) {

    const classes = useStyles();

    return (
        <div class="ParentDiv">
                <Card varient="outlined" className={classes.root}>
                    <CardContent>
                    <div class="TopRow">
                        <Avatar alt = "default image" src="./DefaultAvatar.jpg"/>
                        <h2> Employee Name </h2>
                    </div>
                    <div class="MidRow">
                        <label>Average work time per week: </label>
                        <br/>
                        <label>Hours submitted in the last week: </label>
                        <br/>
                        <label>Percent billed this year: </label>
                        <br/>
                        <label>Default Rate: </label>
                    </div>
                    </CardContent>
                </Card>
        </div>
    )
}

export default PeopleCard;
