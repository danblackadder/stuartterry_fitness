// Image.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postImage, getImages, deleteImage } from '../../actions/image';
//import classnames from 'classnames';

import Dropzone from 'react-dropzone';

import { MdDelete } from 'react-icons/md';

class Image extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.getImages();
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onDrop(files) {
        if (files.length < 11) {
            var data = new FormData();
            files.forEach(file => {
                data.append('files.name', file.name);
                data.append('files', file);
            });

            this.props.postImage(data).then(res => {
                console.log('Done');
                this.props.getImages();
            });
        } else {
            console.log('Too many files');
        }
    }

    handleDelete(id) {
        var confirm = window.confirm(
            'Are you sure you want to delete this image?',
        );
        if (confirm) {
            this.props.deleteImage(id).then(res => {
                this.props.getImages();
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }

    render() {
        //const {errors} = this.state;
        return (
            <div className="container padding-large">
                <h1>Images</h1>
                <form onSubmit={this.handleUpload}>
                    <div className="relative flex-column margin-vertical-large">
                        <Dropzone
                            className="align-stretch background-white flex-center cursor-pointer"
                            style={{ height: 200 + 'px' }}
                            accept="image/jpeg, image/png"
                            maxSize={52428800}
                            inputProps={{
                                type: 'file',
                                name: 'files',
                                encType: 'multipart/form-data',
                            }}
                            onDrop={(accepted, rejected) =>
                                this.onDrop(accepted, rejected)
                            }>
                            <div className="black">
                                Try dropping some files here, or click to select
                                files to upload.
                            </div>
                        </Dropzone>
                    </div>
                </form>

                <div
                    className="relative background-secondary padding flex-row is-wrapped"
                    style={{ minHeight: 270 + 'px' }}>
                    {this.props.images.length > 0 ? (
                        Object.keys(this.props.images).map(
                            i =>
                                this.props.images[i]._id ? (
                                    <div
                                        key={this.props.images[i]._id}
                                        className="relative background-black margin-small border overflow-hidden"
                                        style={{
                                            height: 270 + 'px',
                                            width: 270 + 'px',
                                        }}>
                                        <div className="absolute top right">
                                            <button
                                                onClick={id =>
                                                    this.handleDelete(
                                                        this.props.images[i]
                                                            ._id,
                                                    )
                                                }
                                                className="background-secondary border cursor-pointer"
                                                style={{
                                                    minHeight: 50 + 'px',
                                                    minWidth: 50 + 'px',
                                                }}>
                                                <MdDelete
                                                    size="2em"
                                                    color="#fff"
                                                    classNames="color-danger-hover"
                                                />
                                            </button>
                                        </div>
                                        <div
                                            className="overflow-hidden"
                                            style={{
                                                height: 270 + 'px',
                                                width: 270 + 'px',
                                            }}>
                                            <img
                                                src={
                                                    '/uploads/' +
                                                    this.props.images[i]
                                                        .location
                                                }
                                                alt={this.props.images[i].name}
                                                className="relative"
                                                style={{
                                                    height: 135 + 'px',
                                                    top: 50 + '%',
                                                    left: 50 + '%',
                                                    transform:
                                                        'translateY(-50%) translateX(-50%)',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ) : null,
                        )
                    ) : (
                        <div className="relative full-height full-width flex-center">
                            Uploaded images will appear here
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Image.propTypes = {
    postImage: PropTypes.func.isRequired,
    getImages: PropTypes.func.isRequired,
    deleteImage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    images: state.images,
});

export default connect(
    mapStateToProps,
    { postImage, getImages, deleteImage },
)(Image);
