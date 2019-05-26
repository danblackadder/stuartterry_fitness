import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ReactGA from 'react-ga';

import { getArticles } from '../../helpers/api/article';
import { SlickSettings } from '../../helpers/SlickSettings';

import hero from './img/Hero.png';
import {
    FaStar,
    FaAngleUp,
    FaFacebookSquare,
    FaInstagram,
} from 'react-icons/fa';

class Home extends Component {
    componentDidMount() {
        getArticles();
        ReactGA.pageview('/');
    }

    render() {
        const blogpost = (
            <div className="container">
                <h3 className="text-center">ADVICE AND TRAINING TIPS</h3>

                <h2 className="text-center">LATEST BLOG</h2>

                <div className="padding-vertical-large flex-row is-wrapped flex-center">
                    {Object.keys(this.props.articles).map(
                        i =>
                            i < 3 ? (
                                <Link
                                    to={
                                        '/blog/' + this.props.articles[i].title
                                    }>
                                    <div
                                        className="margin relative"
                                        style={{
                                            height: 280 + 'px',
                                            width: 280 + 'px',
                                        }}>
                                        <div
                                            className="overflow-hidden background-secondary"
                                            style={{
                                                height: 280 + 'px',
                                                width: 280 + 'px',
                                            }}>
                                            <img
                                                src={this.props.articles[i].img}
                                                className="relative"
                                                style={{
                                                    height: 130 + 'px',
                                                    top: 50 + '%',
                                                    left: 50 + '%',
                                                    transform:
                                                        'translateY(-50%) translateX(-50%)',
                                                }}
                                                alt={
                                                    this.props.articles[i].title
                                                }
                                            />
                                        </div>
                                        <div
                                            className="background-primary absolute flex-column flex-center"
                                            style={{
                                                height: 80 + 'px',
                                                width: 80 + 'px',
                                                bottom: -10 + 'px',
                                                left: -10 + 'px',
                                            }}>
                                            <div>
                                                {this.props.articles[
                                                    i
                                                ].createdDate.slice(8, 10)}
                                            </div>
                                            <div>
                                                {this.props.articles[
                                                    i
                                                ].createdDate.slice(5, 7)}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ) : null,
                    )}
                </div>
            </div>
        );

        return (
            <div className="full-width">
            	<ScrollToTop />
                <img
                    className="full-width"
                    src={hero}
                    alt="Stuart Terry Fitness"
                />
                <div className="container">
                    <h3 className="text-center">
                        PERSONAL TRAINING & ONLINE COACHING
                    </h3>

                    <h2 className="text-center">KEEPING THINGS SIMPLE</h2>

                    <section className="padding-top-large flex-column">
                        <div className="text-center">
                            WHEN IT COMES TO TRAINING I LIKE TO KEEP THING
                            SIMPLE. FROM SIMPLE EXERCISE MOVEMENTS TO SIMPLE
                            NUTRITION PLANS WHICH ARE EASY TO FOLLOW, AND MORE
                            IMPORTANTLY, EASY TO STICK TO. LOSING WEIGHT
                            SHOULDN'T BE A CHORE, AND IF IT IS THEN YOU'RE
                            PROBABLY DOING SOMETHING WRONG AND ARE MORE LIKELY
                            TO FAIL. I LIKE TO BREAK DOWN THE BASICS OF WHAT YOU
                            NEED TO DO IN ORDER TO GET YOUR BODY FIRING THE WAY
                            IT NEEDS TO.<br />
                            <br />I HAVE BEEN A GYM ADDICT FOR THE LAST 10 YEARS
                            AND HAVE BEEN PHYSICALLY FIT FOR THE MAJORITY OF
                            THAT TIME. I AM CONSTANTLY LEARNING AND RESEARCHING
                            ABOUT THE HUMAN ANATOMY AND NUTRITION. I HAVE A REAL
                            PASSION FOR WHAT I DO AND THERE IS NO BETTER FEELING
                            THAN SEEING MY CLIENTS ACHIEVE THEIR BODY AND MENTAL
                            GOALS.
                        </div>
                        <Link to="/about" className="align-center margin-top-large">
                            <button className="padding-vertical padding-horizontal-large border-white-solid background-transparent background-primary-bottom">
                                <h3 className="white relative">READ MORE</h3>
                            </button>
                        </Link>
                    </section>
                </div>
                <div className="background-secondary">
                    <div className="container padding-vertical-large padding-horizontal-small">
                        <div className="text-center margin-large">
                            <Slider {...slickSettings}>
                                <a
                                    href="https://www.yell.com/biz/stuart-terry-fitness-uxbridge-9256755/#reviews"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <div className="margin-bottom">
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                    </div>
                                    "STUART HAS BEEN A GREAT TRAINER PROVIDING
                                    ME WITH THE TOOL TO HELP ME REACH MY GOALS.
                                    HIS KIND AND SUPPORTIVE ATTITUDE HAS FILLED
                                    ME WITH CONFIDENCE AND HELPED ME FIND MY GYM
                                    MOJO"
                                </a>
                                <a
                                    href="https://www.yell.com/biz/stuart-terry-fitness-uxbridge-9256755/#reviews"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <div className="margin-bottom">
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                    </div>
                                    "MY PERSONAL TRAINING SESSIONS WITH STUART
                                    ARE EXCELLENT, I FEEL I'VE MADE GREAT
                                    PROGRESS AND AM ACHIEVING THE VODY I'VE
                                    ALWAYS WANTED"
                                </a>
                                <a
                                    href="https://www.yell.com/biz/stuart-terry-fitness-uxbridge-9256755/#reviews"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <div className="margin-bottom">
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                        <FaStar
                                            size="2em"
                                            color="#6e8e2f"
                                            className="margin-right-small"
                                        />
                                    </div>
                                    "STUART IS VERY KNOWLEDGEABLE AND CLEARLY
                                    HAS A REAL PASSION FOR HIS PROFESSION"
                                </a>
                            </Slider>
                        </div>
                        <div className="padding-top-large flex-column">
                            <h1 className="text-center margin-vertical-large">
                                YOUR JOURNEY STARTS HERE
                            </h1>

                            <p className="text-center margin-small">
                                WE ALL HAVE THE POTENTIAL TO BE HEALTHY AND IN
                                SHAPE. I HAVE THE KNOWLEDGE AND SKILL TO GET YOU
                                THERE FASTER. WHETHER YOU ARE LOOKING TO GET
                                LEAN, LOSE FAT OR SIMPLY ADD MUSCLE, MY CUSTOM
                                TRAINING PLANS AND NUTRITIONAL KNOWLEDGE CAN GET
                                YOU THERE.
                            </p>

                            <p className="text-center margin-small">
                                I CUSTOMISE EVERY CLIENTS TRAINING AND
                                NUTRITIONAL PLAN TO SUIT THEIR LIFESTYLE AND
                                FUTURE GOALS
                            </p>

                            <h4 className="text-center margin bold">
                                YOUR BODY, YOUR RESULTS, YOUR CHOICES
                            </h4>

                            <h5 className="text-center margin-small">
                                STUART TERRY
                            </h5>

                            <div className="margin-top-large flex-column">
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
                                        <FaInstagram color="#fff" size="4em" className="fill-primary-hover" />
                                    </a>
                                </div>
                            </div>

                            <Link to="/contact" className="align-center">
                                <button className="margin-top padding-vertical padding-horizontal-large border-white-solid background-transparent white cursor-pointer background-primary-bottom">
                                    <h3 className="white relative">CONTACT FOR FREE CONSULTATION</h3>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {this.props.articles.length > 0 ? blogpost : null}
            </div>
        );
    }
}

export default Home;
