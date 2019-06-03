import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import CommentContainer from '../CommentSection/CommentContainer';
import {
    ActionBar,
    AddCommentSection,
    Comment,
    Image,
    Likes,
    Notifications,
    PostHeader,
    PostSection,
    TextBold,
    Thumbnail,
    TimeStamp,
} from '../Layout/StyledComponents';
import AddComment from '../CommentSection/AddComment';

const Post = props => {
    const {post} = props;
    const timeStamp = moment().fromNow();
    return (
        <section className={'post'}>
            <PostHeader>
                <PostSection className={'post-header'}>
                    <Thumbnail src={`${post.thumbnailUrl}`} alt={post.username}/>
                    <TextBold>{post.username}</TextBold>
                </PostSection>
            </PostHeader>
            <Image src={`${post.imageUrl}`} alt={post.username}/>
            <ActionBar>
                <PostSection className={'action-bar'}>
                    <Notifications className={'sprite sprite-show'}/>
                    <Comment className={'sprite sprite-show'}/>
                </PostSection>
            </ActionBar>
            <Likes>
                <TextBold>{`${post.likes} likes`}</TextBold>
            </Likes>
            <CommentContainer comments={post.comments}/>
            <TimeStamp>{timeStamp}</TimeStamp>
            <AddCommentSection>
                <AddComment/>
            </AddCommentSection>
        </section>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.object),
    }),
    timeStamp: PropTypes.string,
};

export default Post;