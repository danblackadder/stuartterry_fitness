// register.js

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateContactInput(data) {
    let errors = {};
    data.subject = !isEmpty(data.subject) ? data.subject : '';
    data.content = !isEmpty(data.content) ? data.content : '';
    data.contact = !isEmpty(data.contact) ? data.contact : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.name = !isEmpty(data.name) ? data.name : '';
    
    if(Validator.isEmpty(data.subject)) {
        errors.subject = 'Subject field is required';
    }

    if(Validator.isEmpty(data.content)) {
        errors.content = 'Content field is required';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    if(Validator.isEmpty(data.contact)) {
        errors.contact = 'Contact field is required';
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}