import React from 'react';
import Post from './Post';

import './PostContainer.scss';

const PostContainer = ({posts}) => {
    return (
        <section className={'post-container'}>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </section>
    );
};

export default PostContainer;

