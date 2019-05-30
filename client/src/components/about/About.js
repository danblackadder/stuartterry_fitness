import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

import heroImage from '../../assets/AboutHero.png';
import premier from '../../assets/Premier.png';

import { ScrollToTop } from '../../helpers/ScrollToTop';
import { Hero } from '../../helpers/Hero';
import { AboutText } from './subcomponents/AboutText';
import { Social } from '../contact/subcomponents/Social';

class About extends Component {
    componentDidMount() {
        ReactGA.pageview('/about');
    }

    render() {
        return (
            <div className="full-width">
                <Helmet>
                    <title>Stuart Terry Fitness - About</title>
                </Helmet>
                <ScrollToTop />
                <Hero image={heroImage} alt="Stuart Terry Fitness - Keeping Things Simple" />
                <div className="container">
                    <h3 className="text-center bold margin">
                        I FREQUENTLY GET ASKED HOW AND WHEN I FIRST STARTED
                        WORKING OUT
                    </h3>

                    <section className="space-inside-top-large flex-column">
                        <AboutText />

                        <div className="flex-column">
                            <Social />

                            <Link to="/contact" className="align-center">
                                <button className="margin-top padding-vertical padding-horizontal-large border-white-solid background-transparent white cursor-pointer background-primary-bottom">
                                    <h3 className="white relative">CONTACT FOR FREE CONSULTATION</h3>
                                </button>
                            </Link>

                            <img
                                className="align-center margin-top-large"
                                src={premier}
                                alt="Premier Qualified"
                            />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default About;
