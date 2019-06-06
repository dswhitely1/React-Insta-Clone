import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { DeleteIcon, LeftContent, TextBold } from '../styles/StyledComponents';

const CommentList = ({ comment, deleteComment, postId }) => {
  const { username, text, id } = comment;
  return (
    <LeftContent className={'delete-icon'}>
      <p>
        <TextBold>{`${username}`}</TextBold>{` ${text}`}
      </p>
      <DeleteIcon onClick={() => deleteComment(postId, id)}
                  className={'sprite sprite-show'}/>
    </LeftContent>
  );
};

CommentList.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default CommentList;