import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import Null from './Null';

import ScrollToTop from '../../ScrollToTop';

class Main extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <Router>
                <ScrollToTop>
                    <div className="full-container flex-column full-screen-height-min">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/blog" component={Blog} />
                            <Route exact path="/contact" component={Contact} />
                            <Route
                                exact
                                path="/terms-and-conditions"
                                component={TermsAndConditions}
                            />
                            <Route
                                exact
                                path="/privacy-policy"
                                component={PrivacyPolicy}
                            />
                            <Route path="/blog/:title" component={BlogPost} />
                            <Route component={Null} />
                        </Switch>
                        <Footer />
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

Main.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Main);
