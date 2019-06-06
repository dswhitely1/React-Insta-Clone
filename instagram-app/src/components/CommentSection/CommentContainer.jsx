import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
// Components
import CommentList from './CommentList';
import AddComment from './AddComment';
// Styles
import Content from '../styles/components/Content';


const CommentSection = styled.div`
  padding: 0 16px;
`;

const TimeStamp = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0 16px;
  background-color: white;
  color: rgb(153,153,153)
`;

const CommentContainer = ({ nextId, postId, post, addComment, deleteComment }) => {
  const { comments } = post;
  const timeStamp = moment().fromNow();
  return (
    <section>
      <CommentSection>
        {comments.map(comment => <CommentList comment={comment}
                                              deleteComment={deleteComment}
                                              commentId={comment.id}
                                              key={comment.id}
                                              postId={postId}/>)}
      </CommentSection>
      <TimeStamp>{timeStamp}</TimeStamp>
      <Content left commentSection>
        <AddComment addComment={addComment}
                    nextId={nextId} postId={postId}/>
      </Content>
    </section>
  );
};

CommentContainer.propTypes = {
  props: PropTypes.shape({
    nextId: PropTypes.number,
    postId: PropTypes.number,
    post: PropTypes.shape({
      comments: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export default CommentContainer;

