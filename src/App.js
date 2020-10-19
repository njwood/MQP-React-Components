import React from 'react';
import './App.css';
import { Button, TextField, Select, MenuItem, FormControl, FormHelperText, Container, FormGroup, FormControlLabel } from '@material-ui/core';

function App() {

  const [login, setLoginParameter] = React.useState('');

  const handleChange = (event) => {
    setLoginParameter(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div>
      <label>Sign Into 7Factor Login</label>
      
    </div>
  );
}

export default App;
