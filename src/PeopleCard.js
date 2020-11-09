import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar , Card, CardActions, CardContent} from '@material-ui/core';
import './PeopleCard.css';

function PeopleCard(props) {
    return (
        <div class="ParentDiv">
                <Card varient="outlined">
                    <CardContent>
                    <div class="TopRow">
                        <Avatar alt = "default image" src="./DefaultAvatar.jpg"/>
                        <label> Employee Name </label>
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
