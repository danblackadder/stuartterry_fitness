import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { MdMenu, MdClose } from 'react-icons/md';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navmenu: false,
        };
    }

    handleNavClick = () => {
        this.setState({
            navmenu: !this.state.navmenu,
        });
    }

    render() {
        const mobileMenu = (
            <div
                className="mobile full-width absolute flex-column background-primary"
                style={{ marginTop: 100 + 'px', zIndex: 9999 }}>
                <Link
                    to="/"
                    onClick={() => this.handleNavClick}
                    className="padding background-primary">
                    <div className="text-center">HOME</div>
                </Link>
                <Link
                    to="/blog"
                    onClick={() => this.handleNavClick}
                    className="padding background-primary">
                    <div className="text-center">BLOG</div>
                </Link>
                <Link
                    to="/contact"
                    onClick={() => this.handleNavClick}
                    className="padding background-primary">
                    <div className="text-center">CONTACT</div>
                </Link>
                <Link
                    to="/about"
                    onClick={() => this.handleNavClick}
                    className="padding background-primary">
                    <div className="text-center">ABOUT</div>
                </Link>
            </div>
        );

        return (
            <nav className="container align-center space-outside">
                <div className="flex-row is-wrapped justify-space-between flex-center mobile-hidden">
                    <Link to="/">
                        <div className="padding-large color-primary-hover">HOME</div>
                    </Link>
                    <Link to="/blog">
                        <div className="padding-large color-primary-hover">BLOG</div>
                    </Link>
                    <Link to="/">
                        <div className="full-height flex-center cursor-pointer">
                            <img
                                src={logo}
                                alt="Stuart Terry Fitness"
                                height="80"
                            />
                        </div>
                    </Link>
                    <Link to="/contact">
                        <div className="padding-large color-primary-hover">
                            CONTACT
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="padding-large color-primary-hover">ABOUT</div>
                    </Link>
                </div>
                <div className="mobile flex-row justify-space-between">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Stuart Terry Fitness"
                            height="50"
                            className="space-outside"
                        />
                    </Link>
                    <div
                        onClick={this.handleNavClick}
                        className="align-center space-outside-large">
                        {!this.state.navmenu ? (
                            <MdMenu size="2em" color="#fff" />
                        ) : (
                            <MdClose size="2em" color="#fff" />
                        )}
                    </div>

                    {this.state.navmenu ? mobileMenu : null}
                </div>
            </nav>
        );
    }
}

export default withRouter(Navigation);
