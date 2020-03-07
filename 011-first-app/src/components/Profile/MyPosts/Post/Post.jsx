import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src="https://cdn.auth0.com/blog/es6rundown/logo.png"/>
            <div className={classes.postInfo}>
                <div>{props.message}</div>
                <div>Likes: {props.likesCount}</div>
            </div>
        </div>
    )
}

export default Post;