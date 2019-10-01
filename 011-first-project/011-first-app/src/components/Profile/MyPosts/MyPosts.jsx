import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
// import PostsData from "./../../../index";

const MyPosts = (props) => {

  let PostsElememts = 
  props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} /> )

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.newPost}>
        <textarea className={classes.textarea} placeholder="Your post...">
        </textarea>
        <div className={classes.button}>
          <h4>Send</h4>
        </div>
      </div>
      <div>
        {PostsElememts}
      </div>
    </div>
  )
}

        export default MyPosts;