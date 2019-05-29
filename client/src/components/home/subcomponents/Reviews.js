import React from 'react';
import Slider from 'react-slick';

import { FaStar } from 'react-icons/fa';
import { SlickSettings } from '../../../helpers/SlickSettings';

export const Reviews = () => {
	let reviewData = [
		{
			url:
				'https://www.yell.com/biz/stuart-terry-fitness-uxbridge-9256755/#reviews',
			text:
				'STUART HAS BEEN A GREAT TRAINER PROVIDING ME WITH THE TOOL TO HELP ME REACH MY GOALS. HIS KIND AND SUPPORTIVE ATTITUDE HAS FILLED ME WITH CONFIDENCE AND HELPED ME FIND MY GYM MOJO',
		},
		{
			url:
				'https://www.yell.com/biz/stuart-terry-fitness-uxbridge-9256755/#reviews',
			text:
				"MY PERSONAL TRAINING SESSIONS WITH STUART ARE EXCELLENT, I FEEL I'VE MADE GREAT PROGRESS AND AM ACHIEVING THE VODY I'VE ALWAYS WANTED",
		},
		{
			url:
				'https://www.yell.com/biz/stuart-terry-fitness-uxbridge-9256755/#reviews',
			text:
				'STUART IS VERY KNOWLEDGEABLE AND CLEARLY HAS A REAL PASSION FOR HIS PROFESSION',
		},
	];

	let stars = [];
	for (let i = 0; i < 5; i++) {
		stars.push(
			<FaStar
				size="2em"
				color="#6e8e2f"
				className="margin-right-small"
			/>,
		);
	}

	return (
		<div className="text-center margin-large">
			<Slider {...SlickSettings}>
				{Object.keys(reviewData).map(i => (
					<a
						href={reviewData[i].url}
						target="_blank"
						rel="noopener noreferrer"
						key={i}>
						<div className="margin-bottom">{stars}</div>
						{reviewData[i].text}
					</a>
				))}
			</Slider>
		</div>
	);
};
