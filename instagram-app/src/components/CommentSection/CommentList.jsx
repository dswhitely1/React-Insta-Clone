import React from 'react';

import {TextBold} from '../Layout/StyledComponents';

const CommentList = ({comment}) => {
    return (
        <p>
            <TextBold>{`${comment.username}`}</TextBold>{` ${comment.text}`}
        </p>
    );
};

export default CommentList;