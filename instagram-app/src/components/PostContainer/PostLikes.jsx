import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Likes, TextBold } from '../styles/StyledComponents';

const PostLikes = ( { likes } ) => {
  return (
    <Likes>
      <TextBold>{ likes }</TextBold>
    </Likes>
  );
};

PostLikes.propTypes = {
  props: PropTypes.shape( {
    likes: PropTypes.number,
  } ),
};

export default PostLikes;
