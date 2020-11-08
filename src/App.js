import React from 'react';
import './App.css';
import { Button, TextField, Select, FormControl,  InputLabel } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import TestRender from './TestFile.js';

function App() {

  // Placeholders for user input
  let username = '';
  let password = '';
  let loginMethod = 'AzureAD';

  return (
      <div class="ParentClass">
        <div class="Children">
          <h1>7Factor Login Page</h1>
          <div class="Child">
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">Login Method</InputLabel>
              <Select native label="Login Method" onChange={(event) => {
                console.log("Login Method: " + event.target.value);
                loginMethod = event.target.value;
              }}>
                <option value={"AzureAD"}>AzureAD</option>
                <option value={"Username/Password"}>User / Pass</option>
              </Select>
            </FormControl>
          </div>
          <div class="Child">
            <TextField required id="username-required" label="Username" variant="outlined" onChange={(event) => {
              username = event.target.value;
            }}></TextField>
          </div>
          <div class="Child">
            <TextField required id="password-required" label="Password" variant="outlined" type="password" onChange={(event) => {
              console.log("Password: " + event.target.value);
              password = event.target.value;
            }}></TextField>
          </div>
          <div class="Child">
            <Button component={Link} to="/src/RouterTest" variant="outlined" className="SubmitButton" color="primary" onClick = {(event) => {
              //alert("Logging in with credentials: USERNAME - " + username + " PASS - " + password + " Login Type - " + loginMethod);
              this.history.push('/TestFile')
            }}> Submit </Button>
          </div> 
        </div>
      </div>
  );
}

export default App;
