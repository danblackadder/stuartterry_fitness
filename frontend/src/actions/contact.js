// authentication.js

import axios from 'axios';
import { GET_ERRORS } from './types';

export const postContact = (contact) => dispatch => {
    return new Promise((resolve) => {
        axios.post('/api/contact/', contact)
                .then(res => resolve(res))
                .catch(err => {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data
                    });
                    resolve(err);
                });
    })
}
