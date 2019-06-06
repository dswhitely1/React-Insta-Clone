import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { DeleteIcon, TextBold } from '../styles/StyledComponents';
import Content from '../styles/components/Content';

const CommentList = ({ comment, deleteComment, postId }) => {
  const { username, text, id } = comment;
  return (
    <Content left className={'delete-icon'}>
      <p>
        <TextBold>{`${username}`}</TextBold>{` ${text}`}
      </p>
      <DeleteIcon onClick={() => deleteComment(postId, id)}
                  className={'sprite sprite-show'}/>
    </Content>
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