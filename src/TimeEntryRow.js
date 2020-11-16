import Typography from '@material-ui/core/Typography';
import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles'; 
import Input from '@material-ui/core/Input';

// Data obtained from the database
let totalHours = 0;
let clientName = "ClientName"
let projectName = "ProjectName"

const useStyles = makeStyles(({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
    },

    textFieldStyle: {
        width: 75,
        margin: 20,
    }
}));

export default function TimeEntryRow() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Typography varient="h1" component="h6"> {projectName}</Typography>
                <Typography varient="h6" component="h1"> {clientName}</Typography>
            </div>
            <div>
                <TextField variant="outlined" className={classes.textFieldStyle} defaultValue="0" />
                <TextField variant="outlined" className={classes.textFieldStyle} defaultValue="0"/>
                <TextField variant="outlined" className={classes.textFieldStyle} defaultValue="0"/>
                <TextField variant="outlined" className={classes.textFieldStyle} defaultValue="0"/>
                <TextField variant="outlined" className={classes.textFieldStyle} defaultValue="0"/>
                <TextField variant="outlined" className={classes.textFieldStyle} defaultValue="0"/>
                <TextField variant="outlined" className={classes.textFieldStyle} defaultValue="0"/>
            </div>
            <Typography>Total: {totalHours} </Typography>
        </div>
    );
}