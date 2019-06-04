import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

// import './PostContainer.scss';

const PostContainer = ({posts}) => {
    return (
        <section className={'post-container'}>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </section>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
};

export default PostContainer;

