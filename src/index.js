import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PeopleCard from './PeopleCard';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path = "/" render ={() => <App />}></Route>
      <Route exact path="/PeopleCard" render ={() => <PeopleCard />}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
