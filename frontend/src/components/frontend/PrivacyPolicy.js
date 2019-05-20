// Navbar.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';
import ReactGA from 'react-ga';
import ScrollToTop from 'react-scroll-up';
import { Helmet } from 'react-helmet';

class PrivacyPolicy extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		ReactGA.pageview('/privacy-policy');
	}

	render() {
		return (
			<div className="full-width">
				<Helmet>
					<title>Stuart Terry Fitness - Privacy Policy</title>
				</Helmet>
				<ScrollToTop showUnder={160}>
					<FaAngleUp size="2em" color="#fff" />
				</ScrollToTop>
				<div className="container padding-large">
					<h2 className="text-center margin-bottom-large">
						Privacy Policy
					</h2>
					<p className="padding-vertical-small">
						Your privacy is important to us. It is Stuart Terry
						Fitness' policy to respect your privacy regarding any
						information we may collect from you across our website,{' '}
						<a href="http://stuartterry.fitness">
							http://stuartterry.fitness
						</a>, and other sites we own and operate.
					</p>
					<p className="padding-vertical-small">
						We only ask for personal information when we truly need
						it to provide a service to you. We collect it by fair
						and lawful means, with your knowledge and consent. We
						also let you know why we’re collecting it and how it
						will be used.
					</p>
					<p className="padding-vertical-small">
						We only retain collected information for as long as
						necessary to provide you with your requested service.
						What data we store, we’ll protect within commercially
						acceptable means to prevent loss and theft, as well as
						unauthorised access, disclosure, copying, use or
						modification.
					</p>
					<p className="padding-vertical-small">
						We don’t share any personally identifying information
						publicly or with third-parties, except when required to
						by law.
					</p>
					<p className="padding-vertical-small">
						Our website may link to external sites that are not
						operated by us. Please be aware that we have no control
						over the content and practices of these sites, and
						cannot accept responsibility or liability for their
						respective privacy policies.
					</p>
					<p className="padding-vertical-small">
						You are free to refuse our request for your personal
						information, with the understanding that we may be
						unable to provide you with some of your desired
						services.
					</p>
					<p className="padding-vertical-small">
						Your continued use of our website will be regarded as
						acceptance of our practices around privacy and personal
						information. If you have any questions about how we
						handle user data and personal information, feel free to
						contact us.
					</p>
					<p className="padding-vertical-small">
						This policy is effective as of 12 June 2018.
					</p>
				</div>
			</div>
		);
	}
}
PrivacyPolicy.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withRouter(PrivacyPolicy));
