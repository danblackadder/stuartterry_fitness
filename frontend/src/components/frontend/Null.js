// Home.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import classnames from 'classnames';

class Null extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className="flex-center flex-1">
                <div>404 - NOT FOUND</div>
            </div>
        );
    }
}

Null.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Null);
