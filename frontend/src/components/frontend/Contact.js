import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postContact } from '../../actions/contact';
import hero from './img/ContactHero.png';
import { FaAngleUp, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-up';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import premier from './img/Premier.png';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            subject: '',
            name: '',
            email: '',
            contact: '',
            content: '',
            errors: {},
            response: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ReactGA.pageview('/contact');
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        let errors = this.state.errors;
        errors[e.target.name] = '';
        this.setState({
            errors: errors,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const contact = {
            subject: this.state.subject,
            content: this.state.content,
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            response: '',
        };
        this.props.postContact(contact).then(res => {
            this.setState({
                subject: '',
                name: '',
                email: '',
                contact: '',
                content: '',
                response: res.data,
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="full-width">
                <Helmet>
                    <title>Stuart Terry Fitness - Contact</title>
                </Helmet>
                <ScrollToTop showUnder={160}>
                    <FaAngleUp size="2em" color="#fff" />
                </ScrollToTop>
                <img
                    className="full-width"
                    src={hero}
                    alt="Stuart Terry Fitness - Your Journey Starts Here"
                />
                <div className="container">
                    <div className="padding-vertical-large padding-horizontal-small flex-column">
                        <h1 className="text-center margin-vertical-large">
                            YOUR JOURNEY STARTS HERE
                        </h1>

                        <p className="text-center margin-small">
                            WE ALL HAVE THE POTENTIAL TO BE HEALTHY AND IN
                            SHAPE. I HAVE THE KNOWLEDGE AND SKILL TO GET YOU
                            THERE FASTER. WHETHER YOU ARE LOOKING TO GET LEAN,
                            LOSE FAT OR SIMPLY ADD MUSCLE, MY CUSTOM TRAINING
                            PLANS AND NUTRITIONAL KNOWLEDGE CAN GET YOU THERE.
                        </p>

                        <p className="text-center margin-small">
                            I CUSTOMISE EVERY CLIENTS TRAINING AND NUTRITIONAL
                            PLAN TO SUIT THEIR LIFESTYLE AND FUTURE GOALS
                        </p>

                        <h4 className="text-center margin bold">
                            YOUR BODY, YOUR RESULTS, YOUR CHOICES
                        </h4>

                        <h5 className="text-center margin-small">
                            STUART TERRY
                        </h5>

                        <p className="text-center margin-small">
                            IF YOU ARE OVER 18 OR UNDER 65 PLEASE CONTACT ME FOR
                            MORE INFORMATION
                        </p>
                    </div>

                    <div className="flex-column">
                        <p className="text-center">
                            Like, Share and Follow my social accounts
                        </p>
                        <div className="align-center padding-top">
                            <a
                                href="https://www.facebook.com/stuartterryfitness/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="margin-horizontal">
                                <FaFacebookSquare
                                    color="#fff"
                                    size="4em"
                                    className="fill-primary-hover"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/stuartterryfitness/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="margin-horizontal">
                                <FaInstagram
                                    color="#fff"
                                    size="4em"
                                    className="fill-primary-hover"
                                />
                            </a>
                        </div>
                    </div>

                    <form
                        onSubmit={this.handleSubmit}
                        className="margin-top-large padding-horizontal-small">
                        <div className="margin-bottom-small">
                            CONTACT US
                        </div>
                        <div className="flex-column margin-vertical">
                            {errors.name && (
                                <div className="danger">{errors.name}</div>
                            )}
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="padding-small border-transparent border-primary-hover"
                                onChange={this.handleInputChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="flex-column margin-vertical">
                            {errors.contact && (
                                <div className="danger">{errors.contact}</div>
                            )}
                            <input
                                type="tel"
                                placeholder="Contact"
                                name="contact"
                                className="padding-small border-transparent border-primary-hover"
                                onChange={this.handleInputChange}
                                value={this.state.contact}
                            />
                        </div>
                        <div className="flex-column margin-vertical">
                            {errors.email && (
                                <div className="danger">{errors.email}</div>
                            )}
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="padding-small border-transparent border-primary-hover"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                        </div>
                        <div className="flex-column margin-vertical">
                            {errors.subject && (
                                <div className="danger">{errors.subject}</div>
                            )}
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                className="padding-small border-transparent border-primary-hover"
                                onChange={this.handleInputChange}
                                value={this.state.subject}
                            />
                        </div>
                        <div className="flex-column margin-vertical">
                            {errors.content && (
                                <div className="danger">{errors.content}</div>
                            )}
                            <textarea
                                type="text"
                                placeholder="Enquiry..."
                                name="content"
                                className="padding-small border-transparent border-primary-hover"
                                rows="10"
                                onChange={this.handleInputChange}
                                value={this.state.content}
                            />
                        </div>
                        <div className="margin-vertical">
                            <div className="flex-row justify-space-between">
                                <div className="align-start primary">
                                    {this.state.response}
                                </div>
                                <button
                                    type="submit"
                                    className="padding-vertical padding-horizontal-large border-white-solid background-transparent white cursor-pointer background-primary-bottom">
                                    <h3 className="white relative">SUBMIT</h3>
                                </button>
                            </div>
                        </div>
                    </form>
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

Contact.propTypes = {
    postContact: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    { postContact },
)(Contact);
