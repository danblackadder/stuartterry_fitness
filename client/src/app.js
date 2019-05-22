import 'babel-polyfill';
import 'react-app-polyfill/ie11';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactGA from 'react-ga';

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

import './scss/app.scss';

const dotenv = require('dotenv');

dotenv.config();

ReactGA.initialize(process.env.GA);

class App extends Component {
  render() {
    const baseUrl = process.env.PUBLIC_URL;

    return (
      <Router>
        <ScrollToTop>
          <div className="full-container flex-column full-screen-height-min">
            <Navbar />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:title" component={BlogPost} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/terms-and-conditions"
                component={TermsAndConditions}
              />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/" component={Home} />
              <Route component={Null} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));