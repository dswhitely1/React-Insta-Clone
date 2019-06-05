import React from 'react';
import PropTypes from 'prop-types';

import { DeleteIcon, LeftContent, TextBold } from '../styles/StyledComponents';

const CommentList = ( { comment, deleteComment, postId } ) => {
  return (
    <LeftContent className={ 'delete-icon' }>
      <p>
        <TextBold>{ `${ comment.username }` }</TextBold>{ ` ${ comment.text }` }
      </p>
      <DeleteIcon onClick={ () => deleteComment( postId, comment.id ) }
                  className={ 'sprite sprite-show' }/>
    </LeftContent>
  );
};

CommentList.propTypes = {
  comment: PropTypes.shape( {
    username: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
  } ),
};

export default CommentList;