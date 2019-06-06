import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { PostHeaderSection, PostSection, TextBold, Thumbnail } from '../styles/StyledComponents';

const PostHeader = ({ post }) => {
  return (
    <PostHeaderSection className={'post-header'}>
      <PostSection>
        <Thumbnail src={`${post.thumbnailUrl}`} alt={post.username}/>
        <TextBold>{post.username}</TextBold>
      </PostSection>
    </PostHeaderSection>
  );
};

PostHeader.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default PostHeader;

