import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@material-ui/core';

function App() {
  return (
    <div>
      <h1>Sign into 7Factor Timesheet</h1>
      <Button color="Primary" variant="contained">
        This is a button!
        </Button>
        <TextField variant="outlined" label="Username:"></TextField>
        <TextField variant="outlined" label="Password"></TextField>

    </div>
  );
}

export default App;
