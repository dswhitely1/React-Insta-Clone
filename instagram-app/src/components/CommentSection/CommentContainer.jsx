import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

class CommentContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      comments: [],
      likes: 0,
    };
  }

  componentDidMount() {
    this.setState( {
      comments: this.props.post.comments,
      likes: this.props.post.likes,
    } );
  }

  render() {
    const { comments } = this.state;
    return (
      <div className={ 'comment-section' }>
        { comments.map( comment => <CommentList comment={ comment }
                                                key={ comment.id }/> ) }
      </div>
    );
  }
}

CommentContainer.propTypes = {
  props: PropTypes.arrayOf( PropTypes.object ),
  state: PropTypes.shape( {
    comments: PropTypes.arrayOf( PropTypes.object ),
    likes: PropTypes.number,
  } ),

};

export default CommentContainer;

