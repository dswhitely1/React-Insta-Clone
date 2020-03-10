import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { TextBold } from '../styles/StyledComponents';
import Content from '../styles/components/Content';
import styled from 'styled-components';

const Thumbnail = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

const PostHeader = ({ post }) => {
  return (
    <Content header>
      <Content left>
        <Thumbnail src={`${post.thumbnailUrl}`} alt={post.username}/>
        <TextBold>{post.username}</TextBold>
      </Content>
    </Content>
  );
};

PostHeader.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
  }),
};

export default PostHeader;

