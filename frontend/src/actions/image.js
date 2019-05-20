// authentication.js

import axios from 'axios';
import { SET_IMAGES } from './types';

export const postImage = (files) => dispatch => {
    return new Promise((resolve) => {
        axios.post('/api/images/upload', files, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
                .then(res => resolve(true))
                .catch(err => {
                    resolve(true);
                });
    })
}

export const getImages = () => dispatch => {
    return new Promise((resolve) => {
        axios.get('/api/images/')
            .then(res => {
                const decoded = res.data;
                if (decoded.length < 4 && decoded.length) {
                    for (var i = 0; decoded.length < 4; i++) {
                        decoded.push("");
                    }
                    dispatch(setImages(decoded));
                    resolve(true);
                } else {
                    dispatch(setImages(decoded));
                    resolve(true);
                }
            })
            .catch(err => {
                console.log(err);
                resolve(true);
            });
    })
}

export const deleteImage = (image) => dispatch => {
    return new Promise((resolve) => {
        axios.delete('/api/images/' + image)
            .then(res => {
                resolve(true);
            })
            .catch(err => {
                console.log(err);
                resolve(true);
            });
    })
}

export const setImages = decoded => {
    return {
        type: SET_IMAGES,
        payload: decoded
    }
}