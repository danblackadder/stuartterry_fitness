// authentication.js

import axios from 'axios';
import { GET_ERRORS, SET_ARTICLES } from './types';

export const postArticle = article => dispatch => {
    return new Promise(resolve => {
        axios
            .post('/api/articles/new', article)
            .then(res => resolve(true))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data,
                });
                resolve(false);
            });
    });
};

export const updateArticle = (article, data) => dispatch => {
    return new Promise(resolve => {
        axios
            .post('/api/articles/' + article, data)
            .then(res => resolve(true))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data,
                });
                resolve(false);
            });
    });
};

export const publishArticle = article => dispatch => {
    return new Promise(resolve => {
        axios
            .post('/api/articles/publish/' + article)
            .then(res => resolve(true))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data,
                });
                resolve(false);
            });
    });
};

export const getArticlesAdmin = () => dispatch => {
    return new Promise(resolve => {
        axios
            .get('/api/articles/admin')
            .then(res => {
                const decoded = res.data;
                dispatch(setArticles(decoded));
                resolve(true);
            })
            .catch(err => {
                console.log(err);
                resolve(false);
            });
    });
};

export const getArticles = () => dispatch => {
    return new Promise(resolve => {
        axios
            .get('/api/articles/')
            .then(res => {
                const decoded = res.data;
                dispatch(setArticles(decoded));
                resolve(true);
            })
            .catch(err => {
                console.log(err);
                resolve(false);
            });
    });
};

export const getArticle = article => dispatch => {
    return new Promise(resolve => {
        axios
            .get('/api/articles/' + article)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log(err);
                resolve(false);
            });
    });
};

export const getArticleByTitle = article => dispatch => {
    return new Promise(resolve => {
        axios
            .get('/api/articles/title/' + article)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log(err);
                resolve(false);
            });
    });
};

export const deleteArticle = article => dispatch => {
    return new Promise(resolve => {
        axios
            .delete('/api/articles/' + article)
            .then(res => {
                resolve(true);
            })
            .catch(err => {
                console.log(err);
                resolve(false);
            });
    });
};

export const setArticles = decoded => {
    return {
        type: SET_ARTICLES,
        payload: decoded,
    };
};
