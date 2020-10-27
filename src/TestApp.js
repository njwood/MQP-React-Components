import React from 'react';
import './App.css';
import { Button, TextField, Select, FormControl,  InputLabel } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {

  // Placeholders for user input
  let username = '';
  let password = '';
  let loginMethod = 'AzureAD';

  return (
    <Router>
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
                <option value={"7Factor"}>7Factor</option>
              </Select>
            </FormControl>
          </div>
          <div class="Child">
            <TextField required id="username-required" label="Username" variant="outlined" onChange={(event) => {
              username = event.target.value;
            }}></TextField>
          </div>
          <div class="Child">
            <TextField required id="password-required" label="Password" variant="outlined" onChange={(event) => {
              console.log("Password: " + event.target.value);
              password = event.target.value;
            }}></TextField>
          </div>
          <div class="Child">
            <Button variant="outlined" className="SubmitButton" color="primary" onClick = {(event) => {
              console.log("Username: " + event.target.value);
              alert("Logging in with credentials: USERNAME - " + username + " PASS - " + password + " Login Type - " + loginMethod);
            }} onClick={}> Submit </Button>
          </div> 
        </div>
      </div>
    </Router>
  );
}

export default App;
