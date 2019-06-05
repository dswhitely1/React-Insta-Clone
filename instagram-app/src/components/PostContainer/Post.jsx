import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentContainer from '../CommentSection/CommentContainer';
import { Image } from '../styles/StyledComponents';
import PostHeader from './PostHeader';
import PostActionBar from './PostActionBar';
import PostLikes from './PostLikes';

class Post extends Component {
  state = {
    likes: 0,
    isLiked: false,
  };

  componentWillMount() {
    this.setState( { likes: this.props.post.likes } );
  }

  handleLikedToggle = () => {
    const newLikes = this.state.isLiked ? this.state.likes - 1 : this.state.likes + 1;
    this.setState( { isLiked: !this.state.isLiked, likes: newLikes } );
  };

  render() {
    const { post, nextId, deleteComment, postId, addComment } = this.props;
    return (
      <section className={ 'post' }>
        <PostHeader post={ post }/>
        <Image src={ `${ post.imageUrl }` } alt={ post.username }/>
        <PostActionBar isLikedToggle={ this.handleLikedToggle }
                       isLiked={ this.state.isLiked }/>
        <PostLikes likes={ this.state.likes }/>
        <CommentContainer post={ post } nextId={ nextId } postId={ postId }
                          deleteComment={ deleteComment }
                          addComment={ addComment }/>
      </section>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape( {
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
  } ),
  nextId: PropTypes.number,
  postId: PropTypes.number,
};

export default Post;