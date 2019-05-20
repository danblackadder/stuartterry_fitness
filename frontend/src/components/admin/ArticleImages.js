import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { MdContentCopy } from 'react-icons/md';

class ArticleImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };
        this.handleCopied = this.handleCopied.bind(this);
    }

    handleCopied() {
        this.setState({
            copied: true,
        });
        setTimeout(() => {
            this.setState({
                copied: false,
            });
        }, 1050);
    }

    render() {
        return (
            <div className="margin-horizontal-small">
                {this.props.id ? (
                    <div
                        className="relative overflow-hidden background-black border"
                        style={{
                            height: 280 + 'px',
                            width: 280 + 'px',
                        }}>
                        <div className="absolute flex-row top right">
                            <CopyToClipboard
                                text={'/uploads/' + this.props.location}>
                                <div
                                    onClick={this.handleCopied}
                                    className="btn">
                                    <MdContentCopy
                                        size="2em"
                                        color="#fff"
                                        className="icon"
                                    />
                                </div>
                            </CopyToClipboard>
                        </div>
                        <img
                            src={'/uploads/' + this.props.location}
                            alt={this.props.name}
                            className="relative"
                            style={{
                                height: 135 + 'px',
                                top: 50 + '%',
                                left: 50 + '%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            onClick={this.props.handleImageChange.bind(
                                this,
                                this.props.location,
                            )}
                        />
                        <div
                            className={classnames(
                                'text-center bold display-none absolute',
                                {
                                    'display-block': this.state.copied,
                                },
                            )}
                            style={{
                                top: 50 + '%',
                                left: 50 + '%',
                                transform: 'translate(-50%, -50%)',
                            }}>
                            Copied!
                        </div>
                    </div>
                ) : (
                    <div
                        style={{ height: 280 + 'px', width: 280 + 'px' }}
                        className="overflow-hidden display-block relative background-secondary"
                    />
                )}
            </div>
        );
    }
}

ArticleImages.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ArticleImages);
