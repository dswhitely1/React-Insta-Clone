import React from 'react';
import CommentList from './CommentList';

const CommentContainer = ({comments}) => {
    return (
        <div className={'comment-section'}>
            {comments.map(comment => <CommentList comment={comment} key={comment.id}/>)}
        </div>
    );
};
export default CommentContainer;