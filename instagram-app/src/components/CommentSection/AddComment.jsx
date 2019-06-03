import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AddCommentButton, AddCommentInput} from '../Layout/StyledComponents';

class AddComment extends Component {
    state = {
        formValue: '',
    };

    handleSubmit = e => {
        e.preventDefault();
    };

    handleChange = e => {
        this.setState({formValue: e.target.value});
    };

    render() {
        const {formValue} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <AddCommentInput onChange={this.handleChange} type={'text'} value={formValue} placeholder={'Add Comment'}/>
                <AddCommentButton>Post</AddCommentButton>
            </form>
        );
    }
}

AddComment.propTypes = {
    state: PropTypes.shape({
        formValue: PropTypes.string,
    }),
};

export default AddComment;