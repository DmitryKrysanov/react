import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  // let PostsData = [
  //   {id: 1, message: 'Hi! How are you?', likesCount: 10},
  //   {id: 2, message: "It's my first post", likesCount: 23}
  // ]

  let PostsElememts = PostsData.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} /> )

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