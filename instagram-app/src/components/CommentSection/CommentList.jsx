import React from 'react';
import PropTypes from 'prop-types';

import {TextBold} from '../Layout/StyledComponents';

const CommentList = ({comment}) => {
    return (
        <p>
            <TextBold>{`${comment.username}`}</TextBold>{` ${comment.text}`}
        </p>
    );
};

CommentList.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    }),
};

export default CommentList;