import React from 'react';
import PropTypes from 'prop-types';
import { Likes, TextBold } from '../Layout/StyledComponents';

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
