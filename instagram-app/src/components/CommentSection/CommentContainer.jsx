import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

const CommentContainer = ({comments}) => {
    return (
        <div className={'comment-section'}>
            {comments.map(comment => <CommentList comment={comment} key={comment.id}/>)}
        </div>
    );
};

CommentContainer.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentContainer;