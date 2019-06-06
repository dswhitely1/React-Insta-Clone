import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// Styles
import { TextBold } from '../styles/StyledComponents';


const Likes = styled.div`
  height: 18px;
  margin-bottom: 8px;
  padding: 0 16px;
  background-color: white;
`;


const PostLikes = ({ likes }) => {
  return (
    <Likes>
      <TextBold>{likes}</TextBold>
    </Likes>
  );
};

PostLikes.propTypes = {
  props: PropTypes.shape({
    likes: PropTypes.number,
  }),
};

export default PostLikes;
