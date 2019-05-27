import React from 'react';
import ScrollUp from 'react-scroll-up';
import { FaAngleUp } from 'react-icons/fa';

export const ScrollToTop = () => (
    <ScrollUp showUnder={160}>
        <FaAngleUp size="2em" color="#fff" />
    </ScrollUp>
);