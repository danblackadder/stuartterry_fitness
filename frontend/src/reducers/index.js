// index.js

import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import articlesReducer from './articlesReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    articles: articlesReducer,
    images: imagesReducer
});