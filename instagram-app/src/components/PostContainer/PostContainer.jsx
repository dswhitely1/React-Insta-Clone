import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

// import './PostContainer.scss';

const PostContainer = ( { posts, nextId, incrementNextId, addComment } ) => {
  return (
    <section className={ 'post-container' }>
      { posts.map( ( post, i ) => <Post post={ post } postId={ i }
                                        key={ post.id } nextId={ nextId }
                                        incrementNextId={ incrementNextId }/> ) }
    </section>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf( PropTypes.object ),
};

export default PostContainer;

