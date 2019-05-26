import axios from 'axios';

export const getArticles = () => {
    return new Promise(resolve => {
        axios
            .get('/api/articles/')
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                resolve(err);
            });
    });
};