// Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        return (
            <nav className="full-width background-secondary flex-row justify-space-between padding-large">
                <div className="margin-left-large">
                    <Link to="/admin" className="flex-center">
                        <h1>admin panel</h1>
                    </Link>
                </div>
                <div className="flex-row margin-right-large">
                    <Link
                        to="/admin/images"
                        className="margin-vertical margin-horizontal-large cursor-pointer color-primary-hover flex-center">
                        images
                    </Link>
                    <Link
                        to="/admin/blog"
                        className="margin-vertical margin-horizontal-large cursor-pointer color-primary-hover flex-center">
                        blog
                    </Link>
                    <div
                        className="margin-vertical margin-horizontal-large cursor-pointer color-primary-hover flex-center"
                        onClick={this.onLogout.bind(this)}>
                        logout
                    </div>
                </div>
            </nav>
        );
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { logoutUser },
)(withRouter(Navbar));
