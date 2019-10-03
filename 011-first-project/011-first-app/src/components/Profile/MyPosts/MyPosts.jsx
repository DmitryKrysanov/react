import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../Redux/state'; 

const MyPosts = (props) => {

  let PostsElememts = 
  props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} /> )

  let newPostElement = React.createRef();

  let AddPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.newPost}>
        <textarea className={classes.textarea} 
        placeholder="Your post..." 
        ref={newPostElement}
        onChange={onPostChange}
        value={props.newPostText}
        />
        <div className={classes.button} onClick={ AddPost }>
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