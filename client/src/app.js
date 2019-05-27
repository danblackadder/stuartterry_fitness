import 'babel-polyfill';
import 'react-app-polyfill/ie11';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactGA from 'react-ga';

import Navigation from './components/navigation/Navigation';
import Footer from './components/navigation/Footer';
import Home from './components/home/Home';
// import About from './components/about/About';
// import Blog from './components/blog/Blog';
// import BlogPost from './components/blog/BlogPost';
// import Contact from './components/contact/Contact';
// import TermsAndConditions from './components/misc/TermsAndConditions';
// import PrivacyPolicy from './components/misc/PrivacyPolicy';
import Null from './components/misc/Null';

import HandleBack from './helpers/HandleBack';

import './scss/app.scss';

const dotenv = require('dotenv');

dotenv.config();

ReactGA.initialize(process.env.GA);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HandleBack>
          <div className="full-container flex-column full-screen-height-min">
            <Navigation />
            <Switch>
              {/*<Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:title" component={BlogPost} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/terms-and-conditions"
                component={TermsAndConditions}
              />
              <Route path="/privacy-policy" component={PrivacyPolicy} />*/}
              <Route exact path="/" component={Home} />
              <Route component={Null} />
            </Switch>
            <Footer />
          </div>
        </HandleBack>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));