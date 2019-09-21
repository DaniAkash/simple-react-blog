import React from 'react';
import PropTypes from 'prop-types';

const PostSummary = ({
    id,
    author,
    content,
    title,
    datetime,
}) => {
    return (
        <div className={`post-container container`}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{content}</p>
        </div>
    )
};

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
};

export default PostSummary;