import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionBar,
  Comment,
  LikedNotifications,
  Notifications,
  PostSection,
} from '../Layout/StyledComponents';

const PostActionBar = props => {
  const { isLiked, isLikedToggle } = props;
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