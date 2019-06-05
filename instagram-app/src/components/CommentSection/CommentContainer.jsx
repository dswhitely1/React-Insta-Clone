import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import moment from 'moment';
import { AddCommentSection, TimeStamp } from '../Layout/StyledComponents';
import AddComment from './AddComment';

const CommentContainer = props => {
  const { nextId, postId, post, addComment, deleteComment } = props;
  const { comments } = post;
  const timeStamp = moment().fromNow();
  return (
    <section>
      <div className={ 'comment-section' }>
        { comments.map( comment => <CommentList comment={ comment }
                                                deleteComment={ deleteComment }
                                                commentId={ comment.id }
                                                key={ comment.id }
                                                postId={ postId }/> ) }
      </div>
      <TimeStamp>{ timeStamp }</TimeStamp>
      <AddCommentSection>
        <AddComment addComment={ addComment }
                    nextId={ nextId } postId={ postId }/>
      </AddCommentSection>
    </section>
  );
};

CommentContainer.propTypes = {
  props: PropTypes.shape( {
    nextId: PropTypes.number,
    postId: PropTypes.number,
    post: PropTypes.shape( {
      comments: PropTypes.arrayOf( PropTypes.object ),
    } ),
  } ),
};

export default CommentContainer;

