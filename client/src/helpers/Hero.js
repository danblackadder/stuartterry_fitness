import React from 'react';

export const Hero = props => {
    return <img
        className="full-width"
        src={props.image}
        alt={props.alt}
    />
}