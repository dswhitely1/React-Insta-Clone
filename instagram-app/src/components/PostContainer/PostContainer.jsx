import React from 'react';
import PropTypes from 'prop-types';
// Components
import Post from './Post';
import Container from '../styles/components/Container';

const PostContainer = ({ posts, nextId, deleteComment, addComment }) => {
  return (
    <Container post>
      {posts.map((post, i) => <Post post={post} postId={i}
                                    addComment={addComment}
                                    key={post.id} nextId={nextId}
                                    deleteComment={deleteComment}/>)}
    </Container>
  );
};

PostContainer.propTypes = {
  props: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object),
    nextId: PropTypes.number,
  }),
};

export default PostContainer;

