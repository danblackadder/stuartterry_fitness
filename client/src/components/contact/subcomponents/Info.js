import React from 'react';

import { Social } from './Social';

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

			<Social />

		</div>
	);
};
