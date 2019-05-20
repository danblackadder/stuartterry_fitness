import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import hero from './img/AboutHero.png';
import premier from './img/Premier.png';
import { FaAngleUp, FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-up';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

class About extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        ReactGA.pageview('/about');
    }

    render() {
        return (
            <div className="full-width">
                <Helmet>
                    <title>Stuart Terry Fitness - About</title>
                </Helmet>
                <ScrollToTop showUnder={160}>
                    <FaAngleUp size="2em" color="#fff" />
                </ScrollToTop>
                <img
                    className="full-width"
                    src={hero}
                    alt="Stuart Terry Fitness - Keeping Things Simple"
                />
                <div className="container">
                    <h3 className="text-center bold margin">
                        I FREQUENTLY GET ASKED HOW AND WHEN I FIRST STARTED
                        WORKING OUT
                    </h3>

                    <section className="space-inside-top-large flex-column">
                        <p className="text-center">
                            I FIRST STARTED LIFTING WEIGHTS AT A YOUNG AGE, ME
                            AND MY FRIENDS WOULD LAY ON A WALL IN THE BACK
                            GARDEN AND BENCH PRESS WITH MAKE SHIFT WEIGHTS NOT
                            REALLY KNOWING WHAT WE WERE DOING BUT TRYING TO GET
                            MUSCLES. I JOINED A GYM DURING MY LATE TEENS BUT
                            BACK THEN I WAS MORE ABOUT HAVING A 6 PACK THAN BIG
                            MUSCLES. I ALWAYS WANTED TO GROW BUT LACKED THE
                            KNOWLEDGE AND FAILED TO REACH MY GOALS FOR SO MANY
                            YEARS.<br />
                            <br />GROWING UP, I PLAYED FOOTBALL AND ENJOYED A
                            VARIETY OF EXTREME SPORTS. I SOON FOUND OUT THAT
                            WORKING OUT PLAYED A HUGE ROLE IN IMPROVING MY
                            PERFORMANCE. I AM NOW A FULLY QUALIFIED LEVEL 3
                            PERSONAL TRAINER WITH A LOT OF KNOWLEDGE ON THE
                            SCIENCE OF EXERCISE AND NUTRITION.
                        </p>

                        <h3 className="text-center bold margin-large">
                            NOW I GET TO GIVE BACK, BY HELPING OTHER PEOPLE
                            REACH THEIR GOALS.
                        </h3>

                        <p className="text-center">
                            I’VE WORKED WITH CLIENTS OF ALL SIZES AND
                            SITUATIONS, PEOPLE WITH THE DESIRE TO IMPROVE, WHO
                            WANT TO TAKE THEIR FITNESS TO THE NEXT LEVEL AND
                            STRIVE FOR THE BEST. I CAN HELP YOU GET THE RESULTS
                            THAT YOU HAVE BEEN SEARCHING FOR. IF YOU WANT IT BAD
                            ENOUGH AND YOU ARE WILLING TO PUT THE WORK AND
                            DEDICATION IN, I WILL PROVIDE THE ROAD MAP.
                            <br />
                            <br />JUST LIKE YOU, I STRIVE FOR PERFECTION. I AIM
                            TO LOOK THE BEST I CAN, AND I AIM TO BE THE
                            HEALTHIEST I CAN BE. I KNOW WHAT IT’S LIKE TO LOSE
                            MONTHS OF PROGRESS IN A SHORT AMOUNT OF TIME DUE TO
                            FALLING OFF TRACK AND I UNDERSTAND HOW FRUSTRATING
                            IT CAN BE TRAINING FOR YEARS AND NOT SEEING ANY
                            RESULTS. I AM HERE TO PROVIDE ACCOUNTABILITY,
                            STRUCTURE, AND MOTIVATION FOR YOU TO SUCCEED.
                            TRAINING WITH ME, YOU WILL BE CHALLENGED PHYSICALLY
                            RESULTING IN HIGH END RESULTS THAT WILL BREAK YOU
                            OUT OF A PLATEAU AND GET YOU EXCITED TO WORK OUT
                            AGAIN.<br />
                            <br />WHEN IT COMES TO TRAINING I LIKE TO KEEP
                            THINGS SIMPLE, FROM SIMPLE EXERCISE MOVEMENTS TO
                            SIMPLE NUTRITION PLANS WHICH ARE EASY TO FOLLOW AND
                            MORE IMPORTANTLY EASY TO STICK TO. LOSING WEIGHT
                            SHOULDN’T BE A CHORE, IF IT IS THEN YOU’RE PROBABLY
                            DOING SOMETHING WRONG AND ARE MORE LIKELY PRONE TO
                            FAIL. I LIKE TO BREAK DOWN THE BASICS OF WHAT WE DO
                            IN THE GYM AND WHY WE DO IT TO A LEVEL WHERE YOU
                            REALISE WHAT YOU NEED TO DO TO GET YOUR BODY FIRING
                            THE WAY IT NEEDS TO.<br />
                            <br />I HAVE BEEN A GYM ENTHUSIAST FOR YEARS AND
                            BEEN PHYSICALLY FIT FOR MOST OF MY LIFE. I AM
                            CONSTANTLY LEARNING AND RESEARCHING ABOUT THE HUMAN
                            ANATOMY AND NUTRITION. I HAVE A REAL PASSION FOR
                            WHAT I DO AND THERE IS NO BETTER FEELING THAN SEEING
                            MY CLIENTS ACHIEVE BODY AND PHYSICAL GOALS.
                        </p>

                        <h3 className="text-center bold padding-large">
                            HEAD OVER TO MY CONTACT PAGE AND LET’S GET THIS
                            JOURNEY STARTED!
                        </h3>

                        <div className="flex-column">
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
                                        <FaInstagram
                                            color="#fff"
                                            size="4em"
                                            className="fill-primary-hover"
                                        />
                                    </a>
                                </div>
                            </div>

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

About.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(About);
