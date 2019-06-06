import React, { Component } from 'react';
// Styles
import { AddCommentButton, AddCommentInput } from '../styles/StyledComponents';
import Form from '../styles/components/Form';

class AddComment extends Component {
  state = {
    formValue: '',
    comment: {
      id: '',
      username: '', // Change to Dynamic at a Later Time
      text: '',
    },
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('username'));
    this.setState({ username: user });
  }

  handleChange = e => {
    this.setState({
      formValue: e.target.value,
      comment: {
        ...this.state.comment,
        text: e.target.value,
        id: this.props.nextId.toString(),
        username: this.state.username,
      },
    });
  };

  handleSubmit = e => {
    const { comment } = this.state;
    const { postId } = this.props;
    e.preventDefault();
    this.props.addComment(postId, comment);
    this.setState({
      formValue: '',
      comment: {
        ...this.state.comment,
        text: '',
      },
    });
  };

  render() {
    const { formValue } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <AddCommentInput onChange={this.handleChange} type={'text'}
                         value={formValue} placeholder={'Add Comment'}/>
        <AddCommentButton>Post</AddCommentButton>
      </Form>
    );
  }
}

export default AddComment;