import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let PostsData = [
  {id: 1, message: 'Hi! How are you?', likesCount: 10},
  {id: 2, message: "It's my first post", likesCount: 23}
]

const MyPosts = () => {
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
        <Post message={PostsData[0].message} id={PostsData[0].id} likesCount={PostsData[0].likesCount} />
        <Post message={PostsData[1].message} id={PostsData[1].id} likesCount={PostsData[1].likesCount} />
      </div>
    </div>
  )
}

        export default MyPosts;