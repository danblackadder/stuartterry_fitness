// Home.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticles } from '../../actions/article';
import hero from './img/BlogHero.png';
import { FaAngleUp } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-up';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import Truncate from 'react-truncate-html';

class Blog extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.getArticles();
        ReactGA.pageview('/blog');
    }

    handleGa = title => {
        ReactGA.event({
            category: 'Blog',
            action: title,
        });
    };

    render() {
        const blogpost = (
            <div className="container margin-vertical-large">
                {Object.keys(this.props.articles).map(i => (
                    <div className="flex-row is-wrapped flex-mobile">
                        <Link to={'/blog/' + this.props.articles[i].title}>
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
                                        alt={this.props.articles[i].title}
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
                        <div className="flex-column flex-1 relative">
                            <div className="padding-vertical-large padding-horizontal">
                                <h3 className="margin-bottom-small">
                                    {this.props.articles[i].title}
                                </h3>
                                <Truncate
                                    lines={8}
                                    dangerouslySetInnerHTML={{
                                        __html: this.props.articles[i].content,
                                    }}
                                />
                            </div>
                            <Link
                                to={'/blog/' + this.props.articles[i]._id}
                                onClick={this.handleGa(
                                    this.props.articles[i].title,
                                )}
                                className="absolute bottom right color-primary-hover">
                                READ MORE
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        );

        const noblog = (
            <div className="flex-center" style={{ minHeight: 200 + 'px' }}>
                <div>COMING SOON</div>
            </div>
        );

        return (
            <div className="full-width">
                <Helmet>
                    <title>Stuart Terry Fitness - Blog</title>
                </Helmet>
                <ScrollToTop showUnder={160}>
                    <FaAngleUp size="2em" color="#fff" />
                </ScrollToTop>
                <img
                    className="full-width"
                    src={hero}
                    alt="Stuart Terry Fitness - Advice and Training Tips"
                />
                {this.props.articles.length > 0 ? blogpost : noblog}
            </div>
        );
    }
}

Blog.propTypes = {
    getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    articles: state.articles,
});

export default connect(
    mapStateToProps,
    { getArticles },
)(Blog);
