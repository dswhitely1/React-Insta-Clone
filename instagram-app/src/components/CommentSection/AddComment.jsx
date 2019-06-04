import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddCommentButton, AddCommentInput } from '../Layout/StyledComponents';

class AddComment extends Component {
  state = {
    formValue: '',
    comment: {
      id: '',
      username: 'hamatsa', // Change to Dynamic at a Later Time
      text: '',
    },
  };

  handleChange = e => {
    this.setState( {
      formValue: e.target.value,
      comment: {
        ...this.state.comment,
        text: e.target.value,
        id: this.props.nextId.toString(),
      },
    } );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment( this.state.comment );
    this.setState( {
      formValue: '',
      comment: {
        ...this.state.comment,
        text: '',
      },
    } );
  };

  render() {
    const { formValue } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <AddCommentInput onChange={ this.handleChange } type={ 'text' }
                         value={ formValue } placeholder={ 'Add Comment' }/>
        <AddCommentButton>Post</AddCommentButton>
      </form>
    );
  }
}

AddComment.propTypes = {
  state: PropTypes.shape( {
    formValue: PropTypes.string,
    comment: PropTypes.shape( {
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string,
    } ),
  } ),
};

export default AddComment;