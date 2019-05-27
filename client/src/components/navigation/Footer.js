import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

class Footer extends Component {
    render() {
        let date = new Date();
        return (
            <div className="flex-column justify-center full-width">
                <footer className="background-secondary padding-large">
                    <div className="container flex-row is-wrapped flex-mobile justify-space-between">
                        <div className="flex-column align-start mobile-full-width">
                            <div>
                                <Link to="/" className="color-primary-hover">
                                    HOME
                                </Link>
                            </div>
                            <div>
                                <Link to="/blog" className="color-primary-hover">
                                    BLOG
                                </Link>
                            </div>
                            <div>
                                <Link to="/contact" className="color-primary-hover">
                                    CONTACT
                                </Link>
                            </div>
                            <div>
                                <Link to="/about" className="color-primary-hover">
                                    ABOUT
                                </Link>
                            </div>
                        </div>
                        <div className="flex-column align-start mobile-full-width">
                            <div>
                                <address>THE WILDES,</address>
                                <address>OXFORD ROAD,</address>
                                <address>DENHAM,</address>
                                <address>BUCKINGHAMSHIRE,</address>
                                <address>UB9 4DG</address>
                            </div>
                            <br />
                            <address>
                                <a
                                    href="tel:07930039207"
                                    className="color-primary-hover fill-hover flex-row">
                                    <FaPhone className="margin-right align-center" />
                                    07930 039207
                                </a>
                            </address>
                            <address>
                                <a
                                    href="mailto:info@stuartterry.fitness"
                                    className="color-primary-hover fill-hover flex-row">
                                    <FaEnvelope className="margin-right align-center" />
                                    INFO@STUARTTERRY.FITNESS
                                </a>
                            </address>
                        </div>
                        <div>
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="Stuart Terry Fitness"
                                    height="120"
                                    className="margin"
                                />
                            </Link>
                        </div>
                    </div>
                </footer>
                <footer className="background-primary flex-row is-wrapped flex-mobile justify-space-between padding">
                    <div className="flex-row is-wrapped flex-mobile">
                        <Link to="/terms-and-conditions">
                            <div className="margin-small">
                                Terms and Conditions
                            </div>
                        </Link>
                        <Link to="/privacy-policy">
                            <div className="margin-small">
                                Privacy Policy
                            </div>
                        </Link>
                    </div>
                    <div className="flex-row is-wrapped flex-mobile">
                        <a
                            href="http://danblackadder.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="margin-small">
                                built by danblackadder
                            </div>
                        </a>
                        <div className="margin-small">
                            &copy; Stuart Terry Fitness {date.getYear() + 1900}
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}


export default withRouter(Footer);
