import React from 'react';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export const Social = () => {
    return (
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
    );
};
