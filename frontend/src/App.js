// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Main from './components/frontend/Main';
import Admin from './components/admin/Admin';
import ReactGA from 'react-ga';

import './scss/app.scss';

const dotenv = require('dotenv');

dotenv.config();

ReactGA.initialize(process.env.GA);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/';
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const baseUrl = process.env.PUBLIC_URL;

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={baseUrl + '/admin'} component={Admin} />
            <Route path={baseUrl + '/'} component={Main} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
