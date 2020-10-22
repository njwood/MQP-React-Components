import React from 'react';
import './App.css';
import { Button, TextField, Select, MenuItem, FormControl, FormHelperText, Container, FormGroup, FormControlLabel, InputLabel } from '@material-ui/core';

function App() {

  return (
    <div class="ParentClass">
      <div class="Children">
        <h1>7Factor Login Page</h1>
        <div class="Child">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">Login Method</InputLabel>
            <Select native label="Login Method">
              <option value={"AzureAD"}>AzureAD</option>
              <option value={"7Factor"}>7Factor</option>
            </Select>
          </FormControl>
        </div>
        <div class="Child">
          <TextField required id="username-required" label="Username" variant="outlined"></TextField>
        </div>
        <div class="Child">
          <TextField required id="password-required" label="Password" variant="outlined"></TextField>
        </div>
        <div class="Child">
          <Button variant="outlined"> Submit </Button>
        </div>

      </div>
    </div>
  );
}

export default App;
