import React, { Component } from 'react';

import { postContact } from '../../../helpers/api/contact';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            subject: '',
            name: '',
            email: '',
            contact: '',
            content: '',
            errors: {},
            response: '',
        };
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        // const contact = {
        //     subject: this.state.subject,
        //     content: this.state.content,
        //     name: this.state.name,
        //     email: this.state.email,
        //     contact: this.state.contact,
        //     response: '',
        // };
        postContact()
        .then(res => {
            this.setState({
                subject: '',
                name: '',
                email: '',
                contact: '',
                content: '',
                response: res,
            });
        })
        .catch(err => {
            this.setState({
                response: err,
            })
        })
    };

    render() {
        let errors = {};
        return (
            <form
                onSubmit={this.handleSubmit}
                className="margin-top-large padding-horizontal-small">
                <div className="margin-bottom-small">CONTACT US</div>
                <div className="flex-column margin-vertical">
                    {errors.name && <div className="danger">{errors.name}</div>}
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="padding-small border-transparent border-primary-hover"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                    />
                </div>
                <div className="flex-column margin-vertical">
                    {errors.contact && (
                        <div className="danger">{errors.contact}</div>
                    )}
                    <input
                        type="tel"
                        placeholder="Contact"
                        name="contact"
                        className="padding-small border-transparent border-primary-hover"
                        onChange={this.handleInputChange}
                        value={this.state.contact}
                    />
                </div>
                <div className="flex-column margin-vertical">
                    {errors.email && (
                        <div className="danger">{errors.email}</div>
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="padding-small border-transparent border-primary-hover"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                    />
                </div>
                <div className="flex-column margin-vertical">
                    {errors.subject && (
                        <div className="danger">{errors.subject}</div>
                    )}
                    <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        className="padding-small border-transparent border-primary-hover"
                        onChange={this.handleInputChange}
                        value={this.state.subject}
                    />
                </div>
                <div className="flex-column margin-vertical">
                    {errors.content && (
                        <div className="danger">{errors.content}</div>
                    )}
                    <textarea
                        type="text"
                        placeholder="Enquiry..."
                        name="content"
                        className="padding-small border-transparent border-primary-hover"
                        rows="10"
                        onChange={this.handleInputChange}
                        value={this.state.content}
                    />
                </div>
                <div className="margin-vertical">
                    <div className="flex-row justify-space-between">
                        <div className="align-start primary">
                            {this.state.response}
                        </div>
                        <button
                            type="submit"
                            className="padding-vertical padding-horizontal-large border-white-solid background-transparent white cursor-pointer background-primary-bottom">
                            <h3 className="white relative">SUBMIT</h3>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default ContactForm;