import React from 'react';
import PropTypes from 'prop-types';
// Components
import Post from './Post';

const PostContainer = ({ posts, nextId, deleteComment, addComment }) => {
  return (
    <section className={'post-container'}>
      {posts.map((post, i) => <Post post={post} postId={i}
                                    addComment={addComment}
                                    key={post.id} nextId={nextId}
                                    deleteComment={deleteComment}/>)}
    </section>
  );
};

PostContainer.propTypes = {
  props: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.object),
    nextId: PropTypes.number,
  }),
};

export default PostContainer;

