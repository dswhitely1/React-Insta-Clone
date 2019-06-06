import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  ActionBar,
  Comment,
  LikedNotifications,
  Notifications,
  PostSection,
} from '../styles/StyledComponents';

const PostActionBar = ( { isLiked, isLikedToggle } ) => {
  return (
    <ActionBar>
      <PostSection className={ 'action-bar' }>
        { isLiked ? <LikedNotifications className={ 'sprite sprite-show' }
                                        onClick={ isLikedToggle }/> :
          <Notifications className={ 'sprite sprite-show' }
                         onClick={ isLikedToggle }/> }
        <Comment className={ 'sprite sprite-show' }/>
      </PostSection>
    </ActionBar>
  );
};

PostActionBar.propTypes = {
  isLiked: PropTypes.bool,
};

export default PostActionBar;