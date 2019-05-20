// errorReducer.js

import { SET_IMAGES } from '../actions/types';

const initialState = {};

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_IMAGES:
            return action.payload;
        default: 
            return state;
    }
}