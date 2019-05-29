import React from 'react';

export const BlogPosts = props => {
    return (
        <div className="container">
        <h3 className="text-center">ADVICE AND TRAINING TIPS</h3>

        <h2 className="text-center">LATEST BLOG</h2>

        <div className="padding-vertical-large flex-row is-wrapped flex-center">
            {Object.keys(props.articles).map(i =>
                i < 3 ? (
                    <Link to={'/blog/' + props.articles[i].title}>
                        <div
                            className="margin relative"
                            style={{
                                height: 280 + 'px',
                                width: 280 + 'px',
                            }}>
                            <div
                                className="overflow-hidden background-secondary"
                                style={{
                                    height: 280 + 'px',
                                    width: 280 + 'px',
                                }}>
                                <img
                                    src={props.articles[i].img}
                                    className="relative"
                                    style={{
                                        height: 130 + 'px',
                                        top: 50 + '%',
                                        left: 50 + '%',
                                        transform:
                                            'translateY(-50%) translateX(-50%)',
                                    }}
                                    alt={props.articles[i].title}
                                />
                            </div>
                            <div
                                className="background-primary absolute flex-column flex-center"
                                style={{
                                    height: 80 + 'px',
                                    width: 80 + 'px',
                                    bottom: -10 + 'px',
                                    left: -10 + 'px',
                                }}>
                                <div>
                                    {props.articles[i].createdDate.slice(
                                        8,
                                        10,
                                    )}
                                </div>
                                <div>
                                    {props.articles[i].createdDate.slice(
                                        5,
                                        7,
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : null,
            )}
        </div>
    </div>
    )
};
