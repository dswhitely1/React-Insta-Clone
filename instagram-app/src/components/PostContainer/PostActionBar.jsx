import React from 'react';
import PropTypes from 'prop-types';
// Styles
import InstagramLogos from '../styles/components/InstagramLogos';
import Content from '../styles/components/Content';

const PostActionBar = ({ isLiked, isLikedToggle }) => {
  return (
    <Content left actionBar>
      <Content left>
        {isLiked ? <InstagramLogos notifications liked
                                   onClick={isLikedToggle}/> :
          <InstagramLogos notifications
                          onClick={isLikedToggle}/>}
        <InstagramLogos comment/>
      </Content>
    </Content>
  );
};

PostActionBar.propTypes = {
  isLiked: PropTypes.bool,
};

export default PostActionBar;