import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
	return (
		<div className="container">
			<h3 className="text-center">PERSONAL TRAINING & ONLINE COACHING</h3>

			<h2 className="text-center">KEEPING THINGS SIMPLE</h2>

			<section className="padding-top-large flex-column">
				<div className="text-center">
					WHEN IT COMES TO TRAINING I LIKE TO KEEP THING SIMPLE. FROM
					SIMPLE EXERCISE MOVEMENTS TO SIMPLE NUTRITION PLANS WHICH
					ARE EASY TO FOLLOW, AND MORE IMPORTANTLY, EASY TO STICK TO.
					LOSING WEIGHT SHOULDN'T BE A CHORE, AND IF IT IS THEN YOU'RE
					PROBABLY DOING SOMETHING WRONG AND ARE MORE LIKELY TO FAIL.
					I LIKE TO BREAK DOWN THE BASICS OF WHAT YOU NEED TO DO IN
					ORDER TO GET YOUR BODY FIRING THE WAY IT NEEDS TO.
					<br />
					<br />I HAVE BEEN A GYM ADDICT FOR THE LAST 10 YEARS AND
					HAVE BEEN PHYSICALLY FIT FOR THE MAJORITY OF THAT TIME. I AM
					CONSTANTLY LEARNING AND RESEARCHING ABOUT THE HUMAN ANATOMY
					AND NUTRITION. I HAVE A REAL PASSION FOR WHAT I DO AND THERE
					IS NO BETTER FEELING THAN SEEING MY CLIENTS ACHIEVE THEIR
					BODY AND MENTAL GOALS.
				</div>
				<Link to="/about" className="align-center margin-top-large">
					<button className="padding-vertical padding-horizontal-large border-white-solid background-transparent background-primary-bottom">
						<h3 className="white relative">READ MORE</h3>
					</button>
				</Link>
			</section>
		</div>
	);
};
