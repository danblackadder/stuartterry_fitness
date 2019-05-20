// Home.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getArticleByTitle, getArticles } from '../../actions/article';
import ScrollToTop from 'react-scroll-up';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { FaAngleUp } from 'react-icons/fa';
import {
    FacebookShareButton,
    FacebookIcon,
    GooglePlusShareButton,
    GooglePlusIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share';

class BlogPost extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            title: '',
            content: '',
            img: '',
        };
    }

    componentDidMount() {
        this.props.getArticles();
        this.props
            .getArticleByTitle(this.props.match.params.title)
            .then(res => {
                console.log(res);
                this.setState({
                    id: res._id,
                    title: res.title,
                    content: res.content,
                    img: res.img,
                });
            });
        ReactGA.pageview('/blog/' + this.props.match.params.title);
    }

    render() {
        const blogpost = (
            <div>
                <img
                    className="full-width"
                    src={this.state.img}
                    alt="Stuart Terry Fitness - Exclusive Personal Training"
                />

                <div className="container padding-large">
                    <h1 className="text-center">{this.state.title}</h1>
                    <div
                        className="margin-vertical-large text-center"
                        dangerouslySetInnerHTML={{
                            __html: this.state.content,
                        }}
                    />
                    <div className="flex-column margin-vertical-large">
                        <h3 className="text-center margin-bottom">
                            If you enjoyed this blog post, please share with
                            your friends on social media!
                        </h3>
                        <div className="flex-row is-wrapped justify-space-around">
                            <FacebookShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>
                            <GooglePlusShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <GooglePlusIcon size={32} round />
                            </GooglePlusShareButton>
                            <LinkedinShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                            <TwitterShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <TwitterIcon size={32} round />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                            <PinterestShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <PinterestIcon size={32} round />
                            </PinterestShareButton>
                            <RedditShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <RedditIcon size={32} round />
                            </RedditShareButton>
                            <EmailShareButton
                                url={
                                    'https://stuartterry.fitness/blog/' +
                                    encodeURIComponent(this.state.title.trim())
                                }
                                quote={this.state.title}>
                                <EmailIcon size={32} round />
                            </EmailShareButton>
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="full-width">
                <Helmet>
                    <title>
                        Stuart Terry Fitness - {this.props.match.params.title}
                    </title>
                </Helmet>
                <ScrollToTop showUnder={160}>
                    <FaAngleUp size="2em" color="#fff" />
                </ScrollToTop>
                {this.state.id ? blogpost : null}
            </div>
        );
    }
}

BlogPost.propTypes = {
    getArticleByTitle: PropTypes.func.isRequired,
    getArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    articles: state.articles,
});

export default connect(
    mapStateToProps,
    { getArticleByTitle, getArticles },
)(BlogPost);
