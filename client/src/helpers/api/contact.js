// import axios from 'axios';

// export const postContact = (contact) => {
//     return new Promise((resolve, reject) => {
//         axios
//             .post('/api/contact/', contact)
//             .then(res => {
//                 resolve(res.data);
//             })
//             .catch(err => {
//                 reject(err);
//             });
//     });
// };

export const postContact = () => {
    return new Promise((resolve, reject) => {
        let rand = Math.floor((Math.random() * 100) + 1);
        if (rand % 2 === 0) {
            resolve('Email Sent');
        } else {
            reject('Failed to Send');
        }
    });
};