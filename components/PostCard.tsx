import React from 'react';

// @ts-ignore
const PostCard = ({ post }) => {
    return(
        <div>
            {post.title}
            {post.excerpt}
        </div>
    )
}

export default PostCard;