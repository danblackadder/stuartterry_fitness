// Home.js

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import store from '../../store';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../setAuthToken';
import { connect } from 'react-redux';
import { setCurrentUser, logoutUser } from '../../actions/authentication';
import { withRouter } from 'react-router-dom';

import Navbar from './Navbar';
import Article from './Article';
import Image from './Image';
import Login from './Login';

import ReactGA from 'react-ga';

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

class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    ReactGA.pageview('/admin');
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const login = (
      <div>
        <Login />
      </div>
    );

    const admin = (
      <div>
        <Navbar />
        <Route path={'/admin/blog'} component={Article} />
        <Route path={'/admin/images'} component={Image} />
      </div>
    );

    return <div>{isAuthenticated ? admin : login}</div>;
  }
}

Admin.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(Admin));
