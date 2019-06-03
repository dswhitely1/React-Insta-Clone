import React from 'react';
import moment from 'moment';

import CommentContainer from '../CommentSection/CommentContainer';
import {
    ActionBar,
    Comment,
    Image,
    Likes,
    Notifications,
    PostHeader,
    PostSection,
    TextBold,
    Thumbnail, TimeStamp,
} from '../Layout/StyledComponents';

const Post = props => {
    const {post} = props;
    const timeStamp = moment().fromNow();
    return (
        <section>
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
            <hr/>
            {/*Post a new Comment*/}
        </section>
    );
};

export default Post;