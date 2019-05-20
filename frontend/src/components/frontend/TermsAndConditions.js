// Navbar.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';
import ReactGA from 'react-ga';
import ScrollToTop from 'react-scroll-up';
import { Helmet } from 'react-helmet';

class TermsAndConditions extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		ReactGA.pageview('/terms-and-conditions');
	}

	render() {
		return (
			<div className="full-width">
				<Helmet>
					<title>Stuart Terry Fitness - Terms and Conditions</title>
				</Helmet>
				<ScrollToTop showUnder={160}>
					<FaAngleUp size="2em" color="#fff" />
				</ScrollToTop>
				<div className="container padding-large">
					<h2 className="text-center  margin-bottom-large">
						Stuart Terry Fitness Terms of Service
					</h2>
					<h3 className="padding-vertical">1. Terms</h3>
					<p className="padding-vertical-small">
						By accessing the website at{' '}
						<a href="http://stuartterry.fitness">
							http://stuartterry.fitness
						</a>, you are agreeing to be bound by these terms of
						service, all applicable laws and regulations, and agree
						that you are responsible for compliance with any
						applicable local laws. If you do not agree with any of
						these terms, you are prohibited from using or accessing
						this site. The materials contained in this website are
						protected by applicable copyright and trademark law.
					</p>
					<h3 className="padding-vertical">2. Use License</h3>
					<ol type="a" className="padding-left">
						<li className="padding-vertical-small">
							Permission is granted to temporarily download one
							copy of the materials (information or software) on
							Stuart Terry Fitness' website for personal,
							non-commercial transitory viewing only. This is the
							grant of a license, not a transfer of title, and
							under this license you may not:
							<ol
								type="i"
								className="padding-vertical-small padding-left">
								<li className="padding-vertical-small">
									modify or copy the materials;
								</li>
								<li className="padding-vertical-small">
									use the materials for any commercial
									purpose, or for any public display
									(commercial or non-commercial);
								</li>
								<li className="padding-vertical-small">
									attempt to decompile or reverse engineer any
									software contained on Stuart Terry Fitness'
									website;
								</li>
								<li className="padding-vertical-small">
									remove any copyright or other proprietary
									notations from the materials; or
								</li>
								<li className="padding-vertical-small">
									transfer the materials to another person or
									"mirror" the materials on any other server.
								</li>
							</ol>
						</li>
						<li className="padding-vertical-small">
							This license shall automatically terminate if you
							violate any of these restrictions and may be
							terminated by Stuart Terry Fitness at any time. Upon
							terminating your viewing of these materials or upon
							the termination of this license, you must destroy
							any downloaded materials in your possession whether
							in electronic or printed format.
						</li>
					</ol>
					<h3 className="padding-vertical">3. Disclaimer</h3>
					<ol type="a">
						<li className="padding-vertical-small">
							The materials on Stuart Terry Fitness' website are
							provided on an 'as is' basis. Stuart Terry Fitness
							makes no warranties, expressed or implied, and
							hereby disclaims and negates all other warranties
							including, without limitation, implied warranties or
							conditions of merchantability, fitness for a
							particular purpose, or non-infringement of
							intellectual property or other violation of rights.
						</li>
						<li className="padding-vertical-small">
							Further, Stuart Terry Fitness does not warrant or
							make any representations concerning the accuracy,
							likely results, or reliability of the use of the
							materials on its website or otherwise relating to
							such materials or on any sites linked to this site.
						</li>
					</ol>
					<h3 className="padding-vertical">4. Limitations</h3>
					<p className="padding-vertical-small">
						In no event shall Stuart Terry Fitness or its suppliers
						be liable for any damages (including, without
						limitation, damages for loss of data or profit, or due
						to business interruption) arising out of the use or
						inability to use the materials on Stuart Terry Fitness'
						website, even if Stuart Terry Fitness or a Stuart Terry
						Fitness authorized representative has been notified
						orally or in writing of the possibility of such damage.
						Because some jurisdictions do not allow limitations on
						implied warranties, or limitations of liability for
						consequential or incidental damages, these limitations
						may not apply to you.
					</p>
					<h3 className="padding-vertical">
						5. Accuracy of materials
					</h3>
					<p className="padding-vertical-small">
						The materials appearing on Stuart Terry Fitness' website
						could include technical, typographical, or photographic
						errors. Stuart Terry Fitness does not warrant that any
						of the materials on its website are accurate, complete
						or current. Stuart Terry Fitness may make changes to the
						materials contained on its website at any time without
						notice. However Stuart Terry Fitness does not make any
						commitment to update the materials.
					</p>
					<h3 className="padding-vertical">6. Links</h3>
					<p className="padding-vertical-small">
						Stuart Terry Fitness has not reviewed all of the sites
						linked to its website and is not responsible for the
						contents of any such linked site. The inclusion of any
						link does not imply endorsement by Stuart Terry Fitness
						of the site. Use of any such linked website is at the
						user's own risk.
					</p>
					<h3 className="padding-vertical">7. Modifications</h3>
					<p className="padding-vertical-small">
						Stuart Terry Fitness may revise these terms of service
						for its website at any time without notice. By using
						this website you are agreeing to be bound by the then
						current version of these terms of service.
					</p>
					<h3 className="padding-vertical">8. Governing Law</h3>
					<p className="padding-vertical-small">
						These terms and conditions are governed by and construed
						in accordance with the laws of England and you
						irrevocably submit to the exclusive jurisdiction of the
						courts in that State or location.
					</p>
				</div>
			</div>
		);
	}
}
TermsAndConditions.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withRouter(TermsAndConditions));
