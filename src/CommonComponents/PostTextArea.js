import React from 'react';
import PropTypes from 'prop-types';

const PostTextArea = ({
    noOfLines,
    content,
    editContent
}) => {
    return (
        <div className="form-group content-text-area">
          <label htmlFor="content">Post:</label>
          <textarea 
            className="form-control" 
            rows={noOfLines} 
            id="content" 
            value={content} 
            onChange={editContent}/>
        </div>
    );
};

PostTextArea.propTypes = {
    noOfLines: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    editContent: PropTypes.func.isRequired
};

export default PostTextArea;