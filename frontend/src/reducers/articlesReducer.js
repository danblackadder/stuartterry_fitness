// errorReducer.js

import { SET_ARTICLES } from '../actions/types';

const initialState = {};

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_ARTICLES:
            return action.payload;
        default: 
            return state;
    }
}