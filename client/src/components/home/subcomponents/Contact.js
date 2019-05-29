import React from 'react';
import { Link } from 'react-router-dom';


import { Info } from '../../contact/subcomponents/Info';

export const Contact = () => {
	return (
		<div className="padding-top-large flex-column">
			<Info />
			<Link to="/contact" className="align-center">
				<button className="margin-top padding-vertical padding-horizontal-large border-white-solid background-transparent white cursor-pointer background-primary-bottom">
					<h3 className="white relative">
						CONTACT FOR FREE CONSULTATION
					</h3>
				</button>
			</Link>
		</div>
	);
};
