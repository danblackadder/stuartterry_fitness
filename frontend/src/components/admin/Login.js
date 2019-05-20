// Login.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authentication';
import classnames from 'classnames';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.loginUser(user);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/admin');
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container padding-large">
                <h2 className="text-center">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="flex-column margin-vertical">
                        {errors.email && (
                            <div className="danger">{errors.email}</div>
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            className="padding-small"
                            name="email"
                            onChange={this.handleInputChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="flex-column margin-vertical">
                        {errors.password && (
                            <div className="danger">{errors.password}</div>
                        )}
                        <input
                            type="password"
                            placeholder="Password"
                            className="padding-small"
                            name="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}
                        />
                    </div>
                    <div className="flex-column margin-vertical">
                        <button
                            type="submit"
                            className="align-end padding-vertical padding-horizontal-large border background-transparent white cursor-pointer">
                            <h3>LOGIN</h3>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    { loginUser },
)(Login);
