import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src="https://cdn.auth0.com/blog/es6rundown/logo.png"/>
            {props.message}
        </div>
    )
}

export default Post;