import React, { Component } from 'react';
import ReactGA from 'react-ga';

import { getArticles } from '../../helpers/api/article';

import heroImage from '../../assets/Hero.png';

import { ScrollToTop } from '../../helpers/ScrollToTop';
import { BlogPosts } from './subcomponents/BlogPosts';
import { Hero } from '../../helpers/Hero';
import { About } from './subcomponents/About';
import { Reviews } from './subcomponents/Reviews';
import { Contact } from './subcomponents/Contact';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount() {
        getArticles().then(res => {
            this.setState({
                articles: res,
            });
        });
        ReactGA.pageview('/');
    }

    render() {
        return (
            <div className="full-width">
                <ScrollToTop />
                <Hero image={heroImage} alt="Stuart Terry Fitness" />
                <About />
                <div className="background-secondary">
                    <div className="container padding-vertical-large padding-horizontal-small">
                        <Reviews />
                        <Contact />
                    </div>
                </div>

                {this.state.articles.length > 0 ? (
                    <BlogPosts articles={this.state.articles} />
                ) : null}
            </div>
        );
    }
}

export default Home;
