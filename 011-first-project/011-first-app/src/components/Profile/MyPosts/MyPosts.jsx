import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    debugger;

    return (
<div className={classes.my_posts}>
            My posts
            <div>
              New post
            {/* <form method="post" action="#">
              <input type="text">your news...</input>
              <button>Send</button>
            </form> */}
            </div>
            <div>
                <Post message="Hi! How are you?" />
                <Post message="It's my first post" />
            </div>
          </div>
    )
        }

        export default MyPosts;