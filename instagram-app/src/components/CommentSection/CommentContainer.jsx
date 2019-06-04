import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import moment from 'moment';
import { AddCommentSection, TimeStamp } from '../Layout/StyledComponents';
import AddComment from './AddComment';

class CommentContainer extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.setState( {
      comments: this.props.post.comments,
    } );
  }

  handleAddComment = comment => {
    const { incrementNextId } = this.props;
    this.setState( { comments: [...this.state.comments, comment] }, () => incrementNextId() );
  };

  render() {
    const { comments } = this.state;
    const { nextId, postId } = this.props;
    const timeStamp = moment().fromNow();
    return (
      <section>
        <div className={ 'comment-section' }>
          { comments.map( comment => <CommentList comment={ comment }
                                                  key={ comment.id }/> ) }
        </div>
        <TimeStamp>{ timeStamp }</TimeStamp>
        <AddCommentSection>
          <AddComment addComment={ this.handleAddComment }
                      nextId={ nextId } postId={ postId }/>
        </AddCommentSection>
      </section>
    );
  }
}

CommentContainer.propTypes = {
  props: PropTypes.arrayOf( PropTypes.object ),
  state: PropTypes.shape( {
    comments: PropTypes.arrayOf( PropTypes.object ),
  } ),

};

export default CommentContainer;

