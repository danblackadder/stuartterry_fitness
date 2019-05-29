import React from 'react';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export const Info = () => {
	return (
		<div>
			<h1 className="text-center margin-vertical-large">
				YOUR JOURNEY STARTS HERE
			</h1>

			<p className="text-center margin-small">
				WE ALL HAVE THE POTENTIAL TO BE HEALTHY AND IN SHAPE. I HAVE THE
				KNOWLEDGE AND SKILL TO GET YOU THERE FASTER. WHETHER YOU ARE
				LOOKING TO GET LEAN, LOSE FAT OR SIMPLY ADD MUSCLE, MY CUSTOM
				TRAINING PLANS AND NUTRITIONAL KNOWLEDGE CAN GET YOU THERE.
			</p>

			<p className="text-center margin-small">
				I CUSTOMISE EVERY CLIENTS TRAINING AND NUTRITIONAL PLAN TO SUIT
				THEIR LIFESTYLE AND FUTURE GOALS
			</p>

			<h4 className="text-center margin bold">
				YOUR BODY, YOUR RESULTS, YOUR CHOICES
			</h4>

			<h5 className="text-center margin-small">STUART TERRY</h5>

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
		</div>
	);
};
