import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

import heroImage from '../../assets/ContactHero.png';
import premier from '../../assets/Premier.png';

import { FaPhone, FaEnvelope } from 'react-icons/fa';

import { ScrollToTop } from '../../helpers/ScrollToTop';
import { Info } from './subcomponents/Info';
import { Hero } from '../../helpers/Hero';
import ContactForm from './subcomponents/ContactForm';

class Contact extends Component {
    componentDidMount() {
        ReactGA.pageview('/contact');
    }

    render() {
        return (
            <div className="full-width">
                <Helmet>
                    <title>Stuart Terry Fitness - Contact</title>
                </Helmet>
                <ScrollToTop />
                <Hero image={heroImage} alt="Stuart Terry Fitness - Your Journey Starts Here" />
                <div className="container">
                    <div className="padding-vertical-large padding-horizontal-small flex-column">
                        <Info />
                    </div>
                    <ContactForm />
                    <div className="container flex-row is-wrapped justify-space-between padding-large">
                        <div className="flex-column margin-small">
                            LOCATION
                            <address>THE WILDES,</address>
                            <address>OXFORD ROAD,</address>
                            <address>DENHAM,</address>
                            <address>BUCKINGHAMSHIRE,</address>
                            <address>UB9 4DG</address>
                        </div>

                        <div className="flex-column margin-small">
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
                            <img
                                height="50"
                                className="align-end margin-top-large"
                                src={premier}
                                alt="Premier Qualified"
                            />
                        </div>
                    </div>
                </div>

                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.9838666620344!2d-0.5078442838963291!3d51.56852927964516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766f80c08db6db%3A0x233a5753e39213f0!2sStuart+Terry+Fitness!5e0!3m2!1sen!2suk!4v1537118513701"
                    width="100%"
                    height="450"
                />
            </div>
        );
    }
}

export default Contact;
